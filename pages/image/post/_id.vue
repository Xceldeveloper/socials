<template>
  <div id="imagepost" v-cloak>
    <style>
       :root{
      --accent-color:{{Colors.accent}};
      --text-color:{{Colors.text}};
       --subtext-color:{{Colors.subTextColor}};
      --inverttext-color:{{Colors.invertTextColor}};
      --background-color:{{Colors.background}};
      --texture-color:{{Colors.textTure}};
       --shadow-color:{{Colors.shadowColor}};
  }
    </style>
    <v-app-bar :color="Colors.background" :dark="isDarkTheme ? true : false">
      <v-btn icon height="50px">
        <v-icon size="28px" :color="Colors.text">mdi-chevron-left</v-icon>
      </v-btn>
      <popupavatar :userId="userId" />
      <div id="details-cover">
        <div id="username">{{userId == getUser.id ? 'You' : username }}</div>
        <div id="time">
          <span>{{setPostTime(moment,time)}}</span>
        </div>
      </div>
      <v-spacer></v-spacer>
      <v-btn
        icon
        :color="Colors.text"
        height="50px"
        v-if="!isFollowing && userId !== getUser.id"
        @click="followBottomSheet = true"
      >
        <v-icon :size="isMobile ? '25px' : '28px'">mdi-account-plus-outline</v-icon>
      </v-btn>
      <v-btn icon to="/home" height="50px" v-if="!isMobile">
        <v-icon :size="isMobile ? '25px' : '28px'" :color="Colors.text">mdi-home-outline</v-icon>
      </v-btn>
      <v-menu open-on-hover :close-on-click="false" :close-on-content-click="false" offset-x>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on" :color="Colors.background" height="50px">
            <v-icon :size="isMobile ? '25px' : '28px'" :color="Colors.text">mdi-dots-horizontal</v-icon>
          </v-btn>
        </template>

        <v-card :color="Colors.background" width="100%">
          <v-list-item link @click="gotoProfile">
            <v-list-item-title :style="{color:Colors.subTextColor}">
              View
              <b>{{userId == getUser.id ? 'Your' : username+"'s" }}</b> profile
            </v-list-item-title>
          </v-list-item>
          <v-list-item link @click="copyPostUrl">
            <v-list-item-title :style="{color:Colors.subTextColor}">Copy Post link url</v-list-item-title>
          </v-list-item>
          <v-list-item link v-if="userId !== getUser.id" @click="toggleNotification">
            <v-list-item-title :style="{color:Colors.subTextColor}">
              <span v-if="notificationDisabled">
                Notify me when
                <b>{{username}}</b> adds a post
              </span>
              <span v-if="!notificationDisabled">
                Stop Notifying
                when
                <b>{{username}}</b> adds a post
              </span>
            </v-list-item-title>
          </v-list-item>
          <v-list-item link v-if="userId !== getUser.id" @click="ReportPost">
            <v-list-item-title :style="{color:Colors.subTextColor}">Report Post</v-list-item-title>
          </v-list-item>
          <v-list-item link @click="stopSeeingOpPost" v-if="userId !== getUser.id">
            <v-list-item-title :style="{color:Colors.subTextColor}">
              Stop seeing
              <b>{{username+"'s"}}</b> posts
            </v-list-item-title>
          </v-list-item>
          <v-list-item link @click="deletePost" v-if="userId === getUser.id">
            <v-list-item-title :style="{color:Colors.subTextColor}">
              <b>Delete</b> this post
            </v-list-item-title>
          </v-list-item>
          <v-list-item link @click="changeAudience" v-if="userId === getUser.id">
            <v-list-item-title :style="{color:Colors.subTextColor}">Change Audience View</v-list-item-title>
          </v-list-item>
        </v-card>
      </v-menu>
    </v-app-bar>
    <v-bottom-sheet inset v-model="followBottomSheet" max-width="400px">
      <div id="follow-wrapper">
        <span>
          Confirm Following
          <b>{{username}}</b>
        </span>
        <v-btn outlined :dark="isDarkTheme" @click="follow" block>YES</v-btn>
        <v-btn block :dark="isDarkTheme" @click="followBottomSheet = false">NO</v-btn>
      </div>
    </v-bottom-sheet>

    <div id="post-content-wrapper">
      <div id="post-content">
        <div id="image-cover" ref="imgcover">
          <div id="recbtn">
            <v-btn fab color="#000" small>
              <v-icon color="#ededed">mdi-map-marker-radius</v-icon>
            </v-btn>
            <v-btn fab color="#000" small>
              <v-icon color="#ededed">mdi-account</v-icon>
            </v-btn>
          </div>
          <v-hover v-slot:default="{ hover }" close-delay="800">
            <imageviewpager
              @clicked="showFullScreen = true"
              :images="images"
              :style="!isMobile ? {borderRadius:'10px 0px 0px 10px'} : ''"
              :onHover="hover"
              :hideDelimiters="isMobile ? false : hover ? false : true"
              :restart="true"
              :interval="4000"
              :isAuto="true"
            />
          </v-hover>
        </div>
        <div id="post-details">
          <div id="analytics">
            <v-chip
              :text-color="Colors.text"
              :color="Colors.subTextColor"
              @click="commentsDialog = true"
              outlined
              v-if="disabled.comments"
            >
              <v-avatar left :color="Colors.background">
                <v-icon :color="Colors.text" size="15px">mdi-comment</v-icon>
              </v-avatar>
              {{formatNumber(numOfComments)}}
            </v-chip>

            <v-chip
              :text-color="Colors.text"
              :color="Colors.subTextColor"
              outlined
              v-if="disabled.likes"
              @click="likesDialog = true"
            >
              <v-avatar left :color="Colors.background">
                <v-icon :color="liked ? Colors.accent : Colors.text" size="15px">mdi-heart</v-icon>
              </v-avatar>
              {{formatNumber(numOfLikes)}}
            </v-chip>

            <v-chip
              :text-color="Colors.text"
              :color="Colors.subTextColor"
              outlined
              v-if="disabled.reposts"
              @click="repostsDialog = true"
            >
              <v-avatar left :color="Colors.background">
                <v-icon :color="Colors.text" size="18px">mdi-share</v-icon>
              </v-avatar>
              {{formatNumber(numOfReposts)}}
            </v-chip>
          </div>

          <div id="caption-wrapper">
            <div id="caption">
              <div id="cov" v-html="caption"></div>
            </div>
          </div>

          <div id="action-btns">
            <v-btn
              icon
              :color="Colors.background"
              height="50px"
              @click="showCommentBox = !showCommentBox"
              v-if="disabled.comments"
            >
              <v-icon v-if="!commented" :color="Colors.text" size="26px">mdi-comment-outline</v-icon>
              <v-icon v-if="commented" :color="Colors.text" size="26px">mdi-comment</v-icon>
            </v-btn>
            <v-btn
              icon
              :color="Colors.background"
              height="50px"
              @click="like"
              v-if="disabled.likes"
            >
              <v-icon v-if="!liked" :color="Colors.text" size="28px">mdi-heart-outline</v-icon>
              <v-icon v-if="liked" :color="Colors.text" size="28px">mdi-heart</v-icon>
            </v-btn>
            <v-btn
              icon
              :color="Colors.background"
              height="50px"
              @click="!reposted ? repostBottomSheet = true : repostBottomSheet = false"
              v-if="disabled.reposts && userId !== getUser.id"
            >
              <v-icon v-if="!reposted" :color="Colors.text" size="32px">mdi-share-outline</v-icon>
              <v-icon v-if="reposted" :color="Colors.text" size="32px">mdi-share</v-icon>
            </v-btn>

            <span>
              <v-btn
                icon
                :color="Colors.background"
                height="50px"
                @click="bookmark"
                v-if="disabled.bookmark && userId !== getUser.id"
              >
                <v-icon v-if="!bookmarked" :color="Colors.text" size="30px">mdi-bookmark-outline</v-icon>
                <v-icon v-if="bookmarked" :color="Colors.text" size="30px">mdi-bookmark</v-icon>
              </v-btn>
            </span>

            <div id="commentBoxCover" v-if="showCommentBox">
              <at-ta
                at="#"
                ref="tagPopup"
                @pattern="getPattern"
                :members="hashtags"
                @feedback="getMentionsOrTagsForComment"
                @selectedValue="getSelectedMentionsOrTags"
                @at="wae"
              >
                <at-ta
                  at="@"
                  ref="mentionPopup"
                  @pattern="getPattern"
                  :members="members"
                  name-key="username"
                  @feedback="getMentionsOrTagsForComment"
                  @selectedValue="getSelectedMentionsOrTags"
                  @at="wae"
                >
                  <template slot="item" slot-scope="s">
                    <img :src="s.item.avatar" />
                    <span v-text="s.item.username"></span>
                  </template>
                  <v-textarea
                    class="vuetify-editor"
                    ref="commentBoxRef"
                    label="Comment"
                    name="Comment"
                    v-model="commentText"
                    rows="1"
                    :dark="isDarkTheme ? true : false"
                    outlined
                    rounded
                    :color="Colors.text"
                    auto-grow
                    :error-messages="commentError"
                    :append-icon="'mdi-send'"
                    @click:append="comment"
                    @click:prepend-inner="showCommentEmo = !showCommentEmo"
                    prepend-inner-icon="mdi-emoticon-excited-outline"
                    row-height="13"
                    @focus="handleFocus"
                    @blur="handleBlur"
                  ></v-textarea>
                </at-ta>
              </at-ta>
              <emoji @emoji="getCommentEmoji" :canShow="showCommentEmo" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <likersList
      @close="likesDialog = false"
      :canShow="likesDialog"
      :postId="postId"
      :postType="postType"
    />

    <repostersList
      @close="repostsDialog = false"
      :canShow="repostsDialog"
      :postId="postId"
      :postType="postType"
    />

    <commentersList
      @actions="transferReport"
      @close="commentsDialog = false"
      :canShow="commentsDialog"
      :postId="postId"
      :postType="postType"
    />

    <v-bottom-sheet inset v-model="repostBottomSheet" max-width="400px">
      <div id="repost-wrapper">
        <span>
          Repost
          <b>{{username}}'s</b> post in your Acivity
        </span>
        <v-btn outlined :dark="isDarkTheme" @click="repost" block>YES</v-btn>
        <v-btn block :dark="isDarkTheme" @click="repostBottomSheet = false">NO</v-btn>
      </div>
    </v-bottom-sheet>

    <v-dialog v-model="showFullScreen" fullscreen>
      <v-app-bar color="rgba(0,0,0,0.3)" dark absolute v-if="float">
        <v-btn icon height="50px" @click="showFullScreen = !showFullScreen">
           <v-icon size="28px" color="#ffffff">mdi-close</v-icon>
        </v-btn>
      </v-app-bar>
      <div id="fullscreen">
        <v-hover v-slot:default="{ hover }" close-delay="800">
          <imageviewpager
            @clicked="float = !float"
            :images="images"
            :onHover="hover"
            :keyPressed="getKey"
            :restart="true"
          />
        </v-hover>
      </div>
    </v-dialog>
  </div>
