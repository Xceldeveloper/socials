<template>
  <div id="app" v-cloak>
    <style>
       :root{
      --accent-color:{{Colors.accent}};
      --text-color:{{Colors.text}};
       --subtext-color:{{Colors.subTextColor}};
      --inverttext-color:{{Colors.invertTextColor}};
      --background-color:{{Colors.background}};
      --texture-color:{{Colors.textTure}};
       --shadow-color:{{Colors.shadowColor}};
  }
    </style>
    <v-navigation-drawer
      v-model="drawer"
      app
      width="280"
      clipped
      :mini-variant.sync="mini"
      mini-variant-width="80"
      :color="Colors.background"
    >
      <template v-slot:prepend v-if="mini != true" color="red">
        <nuxt-link :to="isLoggedIn ? '/profile' : '/gateway'">
          <v-list-item two-line>
            <v-list-item-avatar width="100" height="100">
              <img id="profile-pic" :src="avatar" />
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>
                <span class="username">@ {{getUser.username}}</span>
              </v-list-item-title>
              <v-list-item-subtitle>
                <span class="fullname" :style="{color:Colors.subTextColor}">{{getUser.fullname}}</span>
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </nuxt-link>
      </template>

      <v-divider></v-divider>
      <v-list dense :nav="true">
        <v-list-item
          v-for="item in items"
          :key="item.text"
          link
          :to="isLoggedIn ? item.url : '/gateway'"
        >
          <v-list-item-action>
            <v-tooltip right>
              <template v-slot:activator="{ on }">
                <v-icon :color="Colors.text" v-on=" mini ? on : 'off'">{{ item.icon }}</v-icon>
              </template>
              <span>{{item.text}} </span>
            </v-tooltip>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-group no-action :color="Colors.accent">
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>More</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list dense :nav="true">
            <v-list-item v-for="item in items2" :key="item.text" link>
              <v-list-item-avatar>
                <img :src="item.pic" :alt="item.text" />
              </v-list-item-avatar>
              <v-list-item-title v-text="item.text" />
            </v-list-item>
          </v-list>
        </v-list-group>

        <div v-if="!mini && isMobile">
          <v-list-item link>
            <v-list-item-title :style="{color:Colors.subTextColor}">Logout</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-title :style="{color:Colors.subTextColor}">Settings</v-list-item-title>
          </v-list-item>

          <v-list-item link @click="changeTheme = !changeTheme">
            <v-list-item-title :style="{color:Colors.subTextColor}">Dark Theme</v-list-item-title>
            <v-list-tile-action>
              <v-switch v-model="changeTheme" :color="Colors.accent"></v-switch>
            </v-list-tile-action>
          </v-list-item>

          <v-list-item link>
            <v-list-item-title :style="{color:Colors.subTextColor}">About</v-list-item-title>
          </v-list-item>
        </div>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left :color="Colors.background" dense>
      <v-app-bar-nav-icon :color="Colors.text" @click.stop="toggleMini" />

      <!-- <v-icon :color="Colors.text" class="mx-4" large>mdi-youtube</v-icon> -->
      
      <img src="~/static/v.png" alt="logo" style="width:40px;height:40px">
      
      <v-toolbar-title class="mr-12 align-center" v-if="!isMobile">
        <span class="title">Socials</span>
      </v-toolbar-title>

      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn :color="Colors.accent" icon v-if="!isMobile" @click="active('search')" v-on="on">
            <v-icon :color="active_route == 'search' ? Colors.accent : Colors.text">mdi-magnify</v-icon>
          </v-btn>
        </template>
        <span>Search Socials</span>
      </v-tooltip>
      <v-spacer />

      <div v-if="!isMobile">
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn :color="Colors.accent" icon @click="active('upload')" v-on="on">
              <v-icon
                :color="active_route == 'upload' ? Colors.accent : Colors.text"
              >mdi-plus-circle-outline</v-icon>
            </v-btn>
          </template>
          <span>Upload</span>
        </v-tooltip>

        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn :color="Colors.accent" icon @click="active('feeds')" v-on="on">
              <v-icon :color="active_route == 'feeds' ? Colors.accent : Colors.text">
                <!-- mdi-vector-arrange-above -->
                mdi-view-day
              </v-icon>
            </v-btn>
          </template>
          <span>Feeds</span>
        </v-tooltip>

        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn :color="Colors.accent" icon @click="active('explore')" v-on="on">
              <v-icon
                :color="active_route == 'explore' ? Colors.accent : Colors.text"
              >mdi-cloud-search-outline</v-icon>
            </v-btn>
          </template>
          <span>Explore</span>
        </v-tooltip>

        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn :color="Colors.accent" icon @click="active('trending')" v-on="on">
              <v-icon
                :color="active_route == 'trending' ? Colors.accent : Colors.text"
              >mdi-trending-up</v-icon>
            </v-btn>
          </template>
          <span>Trending</span>
        </v-tooltip>

        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn :color="Colors.accent" icon @click="active('notifications')" v-on="on">
              <v-icon
                :color="active_route == 'notifications' ? Colors.accent : Colors.text "
              >mdi-bell-outline</v-icon>
            </v-btn>
          </template>
          <span>Notifications</span>
        </v-tooltip>

        <v-menu open-on-hover :close-on-click="false" :close-on-content-click="false" offset-y>
          <template v-slot:activator="{ on }">
            <v-btn icon v-on="on" :color="Colors.background">
              <v-icon :color="Colors.text">mdi-dots-vertical</v-icon>
            </v-btn>
          </template>
          <v-card :color="Colors.background" width="220px">
            <v-list-item link>
              <v-list-item-title :style="{color:Colors.subTextColor}">Logout</v-list-item-title>
            </v-list-item>
            <v-list-item link>
              <v-list-item-title :style="{color:Colors.subTextColor}">Settings</v-list-item-title>
            </v-list-item>

            <v-list-item link @click="changeTheme = !changeTheme">
              <v-list-item-title :style="{color:Colors.subTextColor}">Dark Theme</v-list-item-title>
              <v-list-tile-action>
                <v-switch v-model="changeTheme" :color="Colors.accent"></v-switch>
              </v-list-tile-action>
            </v-list-item>

            <v-list-item link>
              <v-list-item-title :style="{color:Colors.subTextColor}">About</v-list-item-title>
            </v-list-item>
          </v-card>
        </v-menu>

        <nuxt-link :to="isLoggedIn ? '/profile' : '/gateway'">
          <v-avatar size="45" v-if="mini = mini">
            <img id="profile-pic" :src="avatar" />
          </v-avatar>
        </nuxt-link>
      </div>

      <v-btn :color="Colors.accent" icon @click="active('notifications')" v-if="isMobile">
        <v-icon
          :color="active_route == 'notifications' ? Colors.accent : Colors.text "
        >mdi-bell-outline</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <div class="backgroundx">
        <div id="component-box">
          <!-- <div class="box">

          </div>-->

          <keep-alive>
            <component :is="selectedComponent"></component>
          </keep-alive>
        </div>
      </div>
    </v-content>
    <homeBottomNavigation />
  </div>
