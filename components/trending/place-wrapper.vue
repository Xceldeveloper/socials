<template>
  <div class="place-cover">
    <style>
       :root{
      --accent-color:{{Colors.accent}};
      --text-color:{{Colors.text}};
      --background-color:{{Colors.background}};
      --shadow-color:{{Colors.shadowColor}};
      --inverttext-color:{{Colors.invertTextColor}};
      --textture-color:{{Colors.textTure}};
  }
    </style>
    <span class="place-header">
      <v-chip :color="Colors.text" :text-color="Colors.background">
        <v-avatar left :color="Colors.background">
          <v-icon :color="Colors.text" size="20px">mdi-map-marker-radius-outline</v-icon>
        </v-avatar>
        <b>{{place}}</b>
        ,{{location}}
      </v-chip>
      {{counts}}
    </span>
    <v-slide-group v-if="!isMobile"
      :show-arrows="isMobile ? false : true"
      :dark="isDarkTheme ? true : false"
      mobile-break-point="320px"
    >
      <v-slide-item v-for="(place,index) in expplaces" :key="index">
        <nuxt-link :to="place.link">
          <div class="place-item-cover">
            <img :src="place.thumbnail" :alt="place" />
            <span v-if="place.multiple" class="place-item-multiple mdi mdi-view-dashboard"></span>
            <span v-if="place.type == 'image'" class="place-item-type mdi mdi-camera-outline"></span>
            <span v-if="place.type == 'video'" class="place-item-type mdi mdi-video-outline"></span>
          </div>
        </nuxt-link>
      </v-slide-item>
    </v-slide-group>

     <div class="special-slide" v-if="isMobile">
       <nuxt-link :to="place.link" v-for="(place,index) in expplaces" :key="index">
          <div class="place-item-cover">
            <img :src="place.thumbnail" :alt="place" />
            <span v-if="place.multiple" class="place-item-multiple mdi mdi-view-dashboard"></span>
            <span v-if="place.type == 'image'" class="place-item-type mdi mdi-camera-outline"></span>
            <span v-if="place.type == 'video'" class="place-item-type mdi mdi-video-outline"></span>
          </div>
        </nuxt-link>
    </div>
  </div>
</template>

<script>
import theme_mixin from "~/mixins/theme_mixin.js";
import device_mixin from "~/mixins/device_mixin.js";
export default {
  mixins: [theme_mixin, device_mixin],
  props: ["place", "counts", "location"],
  data() {
    return {
      avatar: require("~/static/drake.jpg"),
      expplaces: [
        {
          link: "covid",
          thumbnail: require("~/static/drake.jpg"),
          type: "image",
          multiple: true
        },
        {
          link: "jdbbhbbfd",
          thumbnail: require("~/static/drake.jpg"),
          type: "video",
          multiple: false
        },
        {
          link: "jdbbhbbfd",
          thumbnail: require("~/static/drake.jpg"),
          type: "video",
          multiple: false
        },
        {
          link: "covid",
          thumbnail: require("~/static/drake.jpg"),
          type: "image",
          multiple: true
        },
        {
          link: "jdbbhbbfd",
          thumbnail: require("~/static/drake.jpg"),
          type: "video",
          multiple: false
        },
        {
          link: "jdbbhbbfd",
          thumbnail: require("~/static/drake.jpg"),
          type: "video",
          multiple: false
        },
        {
          link: "jdbbhbbfd",
          thumbnail: require("~/static/drake.jpg"),
          type: "video",
          multiple: false
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.place-cover {
  width: 60%;
  height: auto;
  background-color: var(--textture-color);
  box-shadow: 0px 1px 3px var(--shadow-color), -0px -0px 0px var(--shadow-color);
  margin: 10px auto;
  border-radius: 10px;
  padding: 10px;
  padding-bottom: 20px;
}

.place-header {
  display: block;
  width: 100%;
  padding: 10px;
  color: var(--text-color);
}

.place-item-cover {
  width: 130px;
  height: 130px;
  box-shadow: 0px 1px 3px var(--shadow-color), -0px -0px 0px var(--shadow-color);
  border-radius: 4px;
  position: relative;
  margin-right: 10px;
}

.place-item-cover img {
  width: 100%;
  height: 100%;
  border-radius: 4px;
}

.place-item-type {
  position: absolute;
  right: 10px;
  bottom: 10px;
  font-size: 18px;
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 4px 8px;
  border-radius: 50%;
}

.place-item-multiple {
  position: absolute;
  right: 10px;
  top: 10px;
  font-size: 18px;
  color: #ffffff;
  padding: 4px 8px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
}
@media screen and (min-width: 320px) and (max-width: 767px) {
  .place-cover {
    width: 100%;
    height: auto;
    background-color: var(--background-color);
    box-shadow: 0px 1px 3px var(--shadow-color),
      -0px -0px 0px var(--shadow-color);
    margin: 3px auto;
    padding: 10px;
    padding-bottom: 20px;
    border-radius: 0px;
  }

    .special-slide{
     white-space: nowrap;
     width: 100%;
     overflow: auto;
  }

  .place-item-cover {
    width: 120px;
    height: 120px;
    box-shadow: 0px 1px 3px var(--shadow-color),
      -0px -0px 0px var(--shadow-color);
    border-radius: 4px;
    position: relative;
    margin-right: 10px;
    display: inline-block;
  }

  .place-item-type {
    position: absolute;
    right: 10px;
    bottom: 10px;
    font-size: 15px;
    color: #ffffff;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 4px 7px;
    border-radius: 50%;
  }

  .place-item-multiple {
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 15px;
    color: #ffffff;
    padding: 4px 7px;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
  }
}

//for iphone X and others needs to come last or it would confilct with laptop screen
@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) {
  .place-cover {
    width: 100%;
    height: auto;
    background-color: var(--background-color);
    box-shadow: 0px 1px 3px var(--shadow-color),
      -0px -0px 0px var(--shadow-color);
    margin: 3px auto;
    padding: 10px;
    padding-bottom: 20px;
    border-radius: 0px;
  }

   .special-slide{
     white-space: nowrap;
     width: 100%;
     overflow: auto;
  }

  .place-item-cover {
    width: 120px;
    height: 120px;
    box-shadow: 0px 1px 3px var(--shadow-color),
      -0px -0px 0px var(--shadow-color);
    border-radius: 4px;
    position: relative;
    margin-right: 10px;
    display: inline-block;
  }
}
</style>