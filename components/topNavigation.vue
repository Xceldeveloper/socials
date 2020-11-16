<template>
  <div class="background">
    <style>
  :root{
      --accent-gradient:{{accentGradient}};
      --background-gradient:{{backgroundGradient}};
      --inverttext-color:{{invertTextColor}};
      --accent-color:{{Colors.accent}};
      --text-color:{{Colors.text}};
      --sub-textcolor:{{Colors.subTextColor}};
     --background-color:{{Colors.background}}
  }
    </style>
    <div id="nav">
      <button id="toggleSideNav" @click="clicked"><span class="mdi mdi-menu"></span></button>
      <button
        class="bottomNavBtn desktop"
        :class="{'active': active_route == 'search'}"
        @click="active('search')"
      ><span class="mdi mdi-magnify"></span></button>

      <button
        class="bottomNavBtn exceptnNav"
        :class="{'active': active_route == 'notifications'}"
        @click="active('notifications')">
        <span v-if="active_route != 'notifications'" class="mdi mdi-bell-outline"></span>
        <span v-else class="mdi mdi-bell"></span>
      </button>


      <div class="bottomNav desktop">
        <button
          class="bottomNavBtn"
          :class="{'active': active_route == 'upload'}"
          @click="active('upload')"
        > <span class="mdi mdi-plus-circle-outline"></span>
        </button>
        <button
          class="bottomNavBtn"
          :class="{'active': active_route == 'feeds'}"
          @click="active('feeds')"
        >  <span class="mdi mdi-vector-arrange-above mdi-hexagon-multiple-outline mdi-collage "></span> 
        </button>
        <button
          class="bottomNavBtn"
          :class="{'active': active_route == 'explore'}"
          @click="active('explore')"
        > <span class="mdi mdi-web "></span>
        </button>
        <button
          class="bottomNavBtn"
          :class="{'active': active_route == 'trending'}"
          @click="active('trending')"
        ><span class="mdi mdi-weather-tornado mdi-segment"></span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import theme_mixin from "~/mixins/theme_mixin.js";
export default {
  mixins: [theme_mixin],
  data() {
    return {
      active_route: "feeds"
    };
  },
  created() {
    // this.$bus.$on("routing",(routex)=>{
    //    this.active_route = routex
    // });
    this.$bus.$on("nav-to", name => {
      this.active_route = name;
    });
  },
  methods: {
    clicked() {
      this.$bus.$emit("toggle-sideNavigation", this.isShowing);
    },
    navTo(path) {
      this.$router.push("/" + path);
    },
    active(name) {
      this.active_route = name;
      this.$bus.$emit("nav-to", name);
    }
  },
  computed: {
    isShowing() {
      return this.$store.state.settings.sideNav;
    },
    accentGradient() {
      return this.$store.state.theme.accentGradientColor;
    },
    backgroundGradient() {
      return this.$store.state.theme.backgroundGradientColor;
    },
    invertTextColor() {
      return this.$store.state.theme.invertTextColor;
    }
  }
};
</script>

<style lang="scss" scoped>
#nav {
  width: 100%;
  height: 50px;
  z-index: 90;
  background: linear-gradient(var(--accent-gradient));
}

#toggleSideNav {
  height: 100%;
  width: 50px;
  border: none;
  outline-style: none;
  color: var(--inverttext-color);
  float: left;
}

.bottomNav {
  height: 50px;
  width: auto;
  float: right;
}

.bottomNavBtn {
  width: 50px;
  height: 50px;
  float: left;
  outline: none;
  color: var(--inverttext-color);
  margin: 0px 2px 0px 2px;
  font-size: 30px;
}

.exceptnNav {
  width: 50px;
  height: 50px;
  float: right;
  outline: none;
  color: var(--inverttext-color);
  margin-right: 5px;
}
@media screen and (min-width: 320px) and (max-width: 767px) {
  .active {
    color: var(--inverttext-color);
    transition: all 0.1s ease-in-out;
    // border-bottom: 1.5px solid var(--inverttext-color);
//    font-size: 40px;
    // border-radius: 50%;
    // height: 48px;
    // width: 48px;
    // border-bottom: 1px solid  var(--inverttext-color);
  }
}

@media screen and (min-width: 767px) and (max-width: 10000px) {
  .active {
    color: var(--inverttext-color);
    transition: all 0.1s ease-in-out;
    // border-bottom: 1.5px solid var(--inverttext-color);
  //  font-size: 40px;
    // border-radius: 50%;
    // height: 48px;
    // width: 48px;
    // border-bottom: 1px solid  var(--inverttext-color);
  }
}

button{
  font-size: 32px;
}
</style>