</template>

<script>
import theme_mixin from "~/mixins/theme_mixin.js";
import device_mixin from "~/mixins/device_mixin.js";
import user_mixin from "~/mixins/user_mixin.js";
import homeBottomNavigation from "~/components/homeBottomNavigation.vue";
import feeds from "~/components/feeds.vue";
import explore from "~/components/explore.vue";
import upload from "~/components/upload.vue";
import search from "~/components/search.vue";
import trending from "~/components/trending.vue";
import notifications from "~/components/notifications.vue";
export default {
  components: {
    homeBottomNavigation,
    feeds: feeds,
    explore: explore,
    upload: upload,
    search: search,
    trending: trending,
    notifications: notifications
  },
  mixins: [theme_mixin, device_mixin, user_mixin],
  props: {
    source: String
  },
  data: () => ({
    avatar: require("~/static/drake.jpg"),
    drawer: null,
    mini: true,
    hideIcon: false,
    selectedComponent: "",
    active_route: "",
    changeTheme: false,
    items: [
      { icon: "mdi-account-group-outline", text: "Hangouts", url: "/hangouts" },
      {
        icon: "mdi-account-supervisor-outline",
        text: "Followers",
        url: "/friends"
      },
     //{
      //   icon: "mdi-account-multiple-plus-outline",
      //   text: "Friend Request",
      //   url: "/friendrequests"
      // },
      { icon: "mdi-satellite-uplink", text: "Channel", url: "/channel" },
      { icon: "mdi-bookmark-multiple-outline", text: "Saved", url: "/saved" },
      { icon: "mdi-calendar-multiple", text: "Events", url: "/events" },
      { icon: "mdi-poll-box-outline", text: "Poll", url: "/poll" },
      { icon: "mdi-calendar-clock", text: "Throw Back", url: "/throwback" },
      {
        icon: " mdi-tray-full",
        text: "Schedule",
        url: "/schedule"
      },
      {
        icon: "mdi-chart-donut-variant",
        text: "Promotions",
        url: "/promotions"
      }
    ],
    items2: [
      { pic: require("~/assets/drake.jpg"), text: "Lost and Found" },
      { pic: require("~/assets/drake.jpg"), text: "Weather" },
      { pic: require("~/assets/drake.jpg"), text: "Survey" },
      { pic: require("~/assets/drake.jpg"), text: "Top Up" },
      { pic: require("~/assets/drake.jpg"), text: "Gigs" }
    ]
  }),
  created() {
    if (this.getUser.id != -1) {
      this.$router.push("/home");
    } else {
      this.$router.push("/introduction");
    }
    this.$bus.$on("nav-to", name => {
      this.selectedComponent = name;
      this.active_route = name;
    });
  },
  mounted() {
    this.changeTheme = this.$store.state.theme.isDarkTheme;
    (this.selectedComponent = this.isLoggedIn == true ? "feeds" : "explore"),
      (this.active_route = this.isLoggedIn == true ? "feeds" : "explore"),
      this.checkScreenSize();

    this.setLightTheme();

    window.addEventListener("resize", this.checkScreenSize, { passive: true });
  },
  methods: {
    active(name) {
      this.active_route = name;
      this.$bus.$emit("nav-to", name);
    },
    toggleMini() {
      if (this.isMobile) {
        if (this.deviceOrientation.portrait) {
          this.mini = false;
          this.drawer = null;
          this.drawer = !this.drawer;
        } else {
          alert("new dd");
        }
      } else if (this.isTablet) {
        this.drawer = true;
        this.mini = false;
      } else if (this.isLaptop) {
        this.drawer = !this.drawer;
        this.mini = false;
      } else if (this.isDesktop || this.is4KMAX) {
        this.drawer = true;
        this.mini = !this.mini;
      }
      //  alert(this.$vuetify.breakpoint.name);
    }
  },

  watch: {
    changeTheme: function(val, oldVal) {
      if (val) {
        localStorage.setItem("isDarkTheme", "true");
        this.setDarkTheme();
        console.log("dark");
      } else {
        localStorage.setItem("isDarkTheme", "false");
        this.setLightTheme();
        console.log("light");
      }

      //
    }
  }
};
</script>

