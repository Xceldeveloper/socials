<template>
  <div id="feed" >
    <div id="feed-flow" v-if="isLoggedIn">
      <div v-for="(item,index) in feedFeeds" :key="index">
        <videopost
          v-if="item.TYPE == CONSTANTS.video_post"
          :postId="item.id"
          :position="sendPos"
          :postType="CONSTANTS.video_post"
          :scrolling="scrollState"
          :keyPressed="pressedKey"
        />

        <videopost
          v-if="item.TYPE == CONSTANTS.video_repost"
          :postId="item.id"
          :position="sendPos"
          :postType="CONSTANTS.video_repost"
          :scrolling="scrollState"
          :keyPressed="pressedKey"
        />

        <videopost
          v-if="item.TYPE == CONSTANTS.video_promoted_post"
          :postId="item.id"
          :position="sendPos"
          :postType="CONSTANTS.video_promoted_post"
          :scrolling="scrollState"
          :keyPressed="pressedKey"
        />

        <videopost
          v-if="item.TYPE == CONSTANTS.video_promoted_repost"
          :postId="item.id"
          :position="sendPos"
          :postType="CONSTANTS.video_promoted_repost"
          :scrolling="scrollState"
          :keyPressed="pressedKey"
        />

        <imagepost
          v-else-if="item.TYPE == CONSTANTS.image_post"
          :postId="item.id"
          :position="sendPos"
          :postType="CONSTANTS.image_post"
          :scrolling="scrollState"
          :keyPressed="pressedKey"
        />

        <imagepost
          v-else-if="item.TYPE == CONSTANTS.image_repost"
          :postId="item.id"
          :position="sendPos"
          :postType="CONSTANTS.image_repost"
          :scrolling="scrollState"
          :keyPressed="pressedKey"
        />

        <imagepost
          v-else-if="item.TYPE == CONSTANTS.image_promoted_post"
          :postId="item.id"
          :position="sendPos"
          :postType="CONSTANTS.image_promoted_post"
          :scrolling="scrollState"
          :keyPressed="pressedKey"
        />

        <imagepost
          v-else-if="item.TYPE == CONSTANTS.image_promoted_repost"
          :postId="item.id"
          :position="sendPos"
          :postType="CONSTANTS.image_promoted_repost"
          :scrolling="scrollState"
          :keyPressed="pressedKey"
        />

        <statuspost
          v-else-if="item.TYPE == CONSTANTS.status_post"
          :postId="item.id"
          :position="sendPos"
          :postType="CONSTANTS.status_post"
          :scrolling="scrollState"
          :keyPressed="pressedKey"
        />

        <statuspost
          v-else-if="item.TYPE == CONSTANTS.status_repost"
          :postId="item.id"
          :position="sendPos"
          :postType="CONSTANTS.status_repost"
          :scrolling="scrollState"
          :keyPressed="pressedKey"
        />

        <statuspost
          v-else-if="item.TYPE == CONSTANTS.status_promoted_post"
          :postId="item.id"
          :position="sendPos"
          :postType="CONSTANTS.status_promoted_post"
          :scrolling="scrollState"
          :keyPressed="pressedKey"
        />

        <statuspost
          v-else-if="item.TYPE == CONSTANTS.status_promoted_repost"
          :postId="item.id"
          :position="sendPos"
          :postType="CONSTANTS.status_promoted_repost"
          :scrolling="scrollState"
          :keyPressed="pressedKey"
        />

        <eventpost
          v-else-if="item.TYPE == CONSTANTS.event_post"
          :postId="item.id"
          :position="sendPos"
          :postType="CONSTANTS.event_post"
          :scrolling="scrollState"
          :keyPressed="pressedKey"
        />

        <eventpost
          v-else-if="item.TYPE == CONSTANTS.event_repost"
          :postId="item.id"
          :position="sendPos"
          :postType="CONSTANTS.event_repost"
          :scrolling="scrollState"
          :keyPressed="pressedKey"
        />

        <eventpost
          v-else-if="item.TYPE == CONSTANTS.event_promoted_post"
          :postId="item.id"
          :position="sendPos"
          :postType="CONSTANTS.event_promoted_post"
          :scrolling="scrollState"
          :keyPressed="pressedKey"
        />

        <eventpost
          v-else-if="item.TYPE == CONSTANTS.event_promoted_repost"
          :postId="item.id"
          :position="sendPos"
          :postType="CONSTANTS.event_promoted_repost"
          :scrolling="scrollState"
          :keyPressed="pressedKey"
        />

        <ecommercepost
          v-else-if="item.TYPE == CONSTANTS.ecommerce_post"
          :postId="item.id"
          :position="sendPos"
          :postType="CONSTANTS.ecommerce_post"
          :scrolling="scrollState"
          :keyPressed="pressedKey"
        />

        <ecommercepost
          v-else-if="item.TYPE == CONSTANTS.ecommerce_repost"
          :postId="item.id"
          :position="sendPos"
          :postType="CONSTANTS.ecommerce_repost"
          :scrolling="scrollState"
          :keyPressed="pressedKey"
        />

        <ecommercepost
          v-else-if="item.TYPE == CONSTANTS.ecommerce_promoted_post"
          :postId="item.id"
          :position="sendPos"
          :postType="CONSTANTS.ecommerce_promoted_post"
          :scrolling="scrollState"
          :keyPressed="pressedKey"
        />

        <ecommercepost
          v-else-if="item.TYPE == CONSTANTS.ecommerce_promoted_repost"
          :postId="item.id"
          :position="sendPos"
          :postType="CONSTANTS.ecommerce_promoted_repost"
          :scrolling="scrollState"
          :keyPressed="pressedKey"
        />

        <peoplesuggestions v-else-if="item.TYPE == CONSTANTS.people_suggestions" />

        <channelsuggestions v-else-if="item.TYPE == CONSTANTS.channel_suggestions" />
      </div>

      <!--<lostandfoundpost
           :postId="3000"
           :position="sendPos"
           :postType="CONSTANTS.lostandfound_post"
           :scrolling="scrollState"
           :keyPressed="pressedKey"
      />-->
    </div>

    <div id="feed-infos"></div>


    <div v-if="!isLoggedIn">SIGN IN</div>
  </div>
