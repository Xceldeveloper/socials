<template>
  <div id="video-post">
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
        <div id="orignal-post-wrapper" v-if="postType == CONSTANTS.video_repost || postType == CONSTANTS.video_promoted_repost">
          <v-icon :color="Colors.text">mdi-share</v-icon>
          <v-chip :text-color="Colors.text" :color="Colors.background" @click="gotoOpPost">
            <v-avatar left :color="Colors.background">
              <img :src="op.avatar" />
            </v-avatar>
            {{op.username}}
          </v-chip>
        </div>
        <div id="wrapper1">
          <div class="fullscreen" @click="isFullScreen = true" v-if="!hideBtns">
            <v-btn color="#ffffff" icon>
              <v-icon size="27px" color="#ffffff">mdi-fullscreen</v-icon>
            </v-btn>
          </div>

          <div class="muted" @click="isFullScreen = true" v-if="muted">
            <v-btn color="#ffffff" icon>
              <v-icon size="27px" color="#ffffff">mdi-volume-mute</v-icon>
            </v-btn>
          </div>

          <div class="play-btn" @click="playPause" v-if="!hideBtns">
            <v-btn color="#ffffff" height="90px" width="90px" icon>
              <v-icon
                size="80px"
                color="#ffffff"
              >{{isPaused ? 'mdi-play-circle-outline' : 'mdi-pause-circle-outline'}}</v-icon>
            </v-btn>
          </div>

          <div class="duration1" v-if="!hideBtns  && duration !== 'NaN'" ref="duration1">
            <v-progress-circular
              :rotate="90"
              :size="progressSize"
              :width="5"
              :value="durationPercentage"
              color="#ffffff"
              v-if="duration !== '--:--' "
            >{{ duration }}</v-progress-circular>
          </div>
          <video
            oncontextmenu="return false;"
            :poster="post.thumbnail"
            id="small-video"
            :src="post.video"
            ref="smallPlayer"
            @click=" toggleBtns"
            :controls="false"
          ></video>
        </div>
         <div id="promotion-btn-wrapper" v-if="CONSTANTS.video_promoted_post == postType || postType == CONSTANTS.video_promoted_repost">
        <v-btn :color="Colors.text"  outlined @click="handlePromotion" >{{action_btn}}</v-btn>
        </div>
        <div id="caption" v-html="caption" @click="limited = !limited"></div>
      </template>
      <template v-slot:max>
        <div id="wrapper2">
          <div class="play-btn" @click="playPause" v-if="!hideBtns">
            <v-btn color="#ffffff" height="110px" width="110px" icon>
              <v-icon
                size="100px"
                color="#ffffff"
              >{{isPaused ? 'mdi-play-circle-outline' : 'mdi-pause-circle-outline'}}</v-icon>
            </v-btn>
          </div>

          <div class="duration2" v-if="!hideBtns && duration !== 'NaN'" ref="duration2">
            <v-progress-circular
              :rotate="90"
              :size="progressSize"
              :width="5"
              :value="durationPercentage"
              color="#ffffff"
              v-if="duration !== '--' "
              :controls="false"
            >{{ duration }}</v-progress-circular>
          </div>
          <video
            oncontextmenu="return false;"
            :poster="post.thumbnail"
            id="big-video"
            :src="post.video"
            ref="bigPlayer"
            @click="hideBtns = !hideBtns"
          ></video>
          <div id="bottom-cover" v-if="float">
              <div id="promotion-btn-wrapper" v-if="CONSTANTS.video_promoted_post == postType || postType == CONSTANTS.video_promoted_repost">
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
      post: {
        video: require("static/shaggy.mp4"),
        thumbnail: require("~/static/covid.jpg"),
        caption: `God's Plan \n Hello folks he\n no nr \n note that <b>ovmobile inc</b> is comming
          soon we need to be \n be prepared be cause it's going o be a \n<b>A \nworld \nin \na \nnew \nLight</b>`,
        multiple: false,
        identified: []
      },
      isFullScreen: false,
      float: true,
      limited: true,
      getKey: {},
      durationPercentage: 0,
      smallVideoPlayer: null,
      bigVideoPlayer: null,
      hideBtns: false,
      duration: "--:--",
      isPaused: true,
      currentPostion: 0,
      wasPlaying: false,
      videoPlayerToken: 0,
      enteredView: false,
      hasBeenPlayed: false,
      muted: false,
      autoPlaying: false,
      smallDurationCover: null,
      bigDurationCover: null,
      progressSize: 45,
      op: {
        avatar: "",
        username: "",
        id: 0
      },
      action_btn:"LEARN MORE"
    };
  },
  mounted() {
    this.getOp();
      if(this.CONSTANTS.video_promoted_post == this.postType || this.postType == this.CONSTANTS.video_promoted_repost){
      this.promotion = true;
    }
    this.$nextTick(() => {
      this.smallVideoPlayer = this.$refs.smallPlayer;
      this.smallVideoPlayer.addEventListener(
        "timeupdate",
        this.initSmallPlayer,
        false
      );
      this.smallVideoPlayer.addEventListener(
        "ended",
        this.smallPlayerEnd,
        false
      );
    });

    this.$bus.$on("playing-new-video", token => {
      if (token !== this.videoPlayerToken) {
        if (this.wasPlaying) {
          this.playPause();
          setTimeout(() => {
            this.hideBtns = false;
          }, 600);
        }
      }
    });
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
        if (this.wasPlaying) {
          this.playPause();
          setTimeout(() => {
            this.hideBtns = false;
          }, 600);
        }
      } else if (pos.inside) {
        this.enteredView = true;
      } else if (pos.bottom) {
        if (this.wasPlaying) {
          this.playPause();
          setTimeout(() => {
            this.hideBtns = false;
          }, 600);
        }
      }
    },

    getVideoDetails() {},

    getOp() {
      if (this.postType == this.CONSTANTS.video_repost || this.postType == this.CONSTANTS.video_promoted_repost) {
        this.op.username = "Piep piper";
        this.op.avatar = require("~/static/drake.jpg");
        this.op.id = 4543;
      }
    },

    gotoOpPost() {},

    handlePromotion(){

    },

    readMore() {
      this.limited = false;
      this.showLessBtn = true;
    },
    readLess() {
      this.limited = true;
    },

    playPause() {
      this.hasBeenPlayed = true;
      this.muted = false;

      if (!this.isFullScreen) {
        if (this.smallVideoPlayer.paused) {
          this.videoPlayerToken = Date.now();

          this.$bus.$emit("playing-new-video", this.videoPlayerToken);

          this.smallVideoPlayer.currentTime = this.currentPostion;
          this.smallVideoPlayer.play();
          this.isPaused = false;
          this.wasPlaying = true;
          setTimeout(() => {
            this.hideBtns = true;
          }, 1500);
        } else {
          this.smallVideoPlayer.pause();
          this.isPaused = true;
          this.wasPlaying = false;
        }
      } else {
        if (this.bigVideoPlayer.paused) {
          this.videoPlayerToken = Date.now();

          this.$bus.$emit("playing-new-video", this.videoPlayerToken);

          this.bigVideoPlayer.currentTime = this.currentPostion;
          this.bigVideoPlayer.play();
          this.isPaused = false;
          this.wasPlaying = true;
          setTimeout(() => {
            this.hideBtns = true;
          }, 1500);
        } else {
          this.bigVideoPlayer.pause();
          this.isPaused = true;
          this.wasPlaying = false;
        }
      }
    },

    autoPlay() {
      this.hideBtns = true;
      this.muted = true;

      if (!this.isFullScreen) {
        this.smallVideoPlayer.muted = true;
        if (this.smallVideoPlayer.paused) {
          this.videoPlayerToken = Date.now();

          this.$bus.$emit("playing-new-video", this.videoPlayerToken);

          this.smallVideoPlayer.currentTime = this.currentPostion;
          this.smallVideoPlayer.play();
          this.isPaused = false;
          this.wasPlaying = true;
        }
      } else {
        if (this.bigVideoPlayer.paused) {
          this.bigVideoPlayer.muted = true;
          this.videoPlayerToken = Date.now();

          this.$bus.$emit("playing-new-video", this.videoPlayerToken);

          this.bigVideoPlayer.currentTime = this.currentPostion;
          this.bigVideoPlayer.play();
          this.isPaused = false;
          this.wasPlaying = true;
        }
      }
    },

    toggleBtns() {
      if (!this.autoPlaying) {
        this.hideBtns = !this.hideBtns;
        if (this.smallDurationCover == null && this.hideBtns == false) {
          this.$nextTick(() => {
            this.smallDurationCover = this.$refs.duration1;

            this.smallDurationCover.addEventListener(
              "mousedown",
              this.startDurationControl,
              false
            );
            this.smallDurationCover.addEventListener(
              "mouseup",
              this.stopDurationControl,
              false
            );

            this.smallDurationCover.addEventListener(
              "touchstart",
              this.startDurationControl,
              false
            );
            this.smallDurationCover.addEventListener(
              "touchend",
              this.stopDurationControl,
              false
            );
          });
        }
      } else {
        if (!this.isFullScreen) {
          this.smallVideoPlayer.muted = false;
          this.muted = false;
          this.autoPlaying = false;
        } else {
          this.bigVideoPlayer.muted = true;
          this.muted = false;
          this.autoPlaying = false;
        }
      }
    },

    startDurationControl() {
      if (!this.isFullScreen) {
        this.smallVideoPlayer.currentTime -= 10;
      } else {
        this.bigVideoPlayer.currentTime -= 10;
      }
      this.progressSize = 60;
    },

    stopDurationControl() {
      //   var durr = document.getElementsByClassName("duration");
      // durr.style.border = "none";
      this.progressSize = 45;
    },

    convertTime(currTime, totalTime) {
      var seconds = totalTime - currTime;
      var min = Math.floor(seconds / 60);
      var sec = seconds % 60;
      min = min < 10 ? "0" + min : min;
      sec = sec < 10 ? "0" + sec : sec;
      var curr = (min = !"0:0" ? min + ":" : "" + sec);
      return curr;
    },

    initSmallPlayer() {
      var pos =
        this.smallVideoPlayer.currentTime / this.smallVideoPlayer.duration;
      this.durationPercentage = pos * 100;
      this.currentPostion = this.smallVideoPlayer.currentTime;
      // seekbar.css({ "width": pos * 100 + '%' });
      this.duration = this.convertTime(
        Math.round(this.smallVideoPlayer.currentTime),
        Math.round(this.smallVideoPlayer.duration)
      );
    },

    smallPlayerEnd() {
      this.hideBtns = false;
      this.smallVideoPlayer.currentTime = 0;
      this.durationPercentage = 0;
      this.isPaused = true;
      this.duration = 0;
      this.currentPostion = 0;
    },
    initBigPlayer() {
      var pos = this.bigVideoPlayer.currentTime / this.bigVideoPlayer.duration;
      this.durationPercentage = pos * 100;
      this.currentPostion = this.bigVideoPlayer.currentTime;
      // seekbar.css({ "width": pos * 100 + '%' });
      this.duration = this.convertTime(
        Math.round(this.bigVideoPlayer.currentTime),
        Math.round(this.bigVideoPlayer.duration)
      );
    },
    bigPlayerEnd() {
      this.hideBtns = false;
      this.bigVideoPlayer.currentTime = 0;
      this.durationPercentage = 0;
      this.isPaused = true;
      this.duration = 0;
      this.currentPostion = 0;
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
    }
  },
  watch: {
    enteredView(val) {
      if (val) {
        if (!this.hasBeenPlayed) {
          this.autoPlaying = true;
          this.autoPlay();
        }
      }
    },
    isFullScreen() {
      if (this.isFullScreen) {
        this.hideBtns = true; //because big duratn btn

        this.requestFullScreen();
        this.smallVideoPlayer.pause();
        if (this.bigVideoPlayer == null) {
          this.$nextTick(() => {
            this.bigVideoPlayer = this.$refs.bigPlayer;
            this.bigVideoPlayer.currentTime = this.currentPostion;
            if (this.wasPlaying) {
              this.bigVideoPlayer.play();
            }
            this.bigVideoPlayer.addEventListener(
              "timeupdate",
              this.initBigPlayer,
              false
            );
            this.bigVideoPlayer.addEventListener(
              "ended",
              this.bigPlayerEnd,
              false
            );
          });
        } else {
          this.bigVideoPlayer.currentTime = this.currentPostion;
          if (this.wasPlaying) {
            this.bigVideoPlayer.play();
          }
        }
      } else {
        this.cancelFullScreen();
        this.bigVideoPlayer.pause();
        this.smallVideoPlayer.currentTime = this.currentPostion;
        if (this.wasPlaying) {
          this.smallVideoPlayer.play();
        }
      }
    },
    keyPressed() {
      if (this.isFullScreen) {
        // alert(this.keyPressed.code);
        this.getKey = this.keyPressed;
        if (this.keyPressed.key == "ArrowRight")
          this.bigVideoPlayer.currentTime += 10;
        else if (this.keyPressed.key == "ArrowLeft")
          this.bigVideoPlayer.currentTime -= 10;
        else if (this.keyPressed.code == "Space") this.playPause();
      }
    },
    hideBtns(val, oldVal) {
      //  this.float = oldVal;
      if (this.hideBtns) {
        this.float = false;
        if (this.smallDurationCover !== null) {
          this.smallDurationCover.removeEventListener(
            "mousedown",
            this.startDurationControl,
            false
          );
          this.smallDurationCover.removeEventListener(
            "mouseup",
            this.stopDurationControl,
            false
          );
          this.smallDurationCover.removeEventListener(
            "touchstart",
            this.startDurationControl,
            false
          );
          this.smallDurationCover.removeEventListener(
            "touchend",
            this.stopDurationControl,
            false
          );
        }
        if (this.bigDurationCover !== null) {
          this.bigDurationCover.removeEventListener(
            "mousedown",
            this.startDurationControl,
            false
          );
          this.bigDurationCover.removeEventListener(
            "mouseup",
            this.stopDurationControl,
            false
          );
          this.bigDurationCover.removeEventListener(
            "touchstart",
            this.startDurationControl,
            false
          );
          this.bigDurationCover.removeEventListener(
            "touchend",
            this.stopDurationControl,
            false
          );
        }

        this.smallDurationCover = null;
        this.bigDurationCover = null;
      } else {
        this.float = true;
        this.$nextTick(() => {
          if (
            this.bigVideoPlayer !== null &&
            this.hideBtns == false &&
            this.bigDurationCover == null
          ) {
            this.bigDurationCover = this.$refs.duration2;
            this.bigDurationCover.addEventListener(
              "mousedown",
              this.startDurationControl,
              false
            );
            this.bigDurationCover.addEventListener(
              "mouseup",
              this.stopDurationControl,
              false
            );

            this.bigDurationCover.addEventListener(
              "touchstart",
              this.startDurationControl,
              false
            );
            this.bigDurationCover.addEventListener(
              "touchend",
              this.stopDurationControl,
              false
            );
          }
        });
      }
    }
  },
  beforeDestroy() {
    this.smallVideoPlayer.removeEventListener(
      "timeupdate",
      this.initSmallPlayer,
      false
    );
    if (this.bigVideoPlayer !== null)
      this.bigVideoPlayer.removeEventListener(
        "timeupdate",
        this.initBigPlayer,
        false
      );

    if (this.smallDurationCover !== null) {
      this.smallDurationCover.removeEventListener(
        "mousedown",
        this.startDurationControl,
        false
      );
      this.smallDurationCover.removeEventListener(
        "mouseup",
        this.stopDurationControl,
        false
      );
      this.smallDurationCover.removeEventListener(
        "touchstart",
        this.startDurationControl,
        false
      );
      this.smallDurationCover.removeEventListener(
        "touchend",
        this.stopDurationControl,
        false
      );
    }

    if (this.bigDurationCover !== null) {
      this.bigDurationCover.removeEventListener(
        "mousedown",
        this.startDurationControl,
        false
      );
      this.bigDurationCover.removeEventListener(
        "mouseup",
        this.stopDurationControl,
        false
      );
      this.bigDurationCover.removeEventListener(
        "touchstart",
        this.startDurationControl,
        false
      );
      this.bigDurationCover.removeEventListener(
        "touchend",
        this.stopDurationControl,
        false
      );
    }
  }
};
</script>

