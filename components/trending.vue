<template>
  <div class="trending">
    <style>
       :root{
      --accent-color:{{Colors.accent}};
      --text-color:{{Colors.text}};
      --background-color:{{Colors.background}};
      --shadow-color:{{Colors.shadowColor}};
      --inverttext-color:{{Colors.invertTextColor}};
      --mov:{{move}};
      --syle:{{style}}
  }
    </style>

    <div id="nav-cover">
      <button class="nav" @click="scroll(0)">Tags</button>
      <button class="nav" @click="scroll(1)">Photos</button>
      <button class="nav" @click="scroll(2)">Videos</button>
      <button class="nav" @click="scroll(3)">Places</button>
      <button class="overlay">{{active}}</button>
    </div>

    <div id="components-cover">
     <!-- <keep-alive> -->
      <component :is="selectedComponents"></component>
     <!-- </keep-alive> -->
    </div>
  </div>
</template>

<script>
import theme_mixin from "~/mixins/theme_mixin.js";
import  tags  from "~/components/trending/tags.vue";
import photos from "~/components/trending/photos.vue";
import videos from "~/components/trending/videos.vue";
import places from "~/components/trending/places.vue";
export default {
  mixins: [theme_mixin],
  components: {
    tags,
    photos,
    videos,
    places
  },
  head() {
    const title = "trending";
    return {
      title
    };
  },
  data() {
    return {
      move: "0%",
      active: "Tags",
      selectedComponents:"tags",
      style: "20px 0px 0px 20px"
    };
  },

  mounted() {
    //this.$bus.$emit("routing", this.$route.name);
  },

  methods: {
    upload() {
      this.$router.push("/home/upload");
    },
    scroll(index) {
      var ccc = [
        { name: "Tags", style: "20px 0px 0px 20px" },
        { name: "Photos", style: "0px" },
        { name: "Videos", style: "0px" },
        { name: "Places", style: "0px 20px 20px 0px" }
      ];
      var mmm = 25 * index;
      this.move = mmm + "%";
      this.active = ccc[index].name;
      this.style = ccc[index].style;
      this.selectedComponents = ccc[index].name.toLowerCase();
    }
  }
};
</script>

<style  lang="scss" scoped>
.trending {
  width: 100%;
  height: 100%;
  background-color: var(--background-color);
  overflow: auto;
  color: var(--text-color);
  display: flex;
  display: -webkit-flex;
  display: -ms-flexbox;
  flex-direction: column;
}

img {
  width: 70%;
  margin: auto;
  height: auto;
  display: block;
  margin-top: 10px;
}

#nav-cover {
  width: 60%;
  height: 45px;
  background-color: var(--text-color);
  display: block;
  margin: 10px auto;
  border-radius: 20px;
  outline-style: none;
  color: var(--inverttext-color);
  box-shadow: 0px 1px 3px var(--shadow-color), -0px -0px 0px var(--shadow-color);
  position: relative;
  white-space: nowrap;
}

#nav-cover .nav {
  width: 24%;
  height: 100%;
  color: var(--inverttext-color);
  display: inline-block;
  outline-style: none;
}

.overlay {
  height: 100%;
  width: 25%;
  position: absolute;
  background-color: var(--background-color);
  color: var(--text-color);
  top: 0%;
  left: var(--mov);
  border-radius: var(--syle);
  transition: all 0.3s ease-in-out;
  font-weight: bold;
  outline-style: none;
  border: 3px solid var(--text-color);
}

#components-cover {
  width: 100%;
  padding: 0px;
  height: 0px;
  overflow: auto;
  flex: 1;
}

@media screen and (min-width: 320px) and (max-width: 767px) {
  #nav-cover {
    width: 95%;
    height: 45px;
    background-color: var(--text-color);
    display: block;
    margin: 10px auto;
    border-radius: 20px;
    outline-style: none;
    color: var(--inverttext-color);
    box-shadow: 0px 1px 3px var(--shadow-color),
      -0px -0px 0px var(--shadow-color);
    position: relative;
    white-space: nowrap;
  }
}



//for iphone X and others needs to come last or it would confilct with laptop screen
@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) {
 #nav-cover {
    width: 95%;
    height: 45px;
    background-color: var(--text-color);
    display: block;
    margin: 10px auto;
    border-radius: 20px;
    outline-style: none;
    color: var(--inverttext-color);
    box-shadow: 0px 1px 3px var(--shadow-color),
      -0px -0px 0px var(--shadow-color);
    position: relative;
    white-space: nowrap;
  }
}
</style>

