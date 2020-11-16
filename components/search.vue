<template>
  <div class="search">
    <style>
       :root{
      --accent-color:{{Colors.accent}};
      --text-color:{{Colors.text}};
      --background-color:{{Colors.background}};
       --shadow-color:{{Colors.shadowColor}};
       --inverttext-color:{{Colors.invertTextColor}};
  }
    </style>

    <input type="search" id="searchBox" placeholder="Search..." v-model="searchOuery" />

    <v-tabs
      :color="Colors.text"
      centered
      mobile-break-point="320px"
      :dark="isDarkTheme ? true : false"
    >
      <v-tab>People</v-tab>
      <v-tab>Channels</v-tab>
      <v-tab>Places</v-tab>
      <v-tab>Tags</v-tab>

      <v-tab-item>
        <div class="tab-item-cover">
          <people v-for="items in people" :key="items.id" />
        </div>
      </v-tab-item>
      <v-tab-item>
        <div  class="tab-item-cover">
          <channel v-for="items in channels" :key="items.id" />
        </div>
      </v-tab-item>
      <v-tab-item>
        <div  class="tab-item-cover">
          <places v-for="items in places" :key="items.id" />
        </div>
      </v-tab-item>
      <v-tab-item>
        <div :style="{backgroundColor:Colors.background}">
          <tags v-for="items in tags" :key="items.id" />
        </div>
      </v-tab-item>
    </v-tabs>
  </div>
</template>

<script>
import theme_mixin from "~/mixins/theme_mixin.js";
import device_mixin from "~/mixins/device_mixin.js";
import people from "~/components/search/people.vue";
import channel from "~/components/search/channel.vue";
import places from "~/components/search/places.vue";
import tags from "~/components/search/tags.vue";
export default {
  mixins: [theme_mixin, device_mixin],
  components: {
    people,
    channel,
    places,
    tags
  },
  head() {
    const title = "Search Socials";
    return {
      title
    };
  },
  data() {
    return {
      searchOuery: "",
      searching: false,
      transition: "scale-transition",
      people: [
        { id: 300 },
        { id: 200 },
        { id: 200 },
        { id: 300 },
        { id: 200 },
        { id: 200 },
        { id: 300 },
        { id: 200 },
        { id: 200 }
      ],
      channels: [
        { id: 300 },
        { id: 200 },
        { id: 200 },
        { id: 300 },
        { id: 200 },
        { id: 200 }
      ],
      places: [{ id: 300 }, { id: 200 }, { id: 200 }, { id: 300 }],
      tags: [{ id: 300 }, { id: 200 }, { id: 200 }]
    };
  },

  mounted() {
    //this.$bus.$emit("routing", this.$route.name);
  },

  methods: {
    search(query) {
      console.log(query);
      this.searching = true;
      clearTimeout(tim);
      var tim = setTimeout(() => {
        this.searching = false;
      }, 3000);
    },
    setPeople(data) {
      this.people = data;
    },
    setChannels(data) {
      this.channels = data;
    },
    setPlaces(data) {
      this.places = data;
    },
    setTags(data) {
      this.tags = data;
    }
  },

  watch: {
    searchOuery: function(val, oldVal) {
      this.search(this.searchOuery);
    }
  }
};
</script>

<style  lang="scss" scoped>

@media screen and (min-width: 767px) {
  #searchBox {
    width: 60%;
    background-color: var(--background-color);
    display: block;
    margin: auto;
    margin-top: 15px;
    margin-bottom: 5px;
    padding: 12px 25px;
    font-size: 18px;
    outline-style: none;
    color: var(--text-color);
    border-radius: 50px;
    box-shadow: 0px 1px 3px var(--shadow-color),
      -0px -0px 0px var(--shadow-color);
  }

  
.tab-item-cover{
  width: 100%;
  height: calc(100vh - 167px);
  overflow: auto;
  background-color: var(--background-color);
}

}


#searchBox {
  width: 95%;
  background-color: var(--background-color);
  display: block;
  margin: 10px auto;
  border-radius: 10px;
  padding: 15px 8px;
  font-size: 18px;
  outline-style: none;
  color: var(--text-color);
  box-shadow: 0px 1px 3px var(--shadow-color), -0px -0px 0px var(--shadow-color);
}
.search {
  width: 100%;
  height: 100%;
  background-color: var(--background-color);
  overflow: auto;
  color: var(--text-color);
}

@media screen and (min-width: 320px) and (max-width: 767px) and (orientation: portrait ) {
.tab-item-cover{
  width: 100%;
  height: calc(100vh - 227px);
  overflow: auto;
  background-color: var(--background-color);

}

}


@media screen and (min-width: 320px) and (max-width: 767px) and (orientation: landscape) {
.tab-item-cover{
  width: 100%;
  height: calc(100vw - 227px);
  overflow: auto;
  background-color: var(--background-color);

}

}


//for iphone X and others needs to come last or it would confilct with laptop screen
@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: landscape) {
  .tab-item-cover{
  width: 100%;
  height: calc(100vw - 227px);
  overflow: auto;
  background-color: var(--background-color);
  
}

}

@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: portrait) {
  .tab-item-cover{
  width: 100%;
  height: calc(100vh - 227px);
  overflow: auto;
  background-color: var(--background-color);

}

}




</style>

