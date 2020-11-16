<template>
<div id="app">
   <style>
       :root{
      --accent-color:{{Colors.accent}};
       --accent-gradient:{{accentGradient}};
      --text-color:{{Colors.text}};
      --inverttext-color:{{invertTextColor}};
      --background-color:{{Colors.background}};
      --z-index:{{index}}
  }
    </style>
    <v-navigation-drawer
      v-model="drawer"
      app
       width="280"
      clipped
      :mini-variant.sync="mini"
      mini-variant-width="80"
      :color="Colors.accent"
        
    >
    
   <template v-slot:prepend v-if="mini != true">
     <nuxt-link to="/profile">
        <v-list-item two-line  >
          <v-list-item-avatar width="100" height="100">
            <img id="profile-pic" src="~/assets/drake.jpg">
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Jane Smith</v-list-item-title>
            <v-list-item-subtitle>Logged In</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
     </nuxt-link>
      </template>

      <v-divider></v-divider>
      <v-list dense>
          
        <v-list-item
          v-for="item in items"
          :key="item.text"
          link
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              {{ item.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-subheader class="mt-4 grey--text text--darken-1">SUBSCRIPTIONS</v-subheader>
        <v-list>
          <v-list-item
            v-for="item in items2"
            :key="item.text"
            link
          >
            <v-list-item-avatar>
              <img
                src="~/assets/drake.jpg"
                alt=""
              >
            </v-list-item-avatar>
            <v-list-item-title v-text="item.text" />
          </v-list-item>
        </v-list>
        <v-list-item
          class="mt-4"
          link
        >
          <v-list-item-action>
            <v-icon color="grey darken-1">mdi-plus-circle-outline</v-icon>
          </v-list-item-action>
          <v-list-item-title class="grey--text text--darken-1">Browse Channels</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon color="grey darken-1">mdi-settings</v-icon>
          </v-list-item-action>
          <v-list-item-title class="grey--text text--darken-1">Manage Subscriptions</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>





    <v-app-bar
      app
      clipped-left
       :color="Colors.accent"
      dense
      
    >
      <v-app-bar-nav-icon @click.stop="toggleMini" />
      <v-icon
        class="mx-4"
        large
      >
        mdi-youtube
      </v-icon>
      <v-toolbar-title class="mr-12 align-center" v-if="!isMobile">
        <span class="title">Socials</span>
      </v-toolbar-title>
     
       
      <v-btn :color="Colors.accent" icon v-if="!isMobile" @click="active('search')">
        <v-icon :color="active_route == 'search' ? Colors.invertTextColor : Colors.text">
          mdi-magnify
        </v-icon>
      </v-btn>
      <v-spacer/>
    
  <div v-if="!isMobile">
      <v-btn :color="Colors.accent" icon  @click="active('upload')">
        <v-icon :color="active_route == 'upload' ? Colors.invertTextColor : Colors.text">
       mdi-plus-circle-outline
        </v-icon>
      </v-btn>
    <v-btn :color="Colors.accent" icon  @click="active('feeds')">
        <v-icon :color="active_route == 'feeds' ? Colors.invertTextColor : Colors.text">
        mdi-vector-arrange-above
        </v-icon>
      </v-btn>
    <v-btn :color="Colors.accent" icon  @click="active('explore')">
        <v-icon :color="active_route == 'explore' ? Colors.invertTextColor : Colors.text">
        mdi-cloud-search-outline
        </v-icon>
      </v-btn>
      <v-btn :color="Colors.accent" icon @click="active('trending')">
        <v-icon :color="active_route == 'trending' ? Colors.invertTextColor : Colors.text">
         mdi-weather-tornado
        </v-icon>
      </v-btn>

     <v-btn :color="Colors.accent" icon  @click="active('notifications')">
        <v-icon 
        :color="active_route == 'notifications' ? Colors.invertTextColor : Colors.text ">
         mdi-bell-outline
        </v-icon>
      </v-btn>

<nuxt-link to="/profile">
   <v-avatar size="45" v-if="mini = mini">
     <img id="profile-pic" src="~/assets/drake.jpg">
   </v-avatar>
</nuxt-link>

    </div>
      
       <v-btn :color="Colors.accent" icon  @click="active('notifications')" v-if="isMobile">
        <v-icon 
        :color="active_route == 'notifications' ? Colors.invertTextColor : Colors.text ">
         mdi-bell-outline
        </v-icon>
      </v-btn>

    </v-app-bar>


<v-content>
  <div class="backgroundx">
    
    <div id="component-box">
     <!-- <div class="box">

    </div> -->

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
import homeBottomNavigation from "~/components/homeBottomNavigation.vue";
import feeds from "~/components/feeds.vue"
import explore from "~/components/explore.vue"
import upload from "~/components/upload.vue"
import search from "~/components/search.vue"
import trending from "~/components/trending.vue"
import notifications from "~/components/notifications.vue"
  export default {
    components: {
    homeBottomNavigation,
    feeds:feeds,
    explore:explore,
    upload:upload,
    search:search,
    trending:trending,
    notifications:notifications
    },
     mixins: [theme_mixin],
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
      mini:true,
      isMobile:false,
      hideIcon:false,
      selectedComponent:"feeds",
       active_route: "feeds",
      items: [
        { icon: 'mdi-trending-up', text: 'Most Popular' },
        { icon: 'mdi-youtube-subscription', text: 'Subscriptions' },
        { icon: 'mdi-history', text: 'History' },
        { icon: 'mdi-playlist-play', text: 'Playlists' },
        { icon: 'mdi-clock', text: 'Watch Later' },
      ],
      items2: [
        { "~/assets/drake.jpg": 28, text: 'Joseph' },
        { "~/assets/drake.jpg": 38, text: 'Apple' },
        { "~/assets/drake.jpg": 48, text: 'Xbox Ahoy' },
        { "~/assets/drake.jpg": 58, text: 'Nokia' },
        { "~/assets/drake.jpg": 78, text: 'MKBHD' },
      ],
    }),
    created () {
 //     this.$vuetify.theme.dark = true
        this.$bus.$on("nav-to",name=>{
         this.selectedComponent = name;
         this.active_route = name
      });
    },
    mounted(){
     this.checkScreenSize();
     window.addEventListener('resize',this.checkScreenSize,{passive:true});
 
    },
    methods:{
      active(name) {
      this.active_route = name;
      this.$bus.$emit("nav-to", name);
    },
       toggleMini(){
         if(this.isMobile){
           if(window.innerWidth < window.innerHeight){
           this.mini = false;
           this.drawer = null
           this.drawer = !this.drawer
           }else{
             alert("new dd")
           }
         }else{
          
           this.mini = !this.mini
         }
       },
       checkScreenSize(){
           this.isMobile = window.innerWidth < 767;
       }
    },
    beforeDestroy(){
      if(typeof window !== "undefined")
      window.removeEventListener('resize',this.checkScreenSize,{passive:true});
    }
  }
</script>

<style  scoped>

.backgroundx{
    display: flex;
    height: calc(100vh - 50px);
    width:100%;
     background-color: var(--background-color);
   
}

.box{
  width: 90%;
  height: 300px;
  margin: auto;
  margin-top: 10px;
}

  #component-box {
    height: calc(100vh - 50px);
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







.active {
    color: var(--inverttext-color);
    transition: all 0.1s ease-in-out;
  }

</style>