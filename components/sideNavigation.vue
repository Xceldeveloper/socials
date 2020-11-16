<template>
  <div class="navCover">
    <div v-if="isShowing && Platformx == 'Mobile' || Platformx == 'Tablet' ">
      <modalFloor />
    </div>
    <div class="sideNav">
      <style>
  :root{
  --slide-x:{{slideX}};
  --width-c:{{widthX}};
  --size-x:{{sizeX}};
   --accent-color:{{Colors.accent}};;
  --accent-gradient:{{Colors.accentGradient}};
  --background-color:{{Colors.background}};
  --background-gradient:{{Colors.backgroundGradient}};
  --inverttext-color:{{Colors.invertTextColor}};
  --invert-subtextcolor:{{Colors.invertSubTextColor}};
  --text-color:{{Colors.text}};
  --sub-textcolor:{{Colors.subTextColor}};
  }
      </style>
      <!-- nav-content is important for hiding bla bla bla -->
      <div v-if="isShowing" class="nav-content">
      <div class="profile-cover">
    <img id="profile-pic" src="~/assets/drake.jpg">
    <span id="profile-username">John</span>
     <span id="profile-full-name">John Doe</span>
   </div>
       <div id="app-list-container"><span class="icon mdi mdi-focus-field"></span>
       <button class="list-item">Apps</button>
       </div>
      </div>
      <div class="smallSideNav" v-if="canShow">
        <button @click="clearNav" class="cancelSideNav">$$</button>
      </div>
    </div>
  </div>
</template>

<script>
import theme_mixin from "~/mixins/theme_mixin";
import device_mixin from "~/mixins/device_mixin"
import modalFloor from "~/components/modalFloor.vue";
export default {
  mixins: [theme_mixin],
  components: {
    modalFloor
  },
  data() {
    return {
      slideX: "translateX(0px)",
      Platformx: "Mobile",
      canShow: false,
      canHide:false,
      showAppsList:false,
      widthX: "280px",
      sizeX: "0px"
    };
  },
  created() {
    this.$bus.$on("toggle-sideNavigation", (state) => {
     //  alert(state);
      if (state) {
        if (this.Platformx == "Mobile" || this.Platformx == "Tablet") {
          this.slideX = "translateX(-280px)";
          this.widthX = "0px";
          setTimeout(() => {
            this.canHide = true;
          }, 500);
        } else {
          this.slideX = "translateX(0px)";
          this.widthX = "50px";
          this.$store.commit("settings/sideNavNeutral",true);
          setTimeout(() => {
            this.canShow = true;
            this.canHide = true;
          }, 500);
        }
        this.$store.commit("settings/toggleSideNav", false);
      } else if(!state) {
        this.canShow = false;
        if(this.Platformx == "Mobile" || this.Platformx == "Tablet"){
        this.slideX = "translateX(0px)";
        this.widthX = "250px";
        }else{
          this.slideX = "translateX(0px)";
        this.widthX = "280px";
        }
         setTimeout(() => {
            this.canHide = false;
          }, 500);
        this.$store.commit("settings/toggleSideNav", true);
        this.$store.commit("settings/sideNavNeutral",false);
      
      }
    });

    this.$bus.$on("closing-modalFloor",()=>{
        this.$bus.$emit('toggle-sideNavigation',this.isShowing);
    });
    this.initMenu();
  },
  mounted() {
  },
  methods: {
    clearNav() {
      setTimeout(() => {
        this.canShow = false;
        this.canHide = true;
        this.widthX = "0px";
      }, 100);
      this.$store.commit("settings/sideNavNeutral",false);
    },
    initMenu() {
      if (this.$store.state.settings.sideNav == true) {
        if (this.Platformx == "Mobile" || this.Platformx == "Tablet") {
          this.slideX = "translateX(-280px)";
          this.widthX = "0px";
           setTimeout(() => {
            this.canHide = true;
          }, 100);
          this.$store.commit("settings/toggleSideNav", false);
        }
      } else if (this.$store.state.settings.sideNavNeutral) {
       if (this.Platformx == "Desktop") {
          this.slideX = "translateX(0px)";
          this.widthX = "50px";
          this.canShow = true;
           setTimeout(() => {
            this.canHide = true;
          }, 100);
        } else {
          this.$store.commit("settings/toggleSideNav", false);
          this.slideX = "translateX(-280px)";
          this.widthX = "0px";
           setTimeout(() => {
            this.canHide = true;
          }, 100);
        }
      } else {
        this.slideX = "translateX(-280px)";
        this.widthX = "0px";
         setTimeout(() => {
            this.canHide = true;
          }, 100);
      }
    }
  },
  computed: {
    isShowing() {
      return this.$store.state.settings.sideNav;
    },
    Platform() {
      return "Mobile";
    }
  }
};
</script>

<style scoped lang="scss">
.sideNav {
  background: var(--background-color);
  width: var(--width-c);
  height: 100%;
  transform: var(--slide-x);
  transition: all 0.5s ease-in-out;
}

.nav-content{
  transition: all 0.5s ease-in-out;
}

.list-item{
  height: 50px;
  background-color: green;
}

.icon{
  font-size: 30px;
  margin-left: 10px;
  height: 100%;
  background-color: blue;
}

.list-item button{
  padding: 0px;
  background-color: red;
}

.list-item:hover{
  background-color: var(--sub-textcolor);
}

@media screen and (min-width: 320px) and (max-width: 767px) {
  .navCover {
    width: 0px;
    position: relative;
  }
  .smallSideNav {
    display: none;
  }

  .sideNav {
    position: absolute;
    top: -50px;
    height: calc(100% + 50px);
    z-index: 95;
  }
}


@media screen and (min-width: 320px) and (max-width: 767px){
  .sideNav {
    
  }

  
.profile-cover{
  width: 100%;
  height: 200px;
  background-color:var(--accent-color);
  padding-top: 30px;
}


.smallSideNav {
  width: 50px;
  height: 100%;
  
}

#profile-pic{
  width: 110px;
  height: 110px;
  margin:auto;
  display: block;
  border-radius: 50%;
  padding: 3px;
  border: 5px solid var(--background-color);
  border-width: 0px 5px 0px 5px;
}

#profile-username, #profile-full-name{
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  width: 120px;
   margin:auto;
  margin-top: 10px;
  color: var(--background-color);
  
}

#profile-full-name{
  color: var(--invert-subtextcolor);
  margin-top: 0px;
  font-size: 15px;
}

}



@media screen and (min-width: 767px){
  .sideNav {
    box-shadow: 2px 3px 8px lightgrey;
  }
  
.profile-cover{
  width: 100%;
  height: 200px;
  padding-top: 10px;
  background-color: var(--background-color);
  box-shadow: -2px 1px 5px lightgrey;
}

#profile-pic{
  width: 110px;
  height: 110px;
  margin:auto;
  display: block;
  border-radius: 50%;
  padding: 3px;
  border: 5px solid var(--accent-color);
  border-width: 0px 5px 0px 5px;
}

#profile-username, #profile-full-name{
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  width: 120px;
   margin:auto;
  margin-top: 10px;
  color: var(--text-color);
  
}

#profile-full-name{
  color: var(--sub-textcolor);
  margin-top: 0px;
  font-size: 15px;
}
}
</style>

