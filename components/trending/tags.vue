<template>
  <div id="tags">
    <style>
       :root{
      --accent-color:{{Colors.accent}};
      --text-color:{{Colors.text}};
      --background-color:{{Colors.background}};
      --shadow-color:{{Colors.shadowColor}};
      --inverttext-color:{{Colors.invertTextColor}};
  }
    </style>
    <div class="header">
      <v-select
        :dark=" isDarkTheme ? true : false"
        :items="filters"
        v-model.trim="filter"
        :color="Colors.text"
        :item-color="Colors.accent"
        append-icon="mdi-filter-menu"
      ></v-select>
    </div>

    <div class="tags-wrapper">
      <tagwrapper tag="Covid-19" counts="30k" />
      <tagwrapper tag="Covik one nine" counts="10k" />
    </div>
  </div>
</template>

<script>
import theme_mixin from "~/mixins/theme_mixin.js";
import device_mixin from "~/mixins/device_mixin.js";
import tagwrapper from "~/components/trending/tag-wrapper.vue";
export default {
  mixins: [theme_mixin, device_mixin],
  components: {
    tagwrapper
  },
  head() {
    const title = "Trending #Tags";
    return {
      title
    };
  },
  data() {
    return {
      filter: "Today",
      filters: ["Today", "This Week", "Last Two Weeks", "This Month"]
    };
  },

  watch: {
    filter: function() {
      console.log(this.filter);
    }
  }
};
</script>

<style lang="scss" scoped>
#tags {
  display: flex;
  display: -webkit-flex;
  display: -ms-flexbox;
  flex-direction: column;
  padding: 0px;
  margin: 0px;
  height: 100%;
}

.header {
  height: 50px;
  width: 100%;
  padding-right: 80%;
  padding-left: 5%;
}

.tags-wrapper {
  width: 100%;
  height: 100%;
  flex: 1;
}


@media screen and (min-width: 320px) and (max-width: 767px) {
  .header {
    height: 50px;
    width: 100%;
    padding-right: 35%;
    padding-left: 5%;
  }

}



//for iphone X and others needs to come last or it would confilct with laptop screen
@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: landscape) {
  .header {
    height: 50px;
    width: 100%;
    padding-right: 35%;
    padding-left: 5%;
  }

}
</style>