</template>

<script>
import theme_mixin from "~/mixins/theme_mixin.js";
import device_mixin from "~/mixins/device_mixin.js";
import user_mixin from "~/mixins/user_mixin.js";
import utils_mixin from "~/mixins/utils_mixin.js";

import imagepost from "~/components/activity/imagepost.vue";
import videopost from "~/components/activity/videopost.vue";
import statuspost from "~/components/activity/statuspost.vue";
import eventpost from "~/components/activity/eventpost.vue";
import ecommercepost from "~/components/activity/ecommercepost.vue";

import lostandfoundpost from "~/components/activity/lostandfoundpost.vue";
import { CONSTANTS } from "~/assets/libs/constants.js";

import { feeds } from "~/assets/data/feeds.js";

import peoplesuggestions from "~/components/utils/peoplesuggestions.vue";
import channelsuggestions from "~/components/utils/channelsuggestions.vue";

const moment = require("moment-timezone");

export default {
  mixins: [theme_mixin, device_mixin, user_mixin, utils_mixin],
  components: {
    imagepost,
    videopost,
    statuspost,
    eventpost,
    ecommercepost,
    lostandfoundpost,
    peoplesuggestions,
    channelsuggestions
  },
  head() {
    const title = "feeds";
    return {
      title
    };
  },
  data() {
    return {
      CONSTANTS: CONSTANTS,
      myPosition: "",
      scrolling: false,
      isScrolling: "",
      pressedKey: {},
      resizing: false,
      isResizing: "",
      Feeds: [
        {
          id: 123,
          date: "Thu May 07 2020 15:06:03 GMT+0100",
          TYPE: "ECOMMERCE-PROMOTED-REPOST",
          nm: 2
        },
        {
          id: 123,
          date: "Fri May 08 2020 24:06:03 GMT+0100",
          TYPE: "EVENT-PROMOTED-REPOST"
        },
        {
          id: 123,
          date: "Sat May 09 2020 15:06:03 GMT+0100",
          TYPE: "STATUS-PROMOTED-REPOST",
          nm: 4
        },
        {
          id: 123,
          date: "Sun May 10 2020 15:06:03 GMT+0100",
          TYPE: "IMAGE-PROMOTED-REPOST",
          nm: 1
        },
        {
          id: 123,
          date: "Mon May 11 2020 13:01:03 GMT+0100",
          TYPE: "VIDEO-PROMOTED-REPOST",
          nm: 3
        },
        {
          id: 123,
          date: "Thu May 07 2020 15:06:03 GMT+0100",
          TYPE: "ECOMMERCE-PROMOTED-POST",
          nm: 2
        },
        {
          id: 123,
          date: "Fri May 08 2020 24:06:03 GMT+0100",
          TYPE: "EVENT-PROMOTED-POST"
        },
        {
          id: 123,
          date: "Sat May 09 2020 15:06:03 GMT+0100",
          TYPE: "STATUS-PROMOTED-POST",
          nm: 4
        },
        {
          id: 123,
          date: "Mon May 11 2020 13:01:03 GMT+0100",
          TYPE: "VIDEO-PROMOTED-POST",
          nm: 3
        },
        {
          id: 123,
          date: "Sun May 10 2020 15:06:03 GMT+0100",
          TYPE: "IMAGE-PROMOTED-POST",
          nm: 1
        },
        {
          id: 123,
          date: "Thu May 07 2020 15:06:03 GMT+0100",
          TYPE: "ECOMMERCE-REPOST",
          nm: 2
        },
        {
          id: 123,
          date: "Fri May 08 2020 24:06:03 GMT+0100",
          TYPE: "EVENT-REPOST"
        },
        {
          id: 123,
          date: "Sat May 09 2020 15:06:03 GMT+0100",
          TYPE: "STATUS-REPOST",
          nm: 4
        },
        {
          id: 123,
          date: "Mon May 11 2020 13:01:03 GMT+0100",
          TYPE: "VIDEO-REPOST",
          nm: 3
        },
        {
          id: 123,
          date: "Sun May 10 2020 15:06:03 GMT+0100",
          TYPE: "IMAGE-REPOST",
          nm: 1
        },
        {
          TYPE: "PEOPLE-SUGGESTIONS"
        },
        {
          id: 123,
          date: "Sun May 10 2020 15:06:03 GMT+0100",
          TYPE: "IMAGE-POST",
          nm: 1
        },
        {
          TYPE: "CHANNEL-SUGGESTIONS"
        },
        {
          id: 123,
          date: "Sat May 09 2020 15:06:03 GMT+0100",
          TYPE: "STATUS-POST",
          nm: 4
        },
        {
          id: 123,
          date: "Mon May 11 2020 13:01:03 GMT+0100",
          TYPE: "VIDEO-POST",
          nm: 3
        },
        {
          id: 123,
          date: "Fri May 08 2020 24:06:03 GMT+0100",
          TYPE: "EVENT-POST"
        },
        {
          id: 123,
          date: "Thu May 07 2020 15:06:03 GMT+0100",
          TYPE: "ECOMMERCE-POST",
          nm: 2
        }
      ]
    };
  },

  mounted() {
    //this.$bus.$emit("routing", this.$route.name);
    var container = document.getElementById("feed-flow");
    this.myPosition = this.getParentPosition(container);
    container.addEventListener("scroll", this.handleScroll, false);
    window.addEventListener("keydown", this.handButtonClick, false);
  },

  methods: {
    upload() {
      this.$router.push("/home/upload");
    },
    handleScroll() {
      this.scrolling = true;
      window.clearTimeout(this.isScrolling);
      this.isScrolling = setTimeout(() => {
        this.scrolling = false;
      }, 10);
    },
    handButtonClick(e) {
      console.log(e.key);
      this.pressedKey = {
        time: Date.now(),
        key: e.key,
        code: e.code
      };
    },
    resized() {
      this.resizing = true;
      alert("yy");
      window.clearTimeout(this.isResizing);
      this.isResizing = setTimeout(() => {
        this.resizing = false;
      }, 10);
    }
  },

  computed: {
    feedFeeds() {
      // return this.commenters.sort((a,b)=>{
      //   moment(a.time).format('YYYYMMDD') - moment(b.time).format('YYYYMMDD');

      //     // return this.commenters;
      //  }).reverse();

      var ss = this.Feeds.sort((a, b) => {
        b.nm - a.nm;
      });

      return ss;
    },

    sendPos() {
      return this.myPosition;
    },
    scrollState() {
      return this.scrolling;
    }
  },

  beforeDestroy() {
    var container = document.getElementById("feed-flow");
    container.removeEventListener("scroll", this.handleScroll, false);
    window.removeEventListener("keydown", this.handButtonClick, false);
  }
};
</script>

