<template>
  <div id="event-post" ref="imagepost">
    <baseview
      :showFullScreen="isFullScreen"
      @exitFullScreen="isFullScreen = false"
      @liked="wasLiked"
      @commented="wasCommentedOn"
      @reposted="wasReposted"
      @reported="wasReported"
      @deleted="wasDeleted"
      @viewPos="handView"
      @reminded="wasReminder"
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
          v-if="postType == CONSTANTS.event_repost || postType == CONSTANTS.event_promoted_repost"
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
          <v-btn :color="Colors.textTure" absolute bottom right fab @click="gotoEvents">
            <v-icon :color="Colors.text" size="36px">mdi-calendar</v-icon>
          </v-btn>

          <div id="recbtn">
            <div id="location-btn" v-if="post.location != ''">
              <v-icon color="#ededed">mdi-map-marker-radius</v-icon>
            </div>
            <div id="recognized-person">
              <v-icon color="#ededed">mdi-account</v-icon>
            </div>
          </div>
          <dynamicgrid
            @click="isFullScreen = true"
            :pattern="filterPattern"
            :images="setDynamicImage"
            :imagesCount="post.images.length"
          />
        </div>
        <div id="event-details">
          <span class="event-title">{{post.eventTitle}}</span>
          <span class="event-location">
            <v-icon :color="Colors.subTextColor">mdi-map-marker-radius-outline</v-icon>
            {{post.eventlocation}}
          </span>
          <span class="event-countdown" @click="countDownTime = !countDownTime">
            <v-icon :color="Colors.text">mdi-clock-outline</v-icon>
            {{getCountDown}}
          </span>
          <v-btn
            outlined
            v-if="post.feedback"
            @click="gotoEventDetails"
            :color="Colors.text"
            :dark="isDarkTheme ? false : true"
          >Interested ?</v-btn>
        </div>
        <div id="caption" v-html="caption" @click="limited = !limited"></div>
      </template>
      <template v-slot:max>
        <div id="wrapper2">
          <imageviewpager
            :images="post.images"
            :leaving="isFullScreen"
            @clicked="float = !float"
            :keyPressed="getKey"
          />
          <div id="bottom-cover" v-if="float">
            <span class="event-title" :style="{color:'#ffffff'}">{{post.eventTitle}}</span>
            <span class="event-location" :style="{color:'#ededed'}">
              <v-icon color="#ededed">mdi-map-marker-radius-outline</v-icon>
              {{post.eventlocation}}
            </span>
            <span
              :style="{color:'#ffffff'}"
              class="event-countdown"
              @click="countDownTime = !countDownTime"
            >
              <v-icon color="#ffffff">mdi-clock-outline</v-icon>
              {{getCountDown}}
            </span>
            <v-btn
              v-if="post.feedback"
              @click="gotoEventDetails"
              outlined
              small
              color="#ffffff"
              :dark="false"
            >Interested ?</v-btn>
            <v-btn small @click="gotoEvents" color="#ffffff">
              <v-icon color="#000000" size="24px">mdi-calendar</v-icon>
            </v-btn>
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
const moment = require("moment-timezone");

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
        images: [],
        caption: "",
        eventTime: "",
        eventTitle: "",
        eventlocation: "",
        location: "",
        feedback: false
      },
      isFullScreen: false,
      float: false,
      limited: true,
      getKey: {},
      now: new Date().getTime(),
      myInterval: null,
      countDownTime: false,
      op: {
        avatar: "",
        username: "",
        id: 0
      }
    };
  },

  mounted() {
    this.getEventDetails();
    this.getOp();
    if (
      this.CONSTANTS.event_promoted_post == this.postType ||
      this.postType == this.CONSTANTS.event_promoted_repost
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
    wasReminder(who) {
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
        clearTimeout(this.myInterval);
      } else if (pos.inside) {
        if (this.countDownTime) {
          this.myInterval = setInterval(() => {
            this.now = new Date().getTime();
          }, 1000);
        }
      } else if (pos.bottom) {
        clearTimeout(this.myInterval);
      }
    },

    getEventDetails() {
      this.post.caption = `God's Plan \n Hello folks he no nr note that <b>ovmobile inc</b> is comming
          soon we need to be  be prepared be cause it's going o be a <b>A \nworld \nin a \nnew \nLight</b>`;
      this.post.eventTime = "Jan 1 2021 00:00:00 GMT+0100";
      this.post.eventTitle = "Covid 19 Virtual Conference";
      this.post.eventlocation = "Slack channel covi19#212";
      this.post.location = "slack.com";
      this.post.feedback = true;
      this.post.images = [
        {
          ratio: "16:9",
          src: require("~/static/covid.jpg")
        },
        {
          ratio: "1:1",
          src: require("~/static/drake.jpg")
        }
      ];
    },

    gotoEventDetails() {
      if (
        this.CONSTANTS.event_promoted_post == this.postType ||
        this.postType == this.CONSTANTS.event_promoted_repost
      ) {
        //if is ads
      }
    },

    gotoEvents() {},
    getOp() {
      if (
        this.postType == this.CONSTANTS.event_repost ||
        this.postType == this.CONSTANTS.event_promoted_repost
      ) {
        this.op.username = "Hendrix";
        this.op.avatar = require("~/static/drake.jpg");
        this.op.id = 4543;
      }
    },
    gotoOpPost() {}
  },
  computed: {
    caption() {
      var text = "";
      // var mm = this.captionText;
      text = this.formatText(this.post.caption);
      if (this.wordCount(this.post.caption).characters > 100 && this.limited) {
        text = text.substring(0, 100) + "...read more";
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
    },

    getCountDown() {
      var date = this.post.eventTime;
      var timezone = moment.tz.guess(),
        convertedTime = moment(date).tz(timezone),
        eventTime = moment(convertedTime).unix(),
        currentTime = moment(this.now).unix(),
        diffTime = eventTime - currentTime,
        duration = moment.duration(diffTime * 1000, "milliseconds"),
        interval = 1000;

      // if time to countdown
      if (diffTime > 0) {
        duration = moment.duration(
          duration.asMilliseconds() - interval,
          "milliseconds"
        );
        var d = moment.duration(duration).days(),
          h = moment.duration(duration).hours(),
          m = moment.duration(duration).minutes(),
          s = moment.duration(duration).seconds(),
          mm = moment.duration(duration).months();

        if (!this.isMobile) {
          mm = mm > 0 ? (mm > 1 ? mm + " Months : " : mm + " Month : ") : "";
          d = d > 0 ? (d > 1 ? d + " Days : " : d + " Day : ") : "";
          h = h > 0 ? (h > 1 ? h + " Hours : " : h + " Hour : ") : "";
          m = m > 0 ? (m > 1 ? m + " Minutes : " : m + " Minute : ") : "";
          s = s > 0 ? (s > 1 ? s + " Seconds  " : s + " Second ") : "";
        } else {
          mm = mm > 0 ? (mm > 1 ? mm + " Mnts : " : mm + " Mnt :") : "";
          d = d > 0 ? (d > 1 ? d + " Days : " : d + " Day : ") : "";
          h = h > 0 ? (h > 1 ? h + " Hrs : " : h + " Hr : ") : "";
          m = m > 0 ? (m > 1 ? m + " Mins : " : m + " Min : ") : "";
          s = s > 0 ? (s > 1 ? s + " Secs " : s + " Sec") : "";
        }

        if (this.countDownTime) {
          return mm + d + h + m + s;
        } else {
          return moment(convertedTime).calendar(null, {
            sameElse: "dddd, MMMM D, YYYY h:mm A"
          });
        }
      } else {
        return "Has Already or Still Taking Place";
      }
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
    },
    countDownTime(val) {
      if (val) {
        clearInterval(this.myInterval);
        this.myInterval = setInterval(() => {
          this.now = new Date().getTime();
        }, 1000);
      } else {
        clearInterval(this.myInterval);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#event-post {
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

#event-details {
  width: 100%;
  height: auto;
  padding: 10px;
  background-color: var(--background-color);
}

.event-title {
  font-size: 18px;
  font-weight: bold;
  display: block;
  width: 100%;
}

.event-location {
  margin-top: 4px;
  display: block;
  width: 100%;
  font-size: 16px;
  color: var(--subtext-color);
}

.event-countdown {
  width: 100%;
  margin-top: 4px;
  display: block;
  height: auto;
  display: block;
  font-weight: bold;
  font-size: 14px;
  color: var(--text-color);
  margin-bottom: 5px;
  cursor: pointer;
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
  max-height: 75vh;
  position: fixed;
  z-index: 100px;
  bottom: 48px;
  padding: 10px;
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
  display: none;
}

#wrapper2 {
  width: 100%;
  height: 100%;
}
</style>