<template>
  <div id="emoji-wrapper" v-if="show">
    <v-tabs centered grow  :dark="isDarkTheme ? true : false" :color="Colors.text" 
    :background-color="Colors.textTure"
    >
      <v-tabs-slider></v-tabs-slider>
      <v-tab
        v-for="(emojiGroup, category) in emojis"
        :key="category"
        :href="`#tab-${category}`"
        mobile-break-point="320"
        small
      >{{category}}</v-tab>

      <v-tab-item
        v-for="(emojiGroup, category) in emojis"
        :key="category"
        :value="'tab-' + category"
      >
        <div id="emojis">
          <span
            class="emoji"
            v-for="(emoji, emojiName) in emojiGroup"
            :key="emojiName"
            @click="insert(emoji,emojiName)"
            :title="emojiName"
          >{{ emoji }}</span>
        </div>
      </v-tab-item>
    </v-tabs>

    <!-- <v-text-field
        name="name"
        label="search "
        id="id"
        rounded
        outlined
        v-model="search"
          :dark="isDarkTheme ? true : false"
        :color="Colors.text"
    ></v-text-field>-->
  </div>
</template>

<script>
import { emojis } from "~/assets/libs/emojis.js";

import theme_mixin from "~/mixins/theme_mixin.js";
export default {
    props:{
        canShow:{
            default:false
        }
    },
  components: {},
  mixins: [theme_mixin],
  data() {
    return {
        show:false,
      emojiTable: emojis,
      search: "",
      input: "",
      recentEmojis: {
      }
    };
  },
  mounted() {
    this.geRecentEmojis();
    this.emojiTable.Recent = this.recentEmojis;
    this.show = this.canShow;
  },
  methods: {
    insert(emoji, name) {
      this.$emit("emoji", emoji);
      this.$set(this.recentEmojis, name, emoji);
    },
    geRecentEmojis() {
      var emo = localStorage.getItem("emojis");
      if (emo == null) {
        this.recentEmojis = {};
        return;
      }
      var p = JSON.parse(emo);
      this.recentEmojis = p;
    }
  },
  computed: {
    emojis() {
      if (this.search) {
        const obj = {};
        for (const category in this.emojiTable) {
          obj[category] = {};
          for (const emoji in this.emojiTable[category]) {
            if (new RegExp(`.*${this.search}.*`).test(emoji)) {
              obj[category][emoji] = this.emojiTable[category][emoji];
            }
          }
          if (Object.keys(obj[category]).length === 0) {
            delete obj[category];
          }
        }
        return obj;
      }
      return this.emojiTable;
    }
  },
  watch: {
    recentEmojis() {
      var emojis = JSON.stringify(this.recentEmojis);
      localStorage.setItem("emojis", emojis);
    },
    canShow(){
        if(this.canShow)
        this.show = true;
        else
        this.show = false
    }
  }
};
</script>

<style>
#emoji-wrapper {
  display: block;
  height: 280px;
  margin:auto;
  width: 100%;
  max-width: 440px;
  overflow: hidden;
  box-shadow: 0px 1px 3px var(--shadow-color),
      -0px -0px 0px var(--shadow-color);
      

}
#emojis {
  width: 100%;
  max-width: 440px;
  height: 280px;
  background-color: var(--background-color);
  overflow: auto;
  white-space: pre-wrap;
  word-wrap: break-word;
 
}

.emoji {
  cursor: pointer;
  margin: 4px;
  padding: 2px;
}

#emojis::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	background-color: var(--background-color);
}

#emojis::-webkit-scrollbar
{
	width: 7px;
	background-color:var(--background-color);
    
}

#emojis::-webkit-scrollbar-thumb
{
	background-color: var(--texture-color);
	border: 1px solid var(--subtext-color);
   border-radius: 10px;
}
</style>