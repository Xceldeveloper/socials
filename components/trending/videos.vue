<template>
  <div id="videos">
    <style>
       :root{
      --accent-color:{{Colors.accent}};
      --text-color:{{Colors.text}};
      --background-color:{{Colors.background}};
      --shadow-color:{{Colors.shadowColor}};
      --inverttext-color:{{Colors.invertTextColor}};

  }
    </style>
    <div class="grid-container">
      <div v-for="(post, key) in posts" :key="key" @click="gotoUrl(post.url)" class="card" :style="{visibility:visibilitx}">
        <div class="card-content">
          <img :src="post.image" alt class="img-responsive" @load="rendered" />
          <span v-if="post.multiple" class="tag-item-multiple mdi mdi-view-dashboard"></span>
          <!-- {{key}} -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import theme_mixin from "~/mixins/theme_mixin.js";
export default {
  mixins: [theme_mixin],
  data() {
    return {
      posts: [],
      imagesCount: 0,
      visibilitx: "hidden",
      drawnCounter: 0,
      lastCount: 0
    };
  },
  mounted() {
    this.getPosts();
  },
  created() {
    let gridEvents = ["load", "resize", "orientationChange"];
    let vm = this;
    gridEvents.forEach(event => { 
      window.addEventListener(event, vm.resizeAllgridItems);
    });
  },
  watch: {
    imagesCountx: function() {
      this.resizeAllgridItems();
      console.log("changed");
    },
    drawnCounter: function() {
      if (this.drawnCounter == this.posts.length) this.visibilitx = "visible";
    }
  },
  methods: {
    rendered() {
      this.imagesCount++;
    },
    getPosts() {
      this.randoMizedArray();
      setTimeout(() => {
        this.resizeAllgridItems();
      }, 100);
    },
    resizegridItem(item, index) {
      /* Get the grid object, its row-gap, and the size of its implicit rows */
      let grid = document.getElementsByClassName("grid-container")[0],
        rowGap = parseInt(
          window.getComputedStyle(grid).getPropertyValue("grid-row-gap")
        ),
        rowHeight = parseInt(
          window.getComputedStyle(grid).getPropertyValue("grid-auto-rows")
        );

      var height = this.setAspectRatio(this.posts[index].ratio, item);
      let rowSpan = Math.ceil(height / (rowHeight + rowGap));
      // let rowSpan = Math.ceil((item.querySelector('.card-content').getBoundingClientRect().height ) / (rowHeight + rowGap));
      item.style.gridRowEnd = "span " + rowSpan;
    },
    resizeAllgridItems() {
      // Get all item class objects in one list
      let allItems = document.getElementsByClassName("card");
 
      /*
       * Loop through the above list and execute the spanning function to
       * each list-item (i.e. each grid item)
       */
      for (let i = 0; i < allItems.length; i++) {
        this.resizegridItem(allItems[i], i);
        this.drawnCounter++;
        this.lastCount++;
      }
    },
    setAspectRatio(ratio, el) {
      var ratios = ratio.split(":");
      var containerWidth = el.getBoundingClientRect().width;
      //
      var a = parseInt(ratios[0]),
        b = parseInt(ratios[1]);
      if (a != 0 || b != 0) {
        var eWidth;
        eWidth = containerWidth;
        var newHeight = Math.round((eWidth / a) * b);
        el.style.height = newHeight;
        return newHeight;
      }
    },

    gotoUrl(url){
     this.$router.push(url)
    },
    randoMizedArray() {
      var arrr = [
        {
          image: require("~/static/drake.jpg"),
          ratio: "1:1",
          url:"jfjfjfj",
            multiple: true
        },
        {
          image: require("~/static/juliet.jpg"),
          ratio: "3:4",
           url:"jfjfjfj",
            multiple: false
        },
        {
          image: require("~/static/covid.jpg"),
          ratio: "16:9",
           url:"jfjfjfj",
             multiple: true
        }
      ];
      var newArr = [];
      for (var i = 0; i < 20; i++) {
        let rand = Math.floor(Math.random() * 3 + 0);
        newArr.push(arrr[rand]);
      }
      this.posts = newArr;
    },
    add() {
      this.posts.push(
        {
          image: require("~/static/drake.jpg"),
          ratio: "1:1"
        },

        {
          image: require("~/static/juliet.jpg"),
          ratio: "3:4"
        },
        {
          image: require("~/static/covid.jpg"),
          ratio: "16:9"
        }
      );

      console.log("added");

      setTimeout(() => {
        this.resizeAllgridItems();
      }, 100);
    }
  },

  computed: {
    imagesCountx() {
      return this.posts.length;
    }
  }
};
</script>

<style lang="scss" scoped>

.card-content{
  width: 100%;
  height: 100%;
   position: relative;
}
#videos {
  width: 60%;
  display: block;
  margin: auto;
}
.grid-container {
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(auto-fill, minmax(19%, 1fr));
  grid-auto-rows: 0;
}

img {
  width: 100%;
  height: auto;
  margin: 0px;
  padding: 0px;
}

.card {
  border: 1px solid var(--shadow-color);
  visibility: hidden;
}



   .tag-item-multiple {
    position: absolute;
    right: 5px;
    top: 5px;
    font-size: 13px;
    color: #ffffff;
    padding: 2px 5px;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
  }

@media screen and (min-width: 320px) and (max-width: 767px) {
  #videos {
    width: 100%;
    display: block;
    margin: auto;
    padding: 0px 6px;
  }

  .grid-container {
    display: grid;
    grid-gap: 3px;
    grid-template-columns: repeat(auto-fill, minmax(23%, 1fr));
    grid-auto-rows: 0;
  }

  
  .tag-item-multiple {
    position: absolute;
    right: 5px;
    top: 5px;
    font-size: 10px;
    color: #ffffff;
    padding: 2px 5px;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
  }
}

//for iphone X and others needs to come last or it would confilct with laptop screen
@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) {
  #videos {
    width: 100%;
    display: block;
    margin: auto;
    padding: 0px 6px;
  }

  .grid-container {
    display: grid;
    grid-gap: 3px;
    grid-template-columns: repeat(auto-fill, minmax(23%, 1fr));
    grid-auto-rows: 0;
  }

  
   .tag-item-multiple {
    position: absolute;
    right: 5px;
    top: 5px;
    font-size: 10px;
    color: #ffffff;
    padding: 2px 5px;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
  }

}
</style>