<style  lang="scss" scoped>
@media screen and (min-width: 767px) {
  #feed {
    width: 100%;
    height: 100%;
    background-color: var(--background-color);
    overflow: auto;
    color: var(--text-color);
    padding-top: 8px;
    display: -moz-box;
    display: flex;
    display: -ms-flexbox;
    display: -webkit-flex;
  }

  #feed-flow {
    width: 60%;
    height: 100%;
    padding-top: 5px; //important to get the view position onmount
    overflow: auto;
  }

  #feed-infos {
    flex: 1;
    height: 100%;
    overflow: auto;
  }

  img {
    width: 70%;
    margin: auto;
    height: auto;
    display: block;
    margin-top: 10px;
  }
}

@media screen and (min-width: 320px) and (max-width: 767px) {
  #feed {
    width: 100%;
    height: 100%;
    background-color: var(--background-color);
    overflow: auto;
    color: var(--text-color);
    margin: auto;
    padding-top: 8px;
  }

  #feed-flow {
    width: 100%;
    height: 100%;
    padding-top: 5px; //important to get the view position onmount
    overflow: auto;
  }

  #feed-infos {
    display: none;
  }
}

//for iphone X and others needs to come last or it would confilct with laptop screen
@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) {
  #feed {
    width: 100%;
    height: 100%;
    background-color: var(--background-color);
    overflow: auto;
    color: var(--text-color);
    margin: auto;
    padding-top: 8px;
  }

  #feed-flow {
    width: 100%;
    height: 100%;
    padding-top: 5px; //important to get the view position onmount
    overflow: auto;
  }

  #feed-infos {
    display: none;
  }
}
</style>

