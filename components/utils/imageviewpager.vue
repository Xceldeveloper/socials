<template>
  <div id="image-view-pager" ref="viewpager">
    <v-carousel
      v-model="model"
      :hide-delimiter-background="hideDelimitersBackground"
      :hide-delimiters="hideDelimiters"
      height="100%"
      :continuous="restart"
      :cycle="isAuto"
      :interval="interval"
      :show-arrows="isMobile==true ? false:onHover">
      <v-carousel-item v-for="(item, index) in images" :key="index">
        <img :src="item.src" @click="emitCliked" alt oncontextmenu="return false;" />
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
import device_mixin from "~/mixins/device_mixin.js";
export default {
  mixins: [device_mixin],
  props: {
    images: {
      type: Array,
      default: []
    },
    keyPressed: {
      type: Object
    },
    hideDelimiters: {
      type: Boolean,
      default: true
    },
    hideDelimitersBackground: {
      type: Boolean,
      default: true
    },
    isAuto: {
      type: Boolean,
      default: false
    },
    restart: {
      type: Boolean,
      default: false
    },
    onHover: {
      type: Boolean,
      default: false
    },
    interval: {
      type: Number,
      default: 3000
    }
  },
  data() {
    return {
      model: 0
    };
  },
  mounted() {},
  methods: {
    emitCliked() {
      this.$emit("clicked");
    }
  },
  watch: {
    keyPressed() {
      if (this.keyPressed.key == "ArrowRight") {
        this.model++;
      } else if (this.keyPressed.key == "ArrowLeft") {
        this.model--;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#image-view-pager {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  -webkit-user-select: none; /* Chrome all / Safari all */
  -moz-user-select: none; /* Firefox all */
  -ms-user-select: none; /* IE 10+ */
  -o-user-select: none;
  user-select: none;
}
</style>