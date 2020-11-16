<template>
  <div id="imageview" ref="imagepost">
    <baseview
      :showFullScreen="isFullScreen"
      @exitFullScreen="isFullScreen = false"
      @liked="wasLiked"
      @commented="wasCommentedOn"
      @reposted="wasReposted"
      @bookmarked="wasBookMarked"
      @reported="wasReported"
      @deleted="wasDeleted"
      @viewPos="handView"
      :postId="postId"
      :postType="postType"
      :canFloat="float"
      :parentPosition="position"
      :isScrolling="scrolling"
      :isPromotion="promotion"
    >
      <template v-slot:mini>
        <div id="orignal-post-wrapper" v-if="postType == CONSTANTS.image_repost || postType == CONSTANTS.image_promoted_repost">
          <v-icon :color="Colors.text">mdi-share</v-icon>
          <v-chip :text-color="Colors.text" :color="Colors.background" @click="gotoOpPost">
            <v-avatar left :color="Colors.background">
              <img :src="op.avatar" />
            </v-avatar>
            {{op.username}}
          </v-chip>
        </div>
        <div id="wrapper1">
          <div id="recbtn">
            <div id="location-btn">
              <v-icon color="#ededed">mdi-map-marker-radius</v-icon>
            </div>

            <div id="recognized-person">
              <v-icon color="#ededed">mdi-account</v-icon>
            </div>
          </div>
          <dynamicgrid
            :pattern="filterPattern"
            :images="setDynamicImage"
            :imagesCount="post.images.length"
            @click="isFullScreen = true"
          />
        </div>

        <div id="promotion-btn-wrapper" v-if="CONSTANTS.image_promoted_post == postType || postType == CONSTANTS.image_promoted_repost">
        <v-btn :color="Colors.text"  outlined @click="handlePromotion" >{{action_btn}}</v-btn>
        </div>
       
        <div id="caption" v-html="caption" @click="limited = !limited"></div>
      </template>
      <template v-slot:max>
        <div id="wrapper2">
          <v-hover v-slot:default="{ hover }" close-delay="800">
            <imageviewpager
              :images="post.images"
              :leaving="isFullScreen"
              @clicked="float = !float"
              :keyPressed="getKey"
              :onHover="hover"
            />
          </v-hover>
          <div id="bottom-cover" v-if="float">
        <div id="promotion-btn-wrapper" v-if="CONSTANTS.image_promoted_post == postType || postType == CONSTANTS.image_promoted_repost">
        <v-btn color="#ffffff"  outlined @click="handlePromotion" >{{action_btn}}</v-btn>
        </div>
            <div id="caption2" v-html="caption" @click="limited = !limited"></div>
          </div>
        </div>
      </template>
    </baseview>
  </div>
</template>

<script>
import baseview from "~/components/activity/baseview.vue";
import dynamicgrid from "~/components/utils/dynamicgrid.vue";
import imageviewpager from "~/components/utils/imageviewpager.vue";
import theme_mixin from "~/mixins/theme_mixin.js";
import device_mixin from "~/mixins/device_mixin.js";
import user_mixin from "~/mixins/user_mixin.js";
import utils_mixin from "~/mixins/utils_mixin.js";