</template>

<script>
import theme_mixin from "~/mixins/theme_mixin.js";
import device_mixin from "~/mixins/device_mixin.js";
import user_mixin from "~/mixins/user_mixin.js";
import utils_mixin from "~/mixins/utils_mixin.js";

import { CONSTANTS } from "~/assets/libs/constants.js";

const moment = require("moment-timezone");

import popupavatar from "~/components/utils/popupavatar.vue";
import emoji from "~/components/utils/emoji.vue";
import likersList from "~/components/utils/likersList.vue";
import repostersList from "~/components/utils/repostersList.vue";
import commentersList from "~/components/utils/commentersList.vue";

import imageviewpager from "~/components/utils/imageviewpager.vue";
export default {
  mixins: [theme_mixin, device_mixin, user_mixin, utils_mixin],
  components: {
    popupavatar,
    imageviewpager,
    likersList,
    repostersList,
    commentersList,
    emoji,
    AtTa: () =>
      process.client
        ? import("vue-at/dist/vue-at-textarea")
        : Promise.resolve({ render: h => h("div") })
  },
  data() {
    return {
      showFullScreen: false,
      float: true,
      postId: null,
      postType: CONSTANTS.image_post,
      userId: 342,
      username: "Gerald",
      numOfComments: 25,
      numOfLikes: 57,
      numOfReposts: 5,
      liked: true,
      commented: false,
      reposted: false,
      bookmarked: false,
      time: "Mon May 25 2020 17:06:03 GMT+0100",
      images: [
        {
          ratio: "1:1",
          src: require("~/static/drake.jpg")
        },
        {
          ratio: "1:1",
          src: require("~/static/drake.jpg")
        },
        {
          ratio: "3:4",
          src: require("~/static/juliet.jpg")
        }
      ],
      members: [
        {
          avatar: require("~/static/drake.jpg"),
          username: "ovmobile"
        },

        {
          avatar: require("~/static/drake.jpg"),
          username: "ohis"
        },
        {
          avatar: require("~/static/drake.jpg"),
          username: "omila"
        }
      ],
      hashtags: ["XcelMusic", "Covid19", "python", "java", "programmer", "ceo"],
      blurTimer: null,
      captionText: `Socials\n Built by \n@ovmobile \n#solodeveloper #vuelover #tech_enthusiats`,
      moment: moment,
      notificationDisabled: false,
      followBottomSheet: false,
      repostBottomSheet: false,
      commentContainsError: false,
      commentError: "",
      commentText: "",
      showCommentBox: false,
      showCommentEmo: false,
      disabled: {
        likes: true,
        comments: true,
        reposts: true,
        bookmark: true
      },
      likesDialog: false,
      commentsDialog: false,
      repostsDialog: false,
      getKey: {}
    };
  },
  created() {
    this.postId = this.$route.params.id;
  },
  mounted() {
    this.setBoxView();
    window.addEventListener("resize", this.setBoxView, false);
    window.addEventListener("keydown", this.handButtonClick, false);
  },
  methods: {
    transferReport(result) {
      if (result.type == "COMMENTED") {
      }
    },

    handleFocus() {
      this.showCommentEmo = false;
      clearTimeout(this.blurTimer);
    },
    handleBlur() {
      this.commentError = "";
      this.blurTimer = setTimeout(() => {
        this.$refs.tagPopup.closePanel();
        this.$refs.mentionPopup.closePanel();
      }, 1100);
    },

    setBoxView() {
      var ele = document.getElementById("image-cover"),
        p = document.getElementById("post-content"),
        width = ele.clientWidth + "px";
      ele.style.height = width;
      p.style.height = width;
    },
    gotoProfile() {},

    copyPostUrl() {},

    toggleNotification() {},

    ReportPost() {
      var push = {
        type: this.postType,
        postId: this.postId,
        userId: this.userId
      };
      // this.finalize_REPORT(push);
    },
    stopSeeingOpPost() {},

    deletePost() {},
    changeAudience() {},
    getCommentEmoji(emoji) {
      this.insertChar(
        emoji,
        this.$refs.commentBoxRef.$refs.input,
        this.commentText,
        this,
        newText => {
          this.commentText = newText;
        }
      );
    },

    wae(val) {},

    getPattern(ss) {},

    getMentionsOrTagsForComment(wow) {
      this.commentText = wow;
    },
    getSelectedMentionsOrTags(val) {},

    follow() {
      if (!this.following) this.followBottomSheet = false;
      this.$store.commit("user/Follow", {
        username: this.username,
        fullname: this.fullname,
        avatar: this.avatar
      });
    },
    bookmark() {
      //  var push;
      if (!this.bookmarked) {
        this.bookmarked = true;

        // push = {
        //   type: this.postType,
        //   postId: this.postId,
        //   userId: this.userId,
        //   isAdd: true
        // };
      } else {
        this.bookmarked = false;

        // push = {
        //   type: this.postType,
        //   postId: this.postId,
        //   userId: this.userId,
        //   isAdd: false
        // };
      }

      //   this.finalize_BOOKMARK(push);
    },
    repost() {
      //  var push;
      if (!this.reposted) {
        this.numOfReposts++;
        this.reposted = true;
        this.repostBottomSheet = false;

        // push = {
        //   type: this.postType,
        //   postId: this.postId,
        //   userId: this.userId
        // };

        // this.finalize_REPOST(push);
      }
    },
    like() {
      // var push;
      if (!this.liked) {
        this.liked = true;
        this.numOfLikes++;

        // push = {
        //   type: this.postType,
        //   postId: this.postId,
        //   userId: this.userId,
        //   isAdd: true
        // };
      } else {
        this.liked = false;
        this.numOfLikes--;

        // push = {
        //   type: this.postType,
        //   postId: this.postId,
        //   userId: this.userId,
        //   isAdd: false
        // };
      }

      // this.finalize_LIKE(push);
    },
    comment() {
      var push;
      if (this.commentText.TEST().isEmpty) {
        this.commentContainsError = true;
        this.commentError = "required";
      } else {
        this.commentContainsError = false;
        this.commentError = "";
      }

      if (this.commentContainsError) {
        return;
      }

      // this.commenters.push({
      //   id: 3456,
      //   userId: this.getUser.id,
      //   username: this.getUser.username,
      //   avatar: this.getUser.avatar,
      //   time: Date.now(),
      //   comment: this.commentText
      // });

      //increase comment count and highlight comment icon
      this.commented = true;
      this.numOfComments++;

      // push = {
      //   type: this.postType,
      //   postId: this.postId,
      //   userId: this.userId,
      //   comment: this.commentText,
      //   isAdd: true
      // };

      //  this.finalize_COMMENT(push);

      this.showCommentBox = false;

      this.commentText = "";
    },
    handButtonClick(e) {
      console.log(e.key);
      this.getKey = {
        time: Date.now(),
        key: e.key,
        code: e.code
      };
    }
  },
  computed: {
    isFollowing() {
      var mm = this.getFollowings.filter(e => {
        return (
          (e.username || "")
            .toLowerCase()
            .indexOf((this.username || "").toLowerCase()) > -1
        );
      });

      if (this.userId == this.getUser.id) {
        return true;
      }

      if (mm == "" || mm.length === 0) {
        return false;
      } else {
        return true;
      }
    },
    caption() {
      var text = "";
      text = this.formatText(this.captionText);
      return text;
    }
  },
  watch: {
    showCommentBox() {
      if (!this.showCommentBox) {
        this.commentText = "";
        this.showCommentEmo = false;
      } else {
        //auto focus had to wrap it setimeout
        this.$nextTick(() => {
          setTimeout(() => {
            this.$refs.commentBoxRef.$refs.input.focus();
          }, 100);
        });
      }
    },
    showFullScreen() {
      if (!this.showFullScreen) this.cancelFullScreen();
      else this.requestFullScreen();
    }
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.setBoxView, false);
    window.removeEventListener("keydown", this.handButtonClick, false);
  }
};
</script>

