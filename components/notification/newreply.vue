<template>
  <div id="newreply" :style="{backgroundColor:read ? Colors.textTure : Colors.background,borderRadius:borderRadius}">
    <style>
       :root{
      --accent-color:{{Colors.accent}};
      --text-color:{{Colors.text}};
      --inverttext-color:{{Colors.invertTextColor}};
      --background-color:{{Colors.background}};
      --shadow-color:{{Colors.shadowColor}};
     --subtext-color:{{Colors.subTextColor}};
  }
    </style>
    <v-skeleton-loader
      v-if="loading"
      :dark="isDarkTheme ? true : false"
      ref="skeleton"
      type="list-item-avatar-two-line"
      width="100%"
    ></v-skeleton-loader>
    <img id="avatar" v-if="!loading" :src="avatar" alt="alt" />
    <div id="details-cover" v-if="!loading">
      <span class="message">
        <span class="username">{{username}}</span> replied your comment
      </span>
      <span class="time">{{time}}</span>
    </div>
     <div v-if="!loading">
      <v-menu open-on-hover :close-on-click="false" :close-on-content-click="false" offset-y>
          <template v-slot:activator="{ on }" >
            <v-btn icon v-on="on" :color="Colors.background" >
              <v-icon :color="Colors.text">mdi-dots-vertical</v-icon>
            </v-btn>
          </template>
          <v-card :color="Colors.background" width="100%">
            <v-list-item link @click="markRead">
              <v-list-item-title :style="{color:Colors.subTextColor}">Mark as Read</v-list-item-title>
            </v-list-item>
            <v-list-item link>
              <v-list-item-title :style="{color:Colors.subTextColor}">Remove this Notification</v-list-item-title>
            </v-list-item>
            <v-list-item link @click="changeTheme = !changeTheme">
              <v-list-item-title :style="{color:Colors.subTextColor}">Disable Notification from <b>{{username}}</b></v-list-item-title>
            </v-list-item>
          </v-card>
        </v-menu>
     </div>
    
  </div>
</template>

<script>
import theme_mixin from "~/mixins/theme_mixin.js";
export default {
  mixins: [theme_mixin],
  props: ["id", "index", "lengthx"],
  data() {
    return {
      loading: true,
      username: "",
      avatar: "",
      time: "",
      read:false,
      borderRadius: ""
    };
  },
  mounted() {
    if (this.index == 0 && this.lengthx == 1) {
      this.borderRadius = "6px";
    } else if (this.index == 0 && this.lengthx > 0) {
      this.borderRadius = "6px 6px 0px 0px";
    } else if (this.index == this.lengthx - 1) {
      this.borderRadius = "0px 0px 6px 6px";
    } else if (this.index !== 0 && this.index != this.lengthx - 1) {
      this.borderRadius = "0px";
    }
    setTimeout(() => {
      this.getDetails(this.id);
    }, 2000);
  },
  methods: {
    getDetails(id) {
      // console.log(id);
      (this.username = "Drake"), (this.avatar = require("~/assets/drake.jpg"));
      this.time = "2 hrs ago";
      this.loading = false;
      this.read = false
    },
    markRead(){
      this.read = true
    }
  },
  watch: {
    borderRadius: function() {
      if (this.index == 0 && this.lengthx == 1) {
        this.borderRadius = "6px";
      } else if (this.index == 0 && this.lengthx > 0) {
        this.borderRadius = "6px 6px 0px 0px";
      } else if (this.index == this.lengthx - 1) {
        this.borderRadius = "0px 0px 6px 6px";
      } else if (this.index !== 0 && this.index != this.lengthx - 1) {
        this.borderRadius = "0px";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@media screen and (min-width: 767px) {
  #newreply {
    width: 50%;
    display: block;
    margin: auto;
    display: flex;
    height: auto;
    box-shadow: 0px 1px 4px var(--shadow-color);
  }
  #avatar {
    height: 57px;
    width: 57px;
    padding: 0px;
    border-radius: 50%;
    margin: 8px 5px;
    cursor: pointer;
    border: 2px solid var(--background-color);
    box-shadow: 0px 1px 4px var(--shadow-color);
  }
  #details-cover {
    flex: 1;
    height: auto;
    padding-top: 20px;
    display: flex;
    flex-direction: column;
  }

  .message {
    flex: 1;
  }

  .username {
    font-weight: bold;
    cursor: pointer;
  }

  .time {
    display: block;
    width: 100%;
    text-align: right;
    font-size: 14px;
    color: var(--subtext-color);
    padding: 0px;
    margin: 0px;
    padding: 3px 8px 3px 0px;
    border-radius: 0px 0px 6px 6px;
  }
}

@media screen and (min-width: 320px) and (max-width: 767px) {
  #newreply {
    width: 98%;
    display: block;
    margin: auto;
    display: flex;
    height: auto;
    box-shadow: 0px 1px 4px var(--shadow-color);
  }
  #avatar {
    height: 57px;
    width: 57px;
    padding: 0px;
    border-radius: 50%;
    margin: 8px 5px;
    cursor: pointer;
    border: 2px solid var(--background-color);
    box-shadow: 0px 1px 4px var(--shadow-color);
  }

  #details-cover {
    flex: 1;
    height: auto;
    padding-top: 20px;
    display: flex;
    flex-direction: column;
  }

  .message {
    flex: 1;
  }
  .username {
    font-weight: bold;
    cursor: pointer;
  }

  .time {
    display: block;
    width: 100%;
    text-align: right;
    font-size: 13px;
    color: var(--subtext-color);
    padding: 0px;
    margin: 0px;
    padding: 3px 8px 3px 0px;
  }
}

//for iphone X and others needs to come last or it would confilct with laptop screen
@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) {
  #newreply {
    width: 98%;
    display: block;
    margin: auto;
    display: flex;
    height: auto;
    box-shadow: 0px 1px 4px var(--shadow-color);
  }
  #avatar {
    height: 57px;
    width: 57px;
    padding: 0px;
    border-radius: 50%;
    margin: 8px 5px;
    cursor: pointer;
    border: 2px solid var(--background-color);
    box-shadow: 0px 1px 4px var(--shadow-color);
  }
  #details-cover {
    flex: 1;
    height: auto;
    padding-top: 10px;
    display: flex;
    flex-direction: column;
  }

  .message {
    flex: 1;
  }
  .username {
    font-weight: bold;
    cursor: pointer;
  }
  .time {
    display: block;
    width: 100%;
    text-align: right;
    font-size: 13px;
    color: var(--subtext-color);
    padding: 0px;
    margin: 0px;
    padding: 3px 8px 3px 0px;
  }
}
</style>