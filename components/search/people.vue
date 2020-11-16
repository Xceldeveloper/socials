<template>
  <div class="people-cover" :style="{backgroundColor:Colors.textTure}">
    <style>
       :root{
      --accent-color:{{Colors.accent}};
      --text-color:{{Colors.text}};
      --subtext-color{{Colors.subTextColor}};
      --background-color:{{Colors.background}};
      --shadow-color:{{Colors.shadowColor}}
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
    <div id="name-cover" v-if="!loading">
      <span class="username">{{username}}</span>
      <span class="fullname">{{fullname}}</span>
    </div>
  </div>
</template>

<script>
import theme_mixin from "~/mixins/theme_mixin.js";
import device_mixin from "~/mixins/device_mixin.js";
export default {
  mixins: [theme_mixin, device_mixin],
  props: ["id"],
  data() {
    return {
      loading: true,
      transition: "scale-transition",

      username: "",
      fullname: "",
      avatar: ""
    };
  },
  mounted() {
    setTimeout(() => {
      this.getDetails(this.id);
    }, 4000);
  },
  methods: {
    getDetails(id) {
      console.log(id);
      (this.username = "Drake"),
        (this.fullname = "John Doe"),
        (this.avatar = require("~/assets/drake.jpg"));
      this.loading = false;
    }
  }
};
</script>

<style scoped lang="scss">
@media screen and (min-width: 767px) {
  .people-cover {
    width: 50%;
    display: block;
    margin: auto;
    display: flex;
    height: 75px;
    border-radius: 6px;
    box-shadow: 0px 1px 4px var(--shadow-color);
    margin-bottom: 10px;
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

  #name-cover {
    flex: 1;
    height: 100%;
  }

  .username {
    display: block;
    font-size: 20px;
    margin-top: 7px;
    padding-left: 10px;
    cursor: pointer;
  }
  .fullname {
    padding-left: 10px;
    color: var(--subtext-color);
    cursor: pointer;
  }
}

@media screen and (min-width: 320px) and (max-width: 767px) {
  .people-cover {
    width: 100%;
    display: block;
    margin: auto;
    display: flex;
    height: 70px;
    box-shadow: 0px 1px 4px var(--shadow-color);
  }

  #avatar {
    height: 60px;
    width: 60px;
    margin: 5px;
    padding: 3px;
    border-radius: 50%;
    border: 0px solid var(--background-color);
    box-shadow: 0px 1px 4px var(--shadow-color);
    cursor: pointer;
  }

  #name-cover {
    flex: 1;

    height: 100%;
  }

  .username {
    display: block;
    padding: 4px;
    font-size: 18px;
    margin-top: 5px;
    padding-left: 10px;
    cursor: pointer;
  }
  .fullname {
    padding-left: 10px;

    color: var(--subtext-color);
    cursor: pointer;
  }
  
}




//for iphone X and others needs to come last or it would confilct with laptop screen
@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3){
.people-cover {
    width: 100%;
    display: block;
    margin: auto;
    display: flex;
    height: 70px;
    box-shadow: 0px 1px 4px var(--shadow-color);
  }

  #avatar {
    height: 60px;
    width: 60px;
    margin: 5px;
    padding: 3px;
    border-radius: 50%;
    border: 0px solid var(--background-color);
    box-shadow: 0px 1px 4px var(--shadow-color);
    cursor: pointer;
  }

  #name-cover {
    flex: 1;

    height: 100%;
  }

  .username {
    display: block;
    padding: 4px;
    font-size: 18px;
    margin-top: 5px;
    padding-left: 10px;
    cursor: pointer;
  }
  .fullname {
    padding-left: 10px;

    color: var(--subtext-color);
    cursor: pointer;
  
}
}
</style>