<style lang="scss" scoped>
#fullscreen {
  width: 100%;
  height: 100%;
  background-color: #000000;
}
#repost-wrapper,
#follow-wrapper {
  background-color: var(--background-color);
  color: var(--text-color);
  padding: 10px 10px;
  border-radius: 10px 10px 0px 0px;
}

#repost-wrapper span,
#follow-wrapper span {
  width: 100%;
  padding: 5px;
  display: block;
  margin-bottom: 5px;
}

#app .atwho-li {
  padding: 0px;
  display: block;
  height: 70px;
}
#app .atwho-li img {
  width: 30px;
  height: 30px;
  margin-right: 4px;
  border-radius: 50%;
}
#app .atwho-li span {
  color: var(--text-color);
}

#imagepost {
  width: 100%;
  height: 100%;
  background-color: var(--background-color);
  color: var(--text-color);
  overflow: auto;
}

#details-cover {
  height: auto;
  width: auto;
  padding-left: 5px;
  -webkit-user-select: none; /* Chrome all / Safari all */
  -moz-user-select: none; /* Firefox all */
  -ms-user-select: none; /* IE 10+ */
  -o-user-select: none;
  user-select: none;
}

#username {
  width: 100%;
  padding: 0px;
  margin: 0px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  height: auto;
  font-size: 15px;
  margin-top: 7px;
  cursor: pointer;
  width: 100%;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--text-color);
}

