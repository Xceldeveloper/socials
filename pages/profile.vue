<template>
  <div class="backgroundx">
    <style>
       :root{
      --accent-color:{{Colors.accent}};
       --accent-gradient:{{accentGradient}};
      --text-color:{{Colors.text}};
      --inverttext-color:{{invertTextColor}};
      --background-color:{{Colors.background}};
      --sub-textcolor:{{Colors.subTextColor}};
      --shadow-color:{{Colors.shadowColor}};
      --textture-color:{{Colors.textTure}};

  }
    </style>
       <v-app-bar
      :color="Colors.background"
      dense
     
    >
    <v-btn icon>
        <v-icon :color="Colors.text">mdi-chevron-left</v-icon>
      </v-btn>
        <v-toolbar-title ><span :style="{color:Colors.text}">Profile</span> </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon :color="Colors.text">mdi-account-cog-outline</v-icon>
      </v-btn>

      <v-btn icon to="/home">
        <v-icon :color="Colors.text">mdi-home-outline</v-icon>
      </v-btn>
    </v-app-bar>
    <div id="profile">
      
      <div class="profile-image-cover">
        <div class="cover-photo-cover" :style="{backgroundImage:'url('+avatar+')'}"></div>

        <div class="user-details">
          <div id="user-info">
            <img id="avatar" :src="avatar" />
            <div class="user-names">
              <b>@ {{username}}</b>
              <span>{{fullname}}</span>
            </div>
          </div>
          <div id="user-small-btns-cover">
            <button>
              {{friends}}
              <span>friends</span>
            </button>
            <button>
              {{followers}}
              <span>followers</span>
            </button>
            <button>
              {{following}}
              <span>following</span>
            </button>
          </div>
        </div>
      </div>

      <div class="details-cover">
        <button>
         <span class="mdi mdi-information-outline"></span>
        </button>
         <button>
        <span class="mdi mdi-apps"></span>
        </button>
         <button>
         <span class="mdi mdi-camera-outline"></span>
        </button>
         <button>
         <span class="mdi mdi-video-outline"></span>
        </button>
      </div>

      <div class="content-area"></div>
    </div>
  </div>
</template>

<script>
import theme_mixin from "~/mixins/theme_mixin.js";
export default {
  mixins: [theme_mixin],
  components: {},
  head() {
    const title = this.username + "'s Profile";
    return {
      title
    };
  },
  data() {
    return {
      username: "Boss",
      fullname:"Emiator Overcomer",
      friends:"3k",
      followers:"1.5k",
      following:'800',
      avatar: require("~/static/drake.jpg")
    };
  },

  mounted() {
    this.$bus.$emit("routing", this.$route.name);
  },

  methods: {}
};
</script>

<style  lang="scss" scoped>
.backgroundx {
  width: 100%;
  height: 100vh;
  background-color: var(--background-color);
  display: flex;
  display: -webkit-flex;
  flex-flow: column;
  overflow: hidden;
}
.navCover {
  height: 100%;
}

.Socials {
  display: flex;
  display: -webkit-flex;
  width: 100%;
  flex: 1;
  -webkit-box-flex: 1;
  overflow: hidden;
}


@media screen and (min-width: 320px) and (max-width: 767px)  {
  #profile {
    width: 100%;
    height: 100vh;
    overflow: auto;
  }

  .profile-image-cover {
    width: 100%;
    height: 180px;
    background-color: var(--textture-color);
    position: relative;
    box-shadow: 0px 1px 2px rgb(39, 18, 18);
  }

  .user-details {
    position: absolute;
    z-index: 50;
    width: 90%;
    height: 110px;
    bottom: -52.5px;
    margin-left: 5%;
    border-radius: 5px;
    box-shadow: 0px 2px 3px var(--shadow-color);
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    background-color: var(--textture-color);
  }

  #user-info {
    width: 100%;
    height: 60px;
    position: relative;
  }
  #user-small-btns-cover {
    width: 100%;
    height: 50px;
    white-space: nowrap;
  }

  #user-small-btns-cover button {
    width: 33.333%;
    display: inline-block;
    height: 100%;
    border-radius: 20px;
    outline-style: none;
    font-size: 15px;
    color: var(--text-color);
    font-weight: bold;
  }

  #user-small-btns-cover button span {
    display: block;
    padding: 0px;
    margin: 0px;
    font-size: 14px;
    text-transform: capitalize;
    color: var(--sub-textcolor);
    font-weight: lighter;
  }

  #cover-photo {
    width: 100%;
  }

  #avatar {
    width: 80px;
    height: 80px;
    border-radius: 10px;
    border: 2px solid var(--background-color);
    top: -20px;
    position: absolute;
    left: 10px;
  }

  .user-names {
    left: 90px;
    padding-top: 3px;
    padding-left: 10px;
    font-size: 18px;
    position: absolute;
    color: var(--text-color);

    span {
      display: block;
      font-size: 14px;
      overflow: hidden;
      text-overflow: ellipsis;
      -ms-text-overflow: ellipsis;
      -o-text-overflow: ellipsis;
      color: var(--sub-textcolor);
    }
  }

  .details-cover {
  width: 100%;
  height: 50px;
  box-shadow: 0px 2px 3px  var(--shadow-color);
  margin: auto;
  margin-top: 70px;
  border-radius: 5px;
  white-space: nowrap;
  overflow: auto;
}