<style lang="scss" scoped>
#video-post {
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
}

#caption2 {
  width: 100%;
  height: auto;
  min-height: 1px;
  max-height: 95px;
  color: #ffffff;
  padding: 8px 50px;
  font-family: sans-serif;
  text-align: center;
  overflow: auto;
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

.fullscreen {
  position: absolute;
  height: auto;
  width: auto;
  top: 10px;
  left: 10px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 2;
}

.muted {
  position: absolute;
  height: auto;
  width: auto;
  bottom: 15px;
  left: 15px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.3);
}

.play-btn {
  position: absolute;
  height: auto;
  width: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.3);
  padding: 0px;
  border-radius: 50%;
  z-index: 2;
}

.duration1 {
  position: absolute;
  height: auto;
  width: auto;
  bottom: 10px;
  right: 10px;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 5px;
  border-radius: 50%;
  z-index: 2;
  transition: linear 100ms ease-in;
  -webkit-user-select: none; /* Chrome all / Safari all */
  -moz-user-select: none; /* Firefox all */
  -ms-user-select: none; /* IE 10+ */
  -o-user-select: none;
  user-select: none;
}

.duration2 {
  position: absolute;
  height: auto;
  width: auto;
  top: 50%;
  left: 1%;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 5px;
  border-radius: 50%;
  z-index: 2;
  transition: linear 100ms ease-in;
  -webkit-user-select: none; /* Chrome all / Safari all */
  -moz-user-select: none; /* Firefox all */
  -ms-user-select: none; /* IE 10+ */
  -o-user-select: none;
  user-select: none;
}

#wrapper2 {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

#small-video {
  width: 100%;
  height: auto;
  margin: 0px;
  padding: 0px;
  z-index: 1;
}

#big-video {
  max-width: 100%;
  height: 100%;
  display: block;
  margin: auto;
  z-index: 1;
}
</style>