#time {
  width: 100%;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 12px;
  padding: 0px;
  margin: 0px;
  height: auto;
  white-space: nowrap;
  color: var(--subtext-color);
}

#action-btns span {
  float: right;
}

#commentBoxCover {
  width: 100%;
  padding: 0px 5px;
}

#recbtn {
  position: absolute;
  width: auto;
  bottom: 8px;
  left: 8px;
  z-index: 1;
  border-radius: 20px;
  border-radius: 40px;
  word-spacing: 2px;
}

@media screen and (min-width: 767px) {
  #caption-wrapper::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: var(--background-color);
    border-radius: 5px;
  }

  #caption-wrapper::-webkit-scrollbar {
    width: 8px;
    background-color: var(--texture-color);
  }

  #caption-wrapper::-webkit-scrollbar-thumb {
    background-color: var(--texture-color);
    border: 1px solid var(--subtext-color);
  }

  #post-content-wrapper {
    width: 100%;
    height: calc(100% - 65px);

    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;

    -webkit-box-align: center;
    -moz-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;

    -webkit-box-pack: center;
    -moz-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
  }

  #post-content {
    width: 65%;
    height: auto;
    background-color: var(--texture-color);
    border-radius: 10px;
    margin: auto;
    box-shadow: 0px 1px 3px var(--shadow-color),
      -0px -0px 0px var(--shadow-color);
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
  }

  #image-cover {
    width: 60%;
    height: auto;
    border-radius: 10px 0px 0px 10px;
    position: relative;
  }

  #post-details {
    background-color: var(--background-color);
    margin: 7px;
    margin-left: 0px;
    height: auto;
    flex: 1;
    box-shadow: 0px 1px 3px var(--shadow-color),
      -0px -0px 0px var(--shadow-color);
    border-radius: 0px 10px 10px 0px;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    flex-direction: column;
  }

  #analytics {
    width: 100%;
    height: 40px;
    text-align: center;
    padding: 10px 0px;
    word-spacing: 5px;
  }

  #caption-wrapper {
    width: 100%;
    height: auto;
    overflow: auto;
    padding: 20px;
    flex: 1;
  }

  #caption {
    width: 100%;
    height: 100%;
    overflow: auto;
    color: var(--text-color);
    position: relative;
    display: table;
    text-align: center;
  }

  #caption #cov {
    height: auto;
    width: 100%;
    display: table-cell;
    vertical-align: middle;
  }

  #action-btns {
    width: 100%;
    height: auto;
    min-height: 40px;
    padding: 0px 20px;
  }
}

