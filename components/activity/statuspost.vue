<template>
  <div id="status-post">
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
        <div id="orignal-post-wrapper" v-if="postType == CONSTANTS.status_repost || postType == CONSTANTS.status_promoted_repost">
          <v-icon :color="Colors.text">mdi-share</v-icon>
          <v-chip :text-color="Colors.text" :color="Colors.background" @click="gotoOpPost">
            <v-avatar left :color="Colors.background">
              <img :src="op.avatar" />
            </v-avatar>
            {{op.username}}
          </v-chip>
        </div>
        <div id="Status" v-html="Status" :class="style" @click="limited = !limited"></div>
          <div id="promotion-btn-wrapper" v-if="CONSTANTS.status_promoted_post == postType || postType == CONSTANTS.status_promoted_repost">
        <v-btn :color="Colors.text"  outlined @click="handlePromotion" >{{action_btn}}</v-btn>
        </div>
       
      </template>
    </baseview>
  </div>
</template>

<script>
import baseview from "~/components/activity/baseview.vue";
import theme_mixin from "~/mixins/theme_mixin.js";
import device_mixin from "~/mixins/device_mixin.js";
import user_mixin from "~/mixins/user_mixin.js";
import utils_mixin from "~/mixins/utils_mixin.js";

import { CONSTANTS } from "~/assets/libs/constants.js";
export default {
  mixins: [theme_mixin, device_mixin, user_mixin, utils_mixin],
  components: {
    baseview
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
      CONSTANTS: CONSTANTS,
      promotion:false,
      isFullScreen: false,
      float: false,
      limited: true,
      getKey: {},
      style: "dark",
      statusText: `God's Plan \n Hello folks he\n no nr \n note that <b>ovmobile inc</b> is comming
          soon we need to be \n be prepared be cause it's going o be a \n<b>A \nworld \nin \na \nnew \nLight</b>`,
      op: {
        avatar: "",
        username: "",
        id: 0
      },
      action_btn:"EMAIL"
    };
  },

  mounted() {
    this.getOp();
     if(this.CONSTANTS.status_promoted_post == this.postType || this.postType == this.CONSTANTS.status_promoted_repost){
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
    getOp() {
      if (this.postType == this.CONSTANTS.status_repost || this.postType == this.CONSTANTS.status_promoted_repost) {
        this.op.username = "Galvin";
        this.op.avatar = require("~/static/drake.jpg");
        this.op.id = 4543;
      }
    },
    gotoOpPost() {},

    handlePromotion(){
      
    }
  },
  computed: {
    Status() {
      var text = "";
      // var mm = this.captionText;
      text = this.formatText(this.statusText);
      if (this.wordCount(this.statusText).characters > 200 && this.limited) {
        text = text.substring(0, 200) + " <br>...read more";
        this.showLessBtn = false;
        this.showMoreBtn = true;
      } else {
        this.showMoreBtn = false;
      }

      return text;
    }
  }
};
</script>

<style lang="scss" scoped>
#Status {
  width: 100%;
  height: auto;

  font-size: 18px;
  padding: 20px;
  min-height: 50px;
  max-height: 70vh;
  overflow: auto;
  -webkit-user-select: none; /* Chrome all / Safari all */
  -moz-user-select: none; /* Firefox all */
  -ms-user-select: none; /* IE 10+ */
  -o-user-select: none;
  user-select: none;
}

#promotion-btn-wrapper{
  width: 100%;
  padding: 5px 10px;
}

#orignal-post-wrapper {
  width: 100%;
  height: auto;
  padding: 10px;
  text-align: right;
}

.dark {
  color: #ffffff;
  background-color: #000000;
  text-align: center;
}

.redix {
  color: #ffffff;
  background-color: red;
  text-align: center;
}

@media screen and (min-width: 767px) {
  #Status::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: var(--background-color);
    border-radius: 10px;
  }

  #Status::-webkit-scrollbar {
    width: 7px;
    background-color: var(--background-color);
  }

  #Status::-webkit-scrollbar-thumb {
    background-color: var(--texture-color);
    border: 1px solid var(--subtext-color);
    border-radius: 10px;
  }
}
</style>