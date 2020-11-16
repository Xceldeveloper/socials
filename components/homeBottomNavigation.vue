<template>
  <div class="bottomNav">
    <style>
          :root{
      --accent-color:{{Colors.accent}};
      --text-color:{{Colors.text}};
      --sub-textcolor:{{Colors.subTextColor}};
      --background-color:{{Colors.background}}
  }
    </style>

    <!-- <div class="btn-cover">
      <button
      class="bottomNavBtn"
      :class="{'active': active_route == 'feeds'}"
     
    >
      <span class="mdi mdi-vector-arrange-above mdi-hexagon-multiple-outline mdi-collage "></span> 
   //   mdi-home-circle
     // <span :class="{'active-label': active_route == 'feeds'}">Feeds</span>
    </button>
    <button
      class="bottomNavBtn"
      :class="{'active': active_route == 'explore'}"
      @click="active('explore')"
    >
      <span class="mdi mdi-rocket-outline mdi-cloud-search-outline"></span>
     // <span :class="{'active-label': active_route == 'explore'}">Explore</span>
    </button>
    <button
      class="bottomNavBtn"
      :class="{'active': active_route == 'upload'}"
      @click="active('upload')"
    >
      <span class="mdi mdi-plus-circle-outline"></span>
   //   <span :class="{'active-label': active_route == 'upload'}">Upload</span>
    </button>
    <button
      class="bottomNavBtn"
      :class="{'active': active_route == 'search'}"
      @click="active('search')"
    ><span class="mdi mdi-magnify"></span>
    //  <span :class="{'active-label': active_route == 'search'}">Search</span>
    </button>
    <button
      class="bottomNavBtn"
      :class="{'active': active_route == 'trending'}"
      @click="active('trending')"
    ><span class="mdi mdi-weather-tornado mdi-segment"></span></button>
   //   <span :class="{'active-label': active_route == 'trending'}">Trending</span>
    </button>
    </div>-->

    <div class="btn-cover">
      <v-bottom-navigation
        :background-color="Colors.background"
        :color="Colors.accent"
        grow
        height="50"
        v-model="bottomNav"
      >
        <v-btn value="feeds" @click="active('feeds')">
          <span :class="{'active-label': active_route == 'feeds'}">Feeds</span>
          <v-icon :color="active_route == 'feeds' ? Colors.accent : Colors.subTextColor ">
            <!-- mdi-hexagon-multiple-outline -->
            mdi-view-day
          </v-icon>
        </v-btn>

        <v-btn value="explore" @click="active('explore')">
          <span :class="{'active-label': active_route == 'explore'}">Explore</span>
          <v-icon
            :color="bottomNav == 'explore' ? Colors.accent : Colors.subTextColor "
          >mdi-cloud-search-outline</v-icon>
        </v-btn>

        <v-btn value="upload" @click="active('upload')">
          <!-- <span :class="{'active-label': active_route == 'upload'}">Upload</span> -->
          <v-icon
            size="42px"
            :color="bottomNav == 'upload' ? Colors.accent : Colors.subTextColor "
          >mdi-plus-circle-outline</v-icon>
        </v-btn>
        <v-btn value="search" @click="active('search')">
          <span :class="{'active-label': active_route == 'search'}">Search</span>
          <v-icon :color="bottomNav == 'search' ? Colors.accent : Colors.subTextColor ">mdi-magnify</v-icon>
        </v-btn>
        <v-btn value="trending" @click="active('trending')">
          <span :class="{'active-label': active_route == 'trending'}">Trending</span>
          <v-icon
            :color="bottomNav == 'trending' ? Colors.accent : Colors.subTextColor "
          >mdi-trending-up</v-icon>
          <!-- this.accentColor == '' || this.accentColor == undefined ? this.$store.state.theme.accentColor : this.accentColor, -->
        </v-btn>
      </v-bottom-navigation>
    </div>
  </div>
</template>

<script>
import theme_mixin from "~/mixins/theme_mixin.js";
export default {
  mixins: [theme_mixin],
  data() {
    return {
      active_route: "feeds",
      bottomNav: "feeds",
      background_color: "red"
    };
  },
  created() {
    this.$bus.$on("nav-to", name => {
      this.active_route = name;
      this.bottomNav = name;
    });
  },
  mounted() {
    (this.active_route = this.$store.state.user.isLoggedIn
      ? "feeds"
      : "explore"),
      (this.bottomNav = this.$store.state.user.isLoggedIn
        ? "feeds"
        : "explore");
  },
  methods: {
    navTo(path) {
      this.$router.push("/" + path);
    },
    active(name) {
      this.active_route = name;
      this.$bus.$emit("nav-to", name);
    }
  }
};
</script>

<style lang="scss" scoped>
span {
  color: var(--sub-textcolor);
}
@media screen and (min-width: 320px) and (max-width: 767px) {
  .bottomNav {
    height: 50px;
    width: 100%;
    position: absolute;
    background-color: var(--background-color);
    bottom: 0%;
    box-shadow: -1px -0px 6px var(--shadow-color);
    overflow: auto;
  }

  .bottomNavBtn {
    width: 20%;
    height: 50px;
    float: left;
    outline: none;
    color: var(--sub-textcolor);
    font-size: 30px;
  }

  .active {
    color: var(--accent-color);
    transition: all 0.3s ease-in-out;
  }
}

.active-label {
  color: var(--accent-color);
}

@media screen and (min-width: 767px) and (max-width: 10000px) {
  .bottomNav {
    display: none;
  }
}

@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: landscape) {
  .bottomNav {
    display: block;
  }
}

// @media screen and (min-width: 320px) and (max-width: 767px) and (orientation: landscape){
//   .bottomNav{
//   height: 50px;
//   width: 100%;
//   position: absolute;
//   top: 0%;
//   background-color: blue;
//   box-shadow: -1px -0px 6px var(--sub-textcolor);
// }
// }
</style>