@media screen and (min-width: 767px) and (max-width: 1024px) {
#post-content {
    width: 85%;
    height: auto;
    background-color: var(--texture-color);
    border-radius: 10px;
    margin: auto;
    box-shadow: 0px 1px 3px var(--shadow-color),
      -0px -0px 0px var(--shadow-color);
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
  }

}


@media screen and (min-width: 320px) and (max-width: 767px) {
  #post-content-wrapper {
    width: 100%;
    height: auto;
    min-height: calc(100% - 65px);
  }

  #post-content {
    width: 100%;
    height: 100%;
  }

  #image-cover {
    width: 100%;
    height: auto;
    position: relative;
  }

  #post-details {
    width: 100%;
    height: auto;
  }

  #analytics {
    width: 100%;
    height: 40px;
    text-align: center;
    padding: 10px 0px;
    word-spacing: 5px;
  }

  #caption-wrapper {
    width: 100%;
    height: auto;
    max-height: 135px;
    overflow: auto;
    padding: 8px;
  }
  #action-btns {
    width: 100%;
    height: auto;
    min-height: 40px;
    padding: 0px 5px;
  }
}

@media screen and (min-width: 320px) and (max-width: 767px) and (orientation: landscape) {
  #image-cover {
    width: 55%;
    height: auto;
    margin: auto;
     position: relative;
  }
}

