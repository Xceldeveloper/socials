<template>
  <div class="places-cover" :style="{backgroundColor:Colors.textTure}">
    <style>
       :root{
      --accent-color:{{Colors.accent}};
      --text-color:{{Colors.text}};
      --subtext-color:{{Colors.subTextColor}};
      --background-color:{{Colors.background}};
      --invertext-color:{{Colors.invertTextColor}}

  }
    </style>
    <v-skeleton-loader
      v-if="loading"
      :dark="isDarkTheme ? true : false"
      ref="skeleton"
      type="list-item-two-line"
      width="100%"
    ></v-skeleton-loader>

    <div id="icon-mask" v-if="!loading">
      <v-icon
        :size="isMobile ? '30px' : '40px'"
        :color="Colors.background"
      >mdi-map-marker-radius-outline</v-icon>
    </div>
    <div id="name-cover" v-if="!loading">
      <span class="place">{{place}}</span>
      <span class="location">{{location}}</span>
    </div>
  </div>
</template>

<script>
import theme_mixin from "~/mixins/theme_mixin.js";
import device_mixin from "~/mixins/device_mixin.js";
export default {
  mixins: [theme_mixin, device_mixin],
  props: ["id", "time"],
  data() {
    return {
      loading: true,
      transition: "scale-transition",
      place: "",
      location: ""
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
      (this.place = "June 12"),
        (this.location = "Uniben"),
        (this.loading = false);
    }
  }
};
</script>

<style scoped lang="scss">
@media screen and (min-width: 767px) {
  .places-cover {
    width: 50%;
    display: block;
    margin: auto;
    display: flex;
    height: 65px;
    border-radius: 12px;
    box-shadow: 0px 1px 4px var(--shadow-color);
    margin-bottom: 10px;
  }

  #icon-mask {
    height: 65px;
    width: 65px;
    padding: 7px;
    margin: 0px;
    cursor: pointer;
    border-radius: 12px 0px 0px 12px;
    background-color: var(--subtext-color);
    text-align: center;
  }

  #name-cover {
    flex: 1;
    height: 100%;
  }

  .place {
    display: block;
    font-size: 20px;
    margin-top: 7px;
    padding-left: 10px;
    cursor: pointer;
  }
  .location {
    padding-left: 10px;
    color: var(--subtext-color);
    cursor: pointer;
  }
}

@media screen and (min-width: 320px) and (max-width: 767px) {
  .places-cover {
    width: 100%;
    display: block;
    margin: auto;
    display: flex;
    height: 75px;
    box-shadow: 0px 1px 4px var(--shadow-color);
  }

  #icon-mask {
    height: 50px;
    width: 50px;
    padding: 7px;
    margin: 10px;
    cursor: pointer;
    border-radius: 50%;
    background-color: var(--subtext-color);
    text-align: center;
  }

  #name-cover {
    flex: 1;

    height: 100%;
  }

  .place {
    display: block;
    padding: 4px;
    padding-bottom: 0px;
    margin: 0px;
    font-size: 18px;
    margin-top: 5px;
    padding-left: 10px;
    cursor: pointer;
  }
  .location {
    padding-left: 10px;
    font-size: 15px;
    color: var(--subtext-color);
    cursor: pointer;
  }
}



//for iphone X and others needs to come last or it would confilct with laptop screen
@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) {
 
  .places-cover {
    width: 100%;
    display: block;
    margin: auto;
    display: flex;
    height: 75px;
    box-shadow: 0px 1px 4px var(--shadow-color);
  }

  #icon-mask {
    height: 50px;
    width: 50px;
    padding: 7px;
    margin: 10px;
    cursor: pointer;
    border-radius: 50%;
    background-color: var(--subtext-color);
    text-align: center;
  }

  #name-cover {
    flex: 1;

    height: 100%;
  }

  .place {
    display: block;
    padding: 4px;
    padding-bottom: 0px;
    margin: 0px;
    font-size: 18px;
    margin-top: 5px;
    padding-left: 10px;
    cursor: pointer;
  }
  .location {
    padding-left: 10px;
    font-size: 15px;
    color: var(--subtext-color);
    cursor: pointer;
  }
}
</style>

