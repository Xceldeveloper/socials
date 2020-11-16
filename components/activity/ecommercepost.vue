<template>
  <div id="ecommerce-post">
    <baseview
      :showFullScreen="isFullScreen"
      @exitFullScreen="isFullScreen = false"
      @liked="wasLiked"
      @commented="wasCommentedOn"
      @reposted="wasReposted"
      @cart="wasCarted"
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
        <div
          id="orignal-post-wrapper"
          v-if="postType == CONSTANTS.ecommerce_repost || postType == CONSTANTS.ecommerce_promoted_repost"
        >
          <v-icon :color="Colors.text">mdi-share</v-icon>
          <v-chip :text-color="Colors.text" :color="Colors.background" @click="gotoOpPost">
            <v-avatar left :color="Colors.background">
              <img :src="op.avatar" />
            </v-avatar>
            {{op.username}}
          </v-chip>
        </div>
        <div id="wrapper1">
          <v-btn :color="Colors.textTure" absolute bottom right fab @click="gotoStore">
            <v-icon :color="Colors.text" size="36px">mdi-store</v-icon>
          </v-btn>

          <v-hover v-slot:default="{ hover }" close-delay="800">
            <imageviewpager
              :images="post.images"
              :leaving="isFullScreen"
              @clicked="isFullScreen = true"
              :keyPressed="getKey"
              :onHover="hover"
              :hideDelimiters="isMobile ? false : hover ? false : true"
              :restart="true"
              :interval="4000"
              :isAuto="canChange ? hover ? false : true : false"
            />
          </v-hover>
        </div>
        <div id="item-details">
          <span class="item-sub-title">
            {{post.subtitle}}
            <span class="item-discount">{{ post.discount}}</span>
          </span>
          <span class="item-title">{{post.title}}</span>
          <span class="item-price">{{post.price}}</span>
          <v-btn outlined @click="gotoItemDetails" :color="Colors.text">Buy Now</v-btn>
        </div>
      </template>
      <template v-slot:max>
        <div id="wrapper2">
          <v-hover v-slot:default="{ hover }" close-delay="800">
            <imageviewpager
              @clicked="float = !float"
              :onHover="hover"
              :images="post.images"
              :leaving="isFullScreen"
              :keyPressed="getKey"
              :restart="true"
            />
          </v-hover>
          <div id="bottom-cover" v-if="float">
            <span class="item-sub-title" :style="{color:'#929796'}">
              {{post.subtitle}}
              <span
                class="item-discount"
                :style="{color:'#929796'}"
              >{{post.discount}}</span>
            </span>
            <span class="item-title" :style="{color:'#ededed'}">{{post.title}}</span>
            <span class="item-price" :style="{color:'#ededed'}">{{post.price}}</span>
            <v-btn small outlined @click="gotoItemDetails" color="#ffffff">Buy Now</v-btn>
            <v-btn small @click="gotoStore" color="#ffffff">
              <v-icon color="#000000" size="24px">mdi-store</v-icon>
            </v-btn>
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
      // type: Object
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
      CONSTANTS: CONSTANTS,
      promotion: false,
      post: {
        images: [
          {
            ratio: "1:1",
            src: require("~/static/drake.jpg")
          },
          {
            ratio: "1:1",
            src: require("~/static/drake.jpg")
          }
        ],
        subtitle: "",
        discount: "",
        title: "",
        price: ""
      },
      isFullScreen: false,
      float: false,
      limited: true,
      getKey: {},
      canChange: false, //needed to stop or continue auto change when in !viewport
      op: {
        avatar: "",
        username: "",
        id: 0
      }
    };
  },

  mounted() {
    this.getOp();
    this.getItemDetails();
    if (
      this.CONSTANTS.ecommerce_promoted_post == this.postType ||
      this.postType == this.CONSTANTS.ecommerce_promoted_repost
    ) {
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
    wasCarted(who) {
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
        this.canChange = false;
      } else if (pos.inside) {
        this.canChange = true;
      } else if (pos.bottom) {
        this.canChange = false;
      }
    },

    getItemDetails() {
      this.post.subtitle = "Enjoy Android Life !!!";
      this.post.discount = " -11%";
      this.post.title = "Android Watch DZ019";
      this.post.price = " N6,300";
    },

    gotoItemDetails() {
      if (
        this.CONSTANTS.ecommerce_promoted_post == this.postType ||
        this.postType == this.CONSTANTS.ecommerce_promoted_repost
      ) {
        //if is ads
      }
    },

    gotoStore() {},
    getOp() {
      if (
        this.postType == this.CONSTANTS.ecommerce_repost ||
        this.postType == this.CONSTANTS.ecommerce_promoted_repost
      ) {
        this.op.username = "Frankistien";
        this.op.avatar = require("~/static/drake.jpg");
        this.op.id = 4543;
      }
    },
    gotoOpPost() {}
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
#orignal-post-wrapper {
  width: 100%;
  height: auto;
  padding: 10px;
  text-align: right;
}

#wrapper1 {
  width: 100%;
  height: auto;
  position: relative;
}

#item-details {
  width: 100%;
  height: auto;
  padding: 10px;
  background-color: var(--background-color);
}

.item-sub-title {
  color: var(--subtext-color);
  font-size: 14px;
}
.item-title {
  font-size: 21px;
  display: block;
  width: 100%;
}

.item-price {
  margin: 5px 0px;
  display: block;
  width: 100%;
  font-size: 17px;
  font-weight: bold;
  color: var(--subtext-color);
}

.item-discount {
  font-size: 15px;
  font-weight: bold;
}

#wrapper2 {
  width: 100%;
  height: 100%;
}

#bottom-cover {
  width: 100%;
  max-height: 280;
  position: fixed;
  z-index: 100px;
  bottom: 48px;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.3);
}
</style>