.details-cover button{
  display: inline-block;
  width: 23%;
  height: 100%;
  font-size: 15px;
  outline-style: none;
  color: var(--text-color);
}


.content-area {
  width: 100%;
  height: auto;
  max-height: calc(100vh - 100px);
  margin-top: 1px;
 
}

}

@media screen and (min-width: 767px) {
  #profile {
    width: 60%;
    height: 100%;
    overflow: auto;

    margin: auto;
    margin-top: 5px;
    // border: 1px solid  var(--shadow-color);
  }

  .profile-image-cover {
    width: 100%;
    height: 300px;
    background-color: var(--textture-color);
    position: relative;
    box-shadow: 0px 1px 2px  var(--shadow-color);
  }

  .user-details {
    position: absolute;
    z-index: 50;
    width: 90%;
    height: 190px;
    bottom: -102.5px;
    margin-left: 5%;
    border-radius: 5px;
    box-shadow: 0px 2px 3px  var(--shadow-color);
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    background-color: var(--textture-color);
  }

  #user-info {
    width: 100%;
    height: 110px;
    position: relative;
  }
  #user-small-btns-cover {
    width: 100%;
    height: 80px;
    white-space: nowrap;
  }

  #user-small-btns-cover button {
    width: 33.333%;
    display: inline-block;
    height: 100%;
    border-radius: 20px;
    outline-style: none;
    font-size: 19px;
    color: var(--text-color);
    font-weight: bold;
  }

  #user-small-btns-cover button span {
    display: block;
    padding: 0px;
    margin: 0px;
    font-size: 17px;
    text-transform: capitalize;
    color: var(--sub-textcolor);
    font-weight: lighter;
  }

  #cover-photo {
    width: 100%;
  }

  #avatar {
    width: 130px;
    height: 130px;
    border-radius: 10px;
    border: 4px solid var(--background-color);
    top: -20px;
    position: absolute;
    left: 10px;
  }

  .user-names {
    left: 140px;
    padding-top: 3px;
    padding-left: 10px;
    font-size: 23px;
    position: absolute;
    color: var(--text-color);

    span {
      display: block;
      font-size: 18px;
      overflow: hidden;
      text-overflow: ellipsis;
      -ms-text-overflow: ellipsis;
      -o-text-overflow: ellipsis;
      color: var(--sub-textcolor);
    }
  }


  .details-cover {
  width: 100%;
  height: 60px;
  box-shadow: 0px 2px 3px  var(--shadow-color);
  margin: auto;
  margin-top: 120px;
  border-radius: 5px;
  white-space: nowrap;
}

.details-cover button{
  display: inline-block;
  width: 24%;
  height: 100%;
  font-size: 30px;
  outline-style: none;
  color: var(--text-color);
}


.content-area {
  width: 100%;
  height: auto;
  height: calc(100vh - 100px);
  margin-top: 1px;
 
}

}

.cover-photo-cover {
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  z-index: 10;
  background-size: cover;
  background-position: center;
}


//for iphone X and others needs to come last or it would confilct with laptop screen
@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) {
#profile {
    width: 100%;
    height: 100vh;
    overflow: auto;
  }

  .profile-image-cover {
    width: 100%;
    height: 180px;
    background-color: var(--textture-color);
    position: relative;
    box-shadow: 0px 1px 2px rgb(39, 18, 18);
  }

  .user-details {
    position: absolute;
    z-index: 50;
    width: 90%;
    height: 110px;
    bottom: -52.5px;
    margin-left: 5%;
    border-radius: 5px;
    box-shadow: 0px 2px 3px var(--shadow-color);
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    background-color: var(--textture-color);
  }

  #user-info {
    width: 100%;
    height: 60px;
    position: relative;
  }
  #user-small-btns-cover {
    width: 100%;
    height: 50px;
    white-space: nowrap;
  }

  #user-small-btns-cover button {
    width: 33.333%;
    display: inline-block;
    height: 100%;
    border-radius: 20px;
    outline-style: none;
    font-size: 15px;
    color: var(--text-color);
    font-weight: bold;
  }

  #user-small-btns-cover button span {
    display: block;
    padding: 0px;
    margin: 0px;
    font-size: 14px;
    text-transform: capitalize;
    color: var(--sub-textcolor);
    font-weight: lighter;
  }

  #cover-photo {
    width: 100%;
  }

  #avatar {
    width: 80px;
    height: 80px;
    border-radius: 10px;
    border: 2px solid var(--background-color);
    top: -20px;
    position: absolute;
    left: 10px;
  }

  .user-names {
    left: 90px;
    padding-top: 3px;
    padding-left: 10px;
    font-size: 18px;
    position: absolute;
    color: var(--text-color);

    span {
      display: block;
      font-size: 14px;
      overflow: hidden;
      text-overflow: ellipsis;
      -ms-text-overflow: ellipsis;
      -o-text-overflow: ellipsis;
      color: var(--sub-textcolor);
    }
  }

  .details-cover {
  width: 100%;
  height: 50px;
  box-shadow: 0px 2px 3px  var(--shadow-color);
  margin: auto;
  margin-top: 70px;
  border-radius: 5px;
  white-space: nowrap;
  overflow: auto;
}


.details-cover button{
  display: inline-block;
  width: 23%;
  height: 100%;
  font-size: 15px;
  outline-style: none;
  color: var(--text-color);
}


.content-area {
  width: 100%;
  height: auto;
  max-height: calc(100vh - 100px);
  margin-top: 1px;
 
}
}
</style>