<style lang="scss"  scoped>
@media screen and (min-width: 767px) and (max-width: 1024px) {
// *::-webkit-scrollbar-track
// {
// 	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
// 	background-color: var(--background-color);
// }

// *::-webkit-scrollbar
// {
// 	width: 15px;
// 	background-color:var(--background-color);
    
// }

// *::-webkit-scrollbar-thumb
// {
// 	background-color: var(--texture-color);
// 	border: 1px solid var(--subtext-color);
//    border-radius: 10px;
// }
}


.username {
  font-size: 19px;
}

.fullname {
  font-size: 13px;
}
a {
  text-decoration: none;
}
.textColor {
  color: var(--text-color);
}

.subTextColor {
  color: var(--subtext-color);
}
* {
  color: var(--text-color);
}

.backgroundx {
  display: flex;
  height: calc(100vh - 50px);
  width: 100%;
  background-color: var(--background-color);
  color: var(--text-color);
}

.box {
  width: 90%;
  height: 300px;
  margin: auto;
  margin-top: 10px;
}

#component-box {
  height: calc(100vh - 48px);
  overflow: auto;
  width: 100%;
}
@media screen and (min-width: 320px) and (max-width: 767px) {
  #component-box {
    height: calc(100vh - 102px);
    overflow: auto;
    width: 100%;
  }
}

@media screen and (min-width: 320px) and (max-width: 767px) and (orientation: landscape) {
  #app {
    transform: rotate(-90deg);
    transform-origin: left top;
    width: 100vh;
    overflow-x: hidden;
    overflow-y: hidden;
    position: absolute;
    top: 100%;
    left: 0;
    height: 100vw;
  }

  .backgroundx {
    height: calc(100vw - 100px);
    display: flex;
    width: 100vh;
    display: -webkit-flex;
  }

  #component-box {
    height: 100%;
    height: 100%;
  }
}

@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: landscape) {
  #app {
    transform: rotate(-90deg);
    transform-origin: left top;
    width: 100vh;
    overflow-x: hidden;
    overflow-y: hidden;
    position: absolute;
    top: 100%;
    left: 0;
    height: 100vw;
  }

  .backgroundx {
    height: calc(100vw - 100px);
    display: flex;
    width: 100vh;
    display: -webkit-flex;
  }

  #component-box {
    height: 100%;
    height: 100%;
  }
}

.active {
  color: var(--inverttext-color);
  transition: all 0.1s ease-in-out;
}






</style>