import { CONSTANTS } from "~/assets/libs/constants.js";
export default {
  mixins: [theme_mixin, device_mixin, user_mixin, utils_mixin],
  components: {
    baseview,
    dynamicgrid,
    imageviewpager
  },
  props: {
    postId: {
      type: Number,
      required: true
    },
    postType: {
      type: String,
      required: true
    },
    position: {
      //type: Object
    },
    scrolling: {
      type: Boolean
    },
    keyPressed: {
      type: Object
    }
  },
  data() {
    return {
      CONSTANTS:CONSTANTS,
      promotion:false,
      post: {
        images: [
          {
            ratio: "1:1",
            src: require("~/static/drake.jpg")
          },
          {
            ratio: "0:0",
            src: require("~/static/19.jpg")
          },
          {
            ratio: "16:9",
            src: require("~/static/covid.jpg")
          },
          {
            ratio: "0:0",
            src: require("~/static/android.png")
          },
          {
            ratio: "3:4",
            src: require("~/static/juliet.jpg")
          },
          {
            ratio: "0:0",
            src: require("~/static/wedding.jpg")
          },
          {
            ratio: "0:0",
            src: require("~/static/wash.jpg")
          }
        ],
        caption: `God's Plan \n Hello folks he\n no nr \n note that <b>ovmobile inc</b> is comming
          soon we need to be \n be prepared be cause it's going o be a \n<b>A \nworld \nin \na \nnew \nLight</b>`,
        multiple: false,
        identified: []
      },
      isFullScreen: false,
      float: false,
      limited: true,
      getKey: {},
      op: {
        avatar:"",
        username: "",
        id:0
      },
      action_btn:"SIGN UP"
    };
  },

  mounted() {
    this.getOp();
    if(this.CONSTANTS.image_promoted_post == this.postType || this.postType == this.CONSTANTS.image_promoted_repost){
      this.promotion = true;
    }
  },
  methods: {
    wasLiked(who) {
      //alert(who.isAdd);
    },
    wasCommentedOn(who) {
      //alert(who.comment);
    },
    wasReposted(who) {
      //alert("reposted");
    },
    wasBookMarked(who) {
      //alert(who.type);
    },
    wasReported(who) {
      // alert(who.type);
    },

    wasDeleted(who) {
      //alert("deleted")
    },
    handView(pos) {
      if (pos.top) {
        //   console.log("top"+ this.postId)
      } else if (pos.inside) {
        //   console.log("inside" + this.postId)
      } else if (pos.bottom) {
        //    console.log("bottom" + this.postId);
      }
    },

    getPostDetails() {
      
    },
    getOp(){
      if(this.postType == this.CONSTANTS.image_repost || this.postType == this.CONSTANTS.image_promoted_repost){
        this.op.username = "Piep piper";
        this.op.avatar =  require("~/static/drake.jpg");
        this.op.id = 4543
      }
    },
    gotoOpPost(){
     
    },

    handlePromotion(){

    }
  },
  computed: {
    caption() {
      var text = "";
      // var mm = this.captionText;
      text = this.formatText(this.post.caption);
      if (this.wordCount(this.post.caption).characters > 130 && this.limited) {
        text = text.substring(0, 130) + "  ...read more";
      } else {
        text += "<br> ...read less";
      }

      return text;
    },

    setDynamicImage() {
      var ptx = [];
      var lengthx = this.post.images.length > 4 ? 4 : this.post.images.length;
      for (let i = 0; i < lengthx; i++) {
        ptx.push(this.post.images[i]);
      }
      return ptx;
    },

    filterPattern() {
      var ptx = [];
      var lengthx = this.post.images.length > 4 ? 4 : this.post.images.length;
      for (let i = 0; i < lengthx; i++) {
        ptx.push(this.post.images[i].ratio);
      }
      return ptx;
    }
  },
  watch: {
    isFullScreen() {
      if (!this.isFullScreen) this.cancelFullScreen();
      else this.requestFullScreen();
    },
    keyPressed() {
      if (this.isFullScreen) {
        this.getKey = this.keyPressed;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#imageview {
  width: auto;
  height: auto;
  display: block;
  margin: auto;
}

#orignal-post-wrapper {
  width: 100%;
  height: auto;
  padding: 10px;
  text-align: right;
}

#promotion-btn-wrapper{
  width: 100%;
  padding: 5px 10px;
}

#caption {
  width: 100%;
  height: auto;
  min-height: 1px;
  max-height: 250px;
  overflow: auto;
  padding: 0px 10px;
  font-family: sans-serif;
  margin-bottom: 10px;
  margin-top: 3px;
  -webkit-user-select: none; /* Chrome all / Safari all */
  -moz-user-select: none; /* Firefox all */
  -ms-user-select: none; /* IE 10+ */
  -o-user-select: none;
  user-select: none;
}

#caption2 {
  width: 100%;
  height: auto;
  min-height: 1px;
  max-height: 220px;
  overflow: auto;
  color: #ffffff;
  padding: 8px 50px;
  font-family: sans-serif;
  text-align: center;
  -webkit-user-select: none; /* Chrome all / Safari all */
  -moz-user-select: none; /* Firefox all */
  -ms-user-select: none; /* IE 10+ */
  -o-user-select: none;
  user-select: none;
}

#bottom-cover {
  width: 100%;
  position: fixed;
  z-index: 100px;
  bottom: 48px;
  background-color: rgba(0, 0, 0, 0.3);
}

#wrapper1 {
  width: auto;
  height: auto;
  display: block;
  margin: auto;
  position: relative;
}

#recbtn {
  position: absolute;
  width: auto;
  bottom: 8px;
  left: 8px;
  z-index: 1;
  display: -moz-box;
  display: flex;
  display: -ms-flexbox;
  display: -webkit-flex;
  border-radius: 20px;
  border-radius: 40px;
  background-color: #101010;
}

#location-btn,
#recognized-person {
  border-radius: 50%;
  background-color: #101010;
  padding: 5px;
  width: auto;
  height: auto;
  z-index: 1;

  display: inline-block;
  margin: 3px;
  cursor: pointer;
}
#location-btn {
  box-shadow: 1px 1px 1px #000000;
}

#recognized-person {
  box-shadow: -1px 1px 1px #000000;
}

#wrapper2 {
  width: 100%;
  height: 100%;
}
</style>