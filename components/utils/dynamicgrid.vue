<template>
  <div id="dynamicgrid" ref="box" @click="emitCliked">
    <img
      oncontextmenu="return false;"
      class="grid-item"
      v-for="(item,index) in images"
      :key="index"
      :src="item.src"
      :style="setImageStyle(index)"
    />

    <button id="plus" v-if="imageLetf > 0">+ {{imageLetf}}</button>
  </div>
</template>

<script>
import { DYNAMIC_GRID_STYLES } from "~/assets/libs/dynamicStyles.js";

export default {
  props: {
    pattern: {
      type: Array,
      default: []
    },
    images: {
      type: Array
    },
    imagesCount: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      styleIndex: 0,
      calcSrc: ""
    };
  },
  mounted() {
    setTimeout(() => {
      this.getStyleIndex();
      this.setBoxStyle();
    }, 100);
  },
  methods: {
    emitCliked() {
      this.$emit("click");
    },
    getStyleIndex() {
      this.styleIndex = 0;
      for (let i = 0; i < DYNAMIC_GRID_STYLES.length; i++) {
        if (
          JSON.stringify(this.pattern) ===
          JSON.stringify(DYNAMIC_GRID_STYLES[i].pattern)
        ) {
          this.styleIndex = i;
          break;
        }
      }
      if (this.styleIndex === 0 && this.pattern.length > 0) {
        this.reArrangeRatio();
      }
    },

    setBoxStyle() {
      var ratio;
      var parent = this.$refs.box;
      if (this.styleIndex == 0) {
        // ratio = "1:1";
        parent.style.height = 0 + "px";
        return;
      } else {
        ratio = DYNAMIC_GRID_STYLES[this.styleIndex].parent_style;
      }

      var ratios = ratio.split(":");

      var width = parent.clientWidth;
      var height = 0;
      var a = parseInt(ratios[0]),
        b = parseInt(ratios[1]);
      if (a != 0 || b != 0) {
        height = Math.round((width / a) * b);
      }
      parent.style.height = height + "px";
      parent.style.width = width + "px";
    },

    setImageStyle(index) {
      var ratio;
      if (index == 0) {
        return this.parseStyle(DYNAMIC_GRID_STYLES[this.styleIndex].one);
      } else if (index == 1) {
        return this.parseStyle(DYNAMIC_GRID_STYLES[this.styleIndex].two);
      } else if (index == 2) {
        return this.parseStyle(DYNAMIC_GRID_STYLES[this.styleIndex].three);
      } else if (index == 3) {
        return this.parseStyle(DYNAMIC_GRID_STYLES[this.styleIndex].four);
      }
    },

    parseStyle(style) {
      return {
        height: style.height,
        width: style.width,
        top: style.top,
        left: style.left,
        bottom: style.bottom,
        right: style.right
      };
    },

    reArrangeRatio() {
      var selected = this.checkArray(this.pattern);
      if (!selected.length > 0) {
        return;
      }
      for (let i = 0; i < selected.length; i++) {
        var index = selected[i];
        var randNumbers = Math.floor(Math.random() * 3 + 0);
        var posb = ["1:1", "3:4", "16:9"];
        this.pattern.splice(index, 1, posb[randNumbers]);
      }

      this.getStyleIndex();
      this.setBoxStyle();
    },

    checkArray(pattern) {
      var result = [];
      for (let i = 0; i < pattern.length; i++) {
        var cuur = pattern[i];
        if (cuur == "0:0") {
          result.push(i);
        }
      }

      return result;
    },

    resizeAllgridItems() {
      let allItems = document.getElementsByClassName("grid-item");

      /*
       * Loop through the above list and execute the spanning function to
       * each list-item (i.e. each grid item)
       */
      for (let i = 0; i < allItems.length; i++) {
        this.resizegridItem(allItems[i], i);
      }
    },
    resizegridItem(item, index) {
      if (index == 0) {
        Object.assign(
          item.style,
          this.parseStyle(DYNAMIC_GRID_STYLES[this.styleIndex].one)
        );
      } else if (index == 1) {
        Object.assign(
          item.style,
          this.parseStyle(DYNAMIC_GRID_STYLES[this.styleIndex].two)
        );
      } else if (index == 2) {
        Object.assign(
          item.style,
          this.parseStyle(DYNAMIC_GRID_STYLES[this.styleIndex].three)
        );
      } else if (index == 3) {
        Object.assign(
          item.style,
          this.parseStyle(DYNAMIC_GRID_STYLES[this.styleIndex].four)
        );
      }
    }
  },
  computed: {
    imageLetf() {
      if (this.imagesCount > 4) {
        return this.imagesCount - 4;
      } else if (this.imagesCount == 4) {
        return 0;
      } else {
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#dynamicgrid {
  width: auto;
  height: auto;
  display: block;
  margin: auto;

  position: relative;
}

img {
  position: absolute;
  object-fit: cover;
  -webkit-user-select: none; /* Chrome all / Safari all */
  -moz-user-select: none; /* Firefox all */
  -ms-user-select: none; /* IE 10+ */
  -o-user-select: none;
  user-select: none;
}

#plus {
  position: absolute;
  bottom: 10px;
  right: 0px;
  width: auto;
  height: auto;
  font-size: 20px;
  border-radius: 20px 0px 0px 20px;
  padding: 5px 30px;
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.4);
}
</style>