//for iphone X and others needs to come last or it would confilct with laptop screen
@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) {
  #post-content-wrapper {
    width: 100%;
    height: auto;
    min-height: calc(100% - 65px);
    display: block;
  }

  #post-content {
    width: 100%;
    height: 100%;
    display: block;
    background-color: var(--backgroundcolor-color);
    border-radius: 0px;
    box-shadow: none;
  }

  #image-cover {
    width: 100%;
    height: auto;
     position: relative;
  }

  #post-details {
    width: 100%;
    height: auto;
    box-shadow: none;
    border-radius: 0px;
    display: block;
  }

  #analytics {
    width: 100%;
    height: 40px;
    text-align: center;
    padding: 10px 0px;
    word-spacing: 5px;
  }

  #caption-wrapper {
    width: 100%;
    height: auto;
    max-height: 180px;
    overflow: auto;
    padding: 8px;
  }

  #caption {
    width: 100%;
    height: 100%;
    overflow: auto;
    color: var(--text-color);
    position: none;
    display: block;
    text-align: left;
  }

  #caption #cov {
    height: auto;
    width: 100%;
    display: block;
  }
  #action-btns {
    width: 100%;
    height: auto;
    min-height: 40px;
    padding: 0px 5px;
  }
}

//for iphone X and others needs to come last or it would confilct with laptop screen
@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: landscape) {
  #image-cover {
    width: 55%;
    height: auto;
    margin: auto;
    position: relative;
  }
}
</style>