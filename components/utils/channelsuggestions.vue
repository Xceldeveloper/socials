<template>
  <div id="channels-suggestion">
    <div id="header">
      Channels For You
      <v-btn :color="Colors.text" text small :style="{float:'right'}">View More</v-btn>
    </div>
    <v-slide-group
      :show-arrows="isMobile ? false : true"
      :dark="isDarkTheme ? true : false"
      mobile-break-point="320px"
    >
      <v-slide-item v-for="(item,index) in channels" :key="index">
        <div id="person">
          <nuxt-link :to="''">
            <img
              id="avatar"
              img
              :src="item.avatar"
              :alt="item.username + 'avatar'"
              oncontextmenu="return false;"
            />
            <span id="username">{{item.username}}</span>
            <span id="fullname">{{formatNumber(item.followers )}}</span>
          </nuxt-link>
          <div id="btn-wrapper">
            <v-btn
              v-if="!item.following"
              rounded
              @click="follow(index)"
              small
              outlined
              :color="Colors.subTextColor"
              width="90%"
            >+ Follow</v-btn>
            <v-btn
              v-if="item.following"
              rounded
              @click="follow(index)"
              small
              :dark="isDarkTheme ? false: true"
              width="90%"
            >Following</v-btn>
          </div>
        </div>
      </v-slide-item>
    </v-slide-group>
  </div>
</template>

<script>
import theme_mixin from "~/mixins/theme_mixin.js";
import device_mixin from "~/mixins/device_mixin.js";
import user_mixin from "~/mixins/user_mixin.js";
import utils_mixin from "~/mixins/utils_mixin.js";

export default {
  mixins: [theme_mixin, device_mixin, user_mixin, utils_mixin],
  data() {
    return {
      channels: [
        {
          userId: 3453,
          username: "Ace",
          followers: 123432,
          avatar: require("~/static/drake.jpg"),
          following: false
        },
        {
          userId: 1298,
          username: "Ovmobile",
          followers: 82612312,
          avatar: require("~/static/drake.jpg"),
          following: false
        },
        {
          userId: 34532,
          username: "Rayve",
          followers: 32454,
          avatar: require("~/static/drake.jpg"),
          following: false
        },
        {
          userId: 2342,
          username: "PrimeMusic",
          followers: 972321,
          avatar: require("~/static/drake.jpg"),
          following: false
        },
        {
          userId: 1234,
          username: "Pablo",
          followers: 1246321,
          avatar: require("~/static/drake.jpg"),
          following: false
        },
        {
          userId: 4975,
          username: "Ananymous",
          followers: 8643221,
          avatar: require("~/static/drake.jpg"),
          following: false
        }
      ]
    };
  },
  methods: {
    follow(index) {
      if (!this.channels[index].following) {
        this.$store.commit("user/Follow", {
          username: this.channels[index].username,
          fullname: "",
          avatar: this.channels[index].avatar
        });

        this.channels[index].following = true;
      } else {
        this.$store.commit("user/unFollow", {
          username: this.channels[index].username,
          fullname: "",
          avatar: this.channels[index].avatar
        });
        this.channels[index].following = false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@media screen and (min-width: 767px) {
  #channels-suggestion {
    width: 96%;
    display: block;
    margin: 10px auto;
    height: auto;
    box-shadow: 0px 1px 3px var(--shadow-color),
      -0px -0px 0px var(--shadow-color);
    border-radius: 8px;

    background-color: var(--texture-color);
  }

  #header {
    width: 100%;
    padding: 10px;
  }

  a {
    text-decoration: none;
  }

  #person {
    width: auto;
    height: auto;
    color: var(--text-color);
    background-color: var(--background-color);
    box-shadow: 0px 2px 5px var(--shadow-color),
      -0px -0px 0px var(--shadow-color);
    margin: 10px;
    box-sizing: border-box;
    border-radius: 10px 10px 7px 7px;
    padding-bottom: 5px;
  }

  #avatar {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background-color: var(--texture-color);
    margin: 10px 20px;
    padding: 2px;
    box-shadow: 0px 2px 7px var(--shadow-color),
      -0px -0px 0px var(--shadow-color);
  }

  #username {
    width: 100%;
    max-width: 153px;
    margin: auto;
    display: block;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 0px;
    font-size: 18px;
    color: var(--text-color);
  }

  #fullname {
    width: 100%;
    max-width: 153px;
    margin: auto;
    display: block;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 15px;
    font-family: sans-serif;
    color: var(--subtext-color);
    padding: 0px 0px 5px 0px;
  }

  #btn-wrapper {
    text-align: center;
    width: 100%;
  }
}

@media screen and (min-width: 320px) and (max-width: 767px) {
  #channels-suggestion {
    width: 100%;
    display: block;
    height: auto;
    border-radius: 0px;
    margin: 0px;
    background-color: var(--texture-color);
    border: none;
    border-bottom: 1px solid var(--shadow-color);
  }

  #header {
    width: 100%;
    padding: 10px;
  }

  a {
    text-decoration: none;
  }

  #person {
    width: auto;
    height: auto;
    color: var(--text-color);
    background-color: var(--background-color);
    box-shadow: 0px 2px 7px var(--shadow-color),
      -0px -0px 0px var(--shadow-color);
    margin: 10px;
    box-sizing: border-box;
    border-radius: 8px;
    padding: 10px;
  }

  #avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: var(--texture-color);
    margin: 5px 20px;
    padding: 2px;
    box-shadow: 0px 2px 7px var(--shadow-color),
      -0px -0px 0px var(--shadow-color);
  }

  #username {
    width: 100%;
    max-width: 150px;
    display: block;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 0px;
    font-size: 18px;
    color: var(--text-color);
  }

  #fullname {
    width: 100%;
    max-width: 150px;
    display: block;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 15px;
    font-family: sans-serif;
    color: var(--subtext-color);
    padding: 0px 0px 5px 0px;
  }

  #btn-wrapper {
    text-align: center;
    width: 100%;
  }
}

//for iphone X and others needs to come last or it would confilct with laptop screen
@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) {
  #channels-suggestion {
    width: 100%;
    display: block;
    height: auto;
    border-radius: 0px;
    margin: 0px;
    background-color: var(--texture-color);
    border: none;
    border-bottom: 1px solid var(--shadow-color);
  }

  #header {
    width: 100%;
    padding: 10px;
  }

  a {
    text-decoration: none;
  }

  #person {
    width: auto;
    height: auto;
    color: var(--text-color);
    background-color: var(--background-color);
    box-shadow: 0px 2px 7px var(--shadow-color),
      -0px -0px 0px var(--shadow-color);
    margin: 10px;
    box-sizing: border-box;
    border-radius: 8px;
    padding: 10px;
  }

  #avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: var(--texture-color);
    margin: 5px 20px;
    padding: 2px;
    box-shadow: 0px 2px 7px var(--shadow-color),
      -0px -0px 0px var(--shadow-color);
  }

  #username {
    width: 100%;
    max-width: 150px;
    display: block;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 0px;
    font-size: 18px;
    color: var(--text-color);
  }

  #fullname {
    width: 100%;
    max-width: 150px;
    display: block;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 15px;
    font-family: sans-serif;
    color: var(--subtext-color);
    padding: 0px 0px 5px 0px;
  }

  #btn-wrapper {
    text-align: center;
    width: 100%;
  }
}
</style>