<template>
  <div id="fullscreen-view">
    <div id="float-bar">
      <v-app-bar color="rgba(0,0,0,0.3)" dark absolute v-if="showFloat">
        <v-btn icon @click="exitFullScreen">
          <v-icon>mdi-chevron-down</v-icon>
        </v-btn>
        <popupavatar :userId="userId" />
        <div id="username">
          {{userId == getUser.id ? 'You' : username }}
          <div id="time">
            <span v-if="isPromotion" style="font-size:14px">Promoted</span>
            <span v-else>{{setPostTime(moment,time)}}</span>
          </div>
        </div>

        <v-spacer></v-spacer>
        <v-btn
          icon
          color="#000000"
          height="50px"
          v-if="!isFollowing && userId !== getUser.id"
          @click="followBottomSheet = true"
        >
          <v-icon color="#ffffff" size="28px">mdi-account-plus-outline</v-icon>
        </v-btn>
        <v-menu open-on-hover :close-on-click="false" :close-on-content-click="false" offset-x>
          <template v-slot:activator="{ on }">
            <v-btn icon v-on="on" color="#000000" height="50px">
              <v-icon color="#ffffff">mdi-dots-horizontal</v-icon>
            </v-btn>
          </template>
          <v-card color="#000000" width="100%">
            <v-list-item link @click="gotoProfile">
              <v-list-item-title :style="{color:'#ededed'}">
                View
                <b>{{userId == getUser.id ? 'Your' : username+"'s" }}</b> profile
              </v-list-item-title>
            </v-list-item>
            <v-list-item link @click="copyPostUrl">
              <v-list-item-title :style="{color:'#ededed'}">Copy Post link url</v-list-item-title>
            </v-list-item>
            <v-list-item link v-if="userId !== getUser.id" @click="toggleNotification">
              <v-list-item-title :style="{color:'#ededed'}">
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
              <v-list-item-title :style="{color:'#ededed'}">Report Post</v-list-item-title>
            </v-list-item>
            <v-list-item link @click="stopSeeingOpPost" v-if="userId !== getUser.id">
              <v-list-item-title :style="{color:'#ededed'}">
                Stop seeing
                <b>{{username+"'s"}}</b> posts
              </v-list-item-title>
            </v-list-item>
            <v-list-item link @click="deletePost" v-if="userId === getUser.id">
              <v-list-item-title :style="{color:'#ededed'}">
                <b>Delete</b> this post
              </v-list-item-title>
            </v-list-item>
            <v-list-item link @click="changeAudience" v-if="userId === getUser.id">
              <v-list-item-title :style="{color:'#ededed'}">Change Audience View</v-list-item-title>
            </v-list-item>
          </v-card>
        </v-menu>
      </v-app-bar>
    </div>

    <!--  -->

    <div id="Slot-cover">
      <!-- <img id="temp-image" :src="avatar" alt /> -->

      <slot name="max"></slot>
    </div>

    <!--  -->

    <div id="bottomActionBtns" v-if="showFloat">
      <div class="mainBtns">
        <v-btn
          icon
          color="#000000"
          height="50px"
          @click="showCommentBox = !showCommentBox"
          v-if="disabled.comments"
        >
          <v-icon v-if="!commented" color="#ffffff" size="26px">mdi-comment-outline</v-icon>
          <v-icon v-if="commented" color="#ffffff" size="26px">mdi-comment</v-icon>
        </v-btn>
        <v-btn icon color="#ffffff" height="50px" @click="like" v-if="disabled.likes">
          <v-icon v-if="!liked" color="#ffffff" size="28px">mdi-heart-outline</v-icon>
          <v-icon v-if="liked" color="#ffffff" size="28px">mdi-heart</v-icon>
        </v-btn>
        <v-btn
          icon
          color="#000000"
          height="50px"
          @click="!reposted ? repostBottomSheet = true : repostBottomSheet = false"
          v-if="disabled.reposts && userId !== getUser.id"
        >
          <v-icon v-if="!reposted" color="#ffffff" size="32px">mdi-share-outline</v-icon>
          <v-icon v-if="reposted" color="#ffffff" size="32px">mdi-share</v-icon>
        </v-btn>
      </div>

      <div
        v-if="postType == CONSTANTS.image_post || postType == CONSTANTS.video_post || postType == CONSTANTS.status_post 
        || postType == CONSTANTS.image_repost || postType == CONSTANTS.video_repost || postType == CONSTANTS.status_repost"
      >
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
      </div>

      <div
        v-else-if="postType == CONSTANTS.ecommerce_post || postType == CONSTANTS.ecommerce_repost || postType == CONSTANTS.ecommerce_promoted_post || postType == CONSTANTS.ecommerce_promoted_repost"
      >
        <v-btn icon :color="Colors.background" height="50px" @click="addToCart"  v-if="userId !== getUser.id">
          <v-icon v-if="addedToCart" :color="Colors.text" size="30px">mdi-cart-arrow-up</v-icon>
          <v-icon v-if="!addedToCart" :color="Colors.text" size="30px">mdi-cart-arrow-down</v-icon>
        </v-btn>
      </div>

      <div
        v-else-if="postType == CONSTANTS.event_post || postType == CONSTANTS.event_repost || postType == CONSTANTS.event_promoted_post || postType == CONSTANTS.event_promoted_repost"
      >
        <v-btn icon :color="Colors.background" height="50px" @click="notifyForEvent"  v-if="userId !== getUser.id">
          <v-icon v-if="reminder" :color="Colors.text" size="30px">mdi-bell-ring</v-icon>
          <v-icon v-if="!reminder" :color="Colors.text" size="30px">mdi-bell-ring-outline</v-icon>
        </v-btn>
      </div>

      <v-btn icon color="#000000" height="50px" v-if="userId == getUser.id">
        <v-icon color="#ffffff" size="28px">mdi-chevron-down</v-icon>
      </v-btn>
    </div>

    <v-bottom-sheet inset v-model="showCommentBox" :dark="false" max-width="550px">
      <div id="commentBoxCover">
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
              rows="2"
              :dark="true"
              outlined
              rounded
              color="#ffffff"
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
    </v-bottom-sheet>

    <div id="footer-wrapper" v-if="showFloat">
      <div id="analytics">
        <v-chip
          text-color="#ffffff"
          color="#ffffff"
          outlined
          v-if="disabled.comments"
          @click="commentsDialog = true"
        >
          <v-avatar left>
            <v-icon color="#ffffff" size="17px">mdi-comment</v-icon>
          </v-avatar>
          {{formatNumber(numOfComments)}}
        </v-chip>

        <v-chip
          text-color="#ffffff"
          color="#ffffff"
          outlined
          @click="likesDialog = true"
          v-if="disabled.likes"
        >
          <v-avatar left>
            <v-icon :color="liked ? Colors.accent : Colors.text" size="17px">mdi-heart</v-icon>
          </v-avatar>
          {{formatNumber(numOfLikes)}}
        </v-chip>

        <v-chip
          text-color="#ffffff"
          color="#ffffff"
          outlined
          @click="repostsDialog = true"
          v-if="disabled.reposts"
        >
          <v-avatar left>
            <v-icon color="#ffffff" size="20px">mdi-share</v-icon>
          </v-avatar>
          {{formatNumber(numOfReposts)}}
        </v-chip>
      </div>
    </div>

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
      @close="commentsDialog = false"
      @actions="transferDeletedComment"
      :canShow="commentsDialog"
      :postId="postId"
      :postType="postType"
    />
  </div>
</template>

<script>
import theme_mixin from "~/mixins/theme_mixin.js";
import device_mixin from "~/mixins/device_mixin.js";
import user_mixin from "~/mixins/user_mixin.js";

import TEST from "~/assets/libs/tests.js";

import popupavatar from "~/components/utils/popupavatar.vue";
import emoji from "~/components/utils/emoji.vue";

import utils_mixin from "~/mixins/utils_mixin.js";

import likersList from "~/components/utils/likersList.vue";

import repostersList from "~/components/utils/repostersList.vue";

const moment = require("moment-timezone");

import commentersList from "~/components/utils/commentersList.vue";

import { CONSTANTS } from "~/assets/libs/constants.js";
export default {
  components: {
    popupavatar,
    emoji,
    likersList,
    repostersList,
    commentersList,
    AtTa: () =>
      process.client
        ? import("vue-at/dist/vue-at-textarea")
        : Promise.resolve({ render: h => h("div") })
  },

  mixins: [theme_mixin, device_mixin, user_mixin, utils_mixin],
  props: {
    userDetails: {
      type: Object,
      required: true
    },
    postDetails: {
      type: Object,
      required: true
    },
    showFloat: {
      default: true
    },
    postId: {
      type: Number,
      required: true
    },
    postType: {
      type: String,
      required: true
    },
    isPromotion: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      CONSTANTS: CONSTANTS,
      search: "",
      userId: "",
      avatar: "",
      username: "",
      fullname: "",
      time: "",
      numOfLikes: "--",
      numOfComments: "--",
      numOfReposts: "--",
      commented: false,
      liked: false,
      reposted: false,
      bookmarked: false,
      reminder: false,
      addedToCart: false,
      commentText: "",
      showCommentBox: false,
      showCommentEmo: false,
      commentError: "",
      commentContainsError: false,
      replyCommentContainsError: false,
      repostBottomSheet: false,
      followBottomSheet: false,
      likesDialog: false,
      commentsDialog: false,
      repostsDialog: false,
      moment: moment,
      disabled: {
        likes: true,
        comments: true,
        reposts: true,
        bookmark: true
      },
      notificationDisabled: false,
      members: [
        {
          avatar: require("~/static/drake.jpg"),
          username: "ovmobile"
        },
        {
          avatar: require("~/static/drake.jpg"),
          username: "josh"
        },
        {
          avatar: require("~/static/drake.jpg"),
          username: "elede"
        },
        {
          avatar: require("~/static/drake.jpg"),
          username: "pablo"
        },
        {
          avatar: require("~/static/drake.jpg"),
          username: "birthus"
        },
        {
          avatar: require("~/static/drake.jpg"),
          username: "erik"
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
      currentReplyComentTextIndex: -1,
      blurTimer: null
    };
  },

  mounted() {
    this.getDetails();
  },
  methods: {
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

    exitFullScreen() {
      this.$emit("exit", true);
    },

    copyPostUrl() {},

    toggleNotification() {},

    ReportPost() {
      var action = {
        type: "REPORTED",
        actions: {
          type: this.postType,
          postId: this.postId,
          userId: this.userId
        }
      };

      this.$emit("actions", action);
    },
    stopSeeingOpPost() {},

    deletePost() {
      var action = {
        type: "DELETED"
      };

      this.$emit("actions", action);
    },
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

    getDetails() {
      this.userId = this.userDetails.userId;
      this.username = this.userDetails.username;
      this.fullname = this.userDetails.fullname;
      this.time = this.postDetails.time;
      this.avatar = this.userDetails.avatar;
      this.numOfLikes = this.postDetails.numOfLikes;
      this.numOfComments = this.postDetails.numOfComments;
      this.numOfReposts = this.postDetails.numOfReposts;

      this.checkedForExtra();
    },

    gotoProfile() {},

    checkedForExtra() {
      this.liked = this.postDetails.liked;
      this.commented = this.postDetails.commented;
      this.reposted = this.postDetails.reposted;

      this.notificationDisabled = this.postDetails.notificationDisabled;

      this.disabled.likes = this.postDetails.disabled.likes;
      this.disabled.comments = this.postDetails.disabled.comments;
      this.disabled.reposts = this.postDetails.disabled.reposts;
      this.disabled.bookmark = this.postDetails.disabled.bookmark;

      this.bookmarked = this.postDetails.bookmarked;
      this.limmited = this.postDetails.limited;

      this.reminder = this.postDetails.reminder;
      this.addedToCart = this.postDetails.addedToCart;
    },
    follow() {
      if (!this.following) this.followBottomSheet = false;
      this.$store.commit("user/Follow", {
        username: this.username,
        fullname: this.fullname,
        avatar: this.avatar
      });
    },
    comment() {
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
      //   id: 3456, //find any rand id
      //   userId: this.getUser.id,
      //   username: this.getUser.username,
      //   avatar: this.getUser.avatar,
      //   time: Date.now(),
      //   comment: this.commentText
      // });
      //increase comment count and highlight comment icon
      this.commented = true;
      this.numOfComments++;

      var action = {
        type: "COMMENTED",
        actions: {
          type: this.postType,
          postId: this.postId,
          userId: this.userId,
          comment: this.commentText,
          isAdd: true
        }
      };

      this.$emit("actions", action);
      this.returnDetails();

      this.showCommentBox = false;

      this.commentText = "";
    },

    transferDeletedComment(action) {
      setTimeout(() => {
        this.$emit("actions", action);
      }, 1000);
    },
    like() {
      var action;
      if (!this.liked) {
        this.liked = true;
        this.numOfLikes++;
        action = {
          type: "LIKED",
          actions: {
            type: this.postType,
            postId: this.postId,
            userId: this.userId,
            isAdd: true
          }
        };
      } else {
        this.liked = false;
        this.numOfLikes--;
        action = {
          type: "LIKED",
          actions: {
            type: this.postType,
            postId: this.postId,
            userId: this.userId,
            isAdd: false
          }
        };
      }

      this.$emit("actions", action);
      this.returnDetails();
    },
    repost() {
      if (!this.reposted) {
        this.numOfReposts++;
        this.reposted = true;
        this.repostBottomSheet = false;

        var action = {
          type: "REPOSTED",
          actions: {
            type: this.postType,
            postId: this.postId,
            userId: this.userId
          }
        };
        this.$emit("actions", action);
        this.returnDetails();
      }
    },
    bookmark() {
      var action;

      if (!this.bookmarked) {
        this.bookmarked = true;

        action = {
          type: "BOOKMARKED",
          actions: {
            type: this.postType,
            postId: this.postId,
            userId: this.userId,
            isAdd: true
          }
        };
      } else {
        this.bookmarked = false;

        action = {
          type: "BOOKMARKED",
          actions: {
            type: this.postType,
            postId: this.postId,
            userId: this.userId,
            isAdd: false
          }
        };
      }

      this.$emit("actions", action);
      this.returnDetails();
    },

    addToCart() {
      var action;

      if (!this.addedToCart) {
        this.addedToCart = true;

        action = {
          type: "CARTED",
          actions: {
            type: this.postType,
            postId: this.postId,
            userId: this.userId,
            isAdd: true
          }
        };
      } else {
        this.addedToCart = false;

        action = {
          type: "CARTED",
          actions: {
            type: this.postType,
            postId: this.postId,
            userId: this.userId,
            isAdd: false
          }
        };
      }

      this.$emit("actions", action);
      this.returnDetails();
    },

    notifyForEvent() {
      var action;
      if (!this.reminder) {
        this.reminder = true;

        action = {
          type: "EVENT-REMINDER",
          actions: {
            type: this.postType,
            postId: this.postId,
            userId: this.userId,
            isAdd: true
          }
        };
      } else {
        this.reminder = false;

        action = {
          type: "EVENT-REMINDER",
          actions: {
            type: this.postType,
            postId: this.postId,
            userId: this.userId,
            isAdd: false
          }
        };
      }

      this.$emit("actions", action);
      this.returnDetails();
    },
    viewed() {},
    returnDetails() {
      var xx = {
        numOfLikes: this.numOfLikes,
        numOfComments: this.numOfComments,
        numOfReposts: this.numOfReposts,

        commented: this.commented,
        liked: this.liked,
        reposted: this.reposted,
        bookmarked: this.bookmarked,
        limited: this.limmited,
        disabled: this.disabled,
        notificationDisabled: this.notificationDisabled,

        reminder: this.reminder,
        addedToCart: this.addedToCart
      };

      this.$emit("resetDetails", xx);
    }
  },
  watch: {
    postDetails() {
      this.getDetails();
    },
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
    likesDialog() {},
    repostsDialog() {},
    commentsDialog() {
      //this.returnDetails();
    }
  },
  computed: {
    dynamicWidth() {
      var width = "";
      if (this.isMobile) {
        width = "90%";
      } else if (this.isTablet) {
        width = "55%";
      } else {
        width = "30%";
      }
      return width;
    },
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
    }
  }
};
</script>

<style lang="scss" scoped>
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

#fullscreen-view {
  width: 100%;
  height: 100%;
  background-color: #000000;
}

@media screen and (min-width: 767px) {
  #username {
    width: 100%;
    padding: 0px;
    margin: 0px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    height: auto;
    font-size: 15px;
    margin-top: 7px;
    cursor: pointer;
    color: #ededed;
  }

  #time {
    font-size: 12px;
    padding: 0px;
    margin: 0px;
    height: auto;
    color: "#929796";
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  #Slot-cover {
    width: 100%;
    height: 100%;
  }

  #bottomActionBtns {
    width: 43px;
    text-align: center;
    padding: 3px;
    height: auto;
    position: fixed;
    right: 5px;
    bottom: 20vh;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 30px;
    z-index: 60;
  }

  #commentBoxCover {
    width: 100%;
    height: auto;
    padding: 10px;
    border-radius: 20px 20px 0px 0px;
    background-color: #000000;
  }

  #replyCommentBoxCover {
    border-radius: 20px 20px 0px 0px;
    min-height: 100px;
    padding: 10px;
    width: 100%;
    background-color: #000000;
  }

  #footer-wrapper {
    position: fixed;
    bottom: 0px;
    width: 100%;
    height: auto;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 50;
  }

  #analytics {
    width: 100%;
    height: auto;
    padding: 8px;
    text-align: center;
  }
}

@media screen and (min-width: 320px) and (max-width: 767px) {
  #username {
    width: 100%;
    padding: 0px;
    margin: 0px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    height: auto;
    font-size: 15px;
    margin-top: 7px;
    cursor: pointer;
    color: #ededed;
  }

  #time {
    font-size: 12px;
    padding: 0px;
    margin: 0px;
    height: auto;
    color: "#929796";
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  #Slot-cover {
    width: 100%;
    height: 100%;
  }

  #bottomActionBtns {
    width: 43px;
    text-align: center;
    padding: 3px;
    height: auto;
    position: fixed;
    right: 5px;
    bottom: 20vh;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 30px;
    z-index: 60;
  }

  #commentBoxCover {
    width: 100%;
    height: auto;
    padding: 10px;
    border-radius: 20px 20px 0px 0px;
    background-color: #000000;
  }

  #replyCommentBoxCover {
    border-radius: 20px 20px 0px 0px;
    min-height: 100px;
    padding: 10px;
    width: 100%;
    background-color: #000000;
  }

  #footer-wrapper {
    position: fixed;
    bottom: 0px;
    width: 100%;
    height: auto;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 50;
  }

  #analytics {
    width: 100%;
    height: auto;
    padding: 8px;
    text-align: center;
  }
}

//for iphone X and others needs to come last or it would confilct with laptop screen
@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) {
  #username {
    width: 100%;
    padding: 0px;
    margin: 0px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    height: auto;
    font-size: 15px;
    margin-top: 7px;
    cursor: pointer;
    color: #ededed;
  }

  #time {
    font-size: 12px;
    padding: 0px;
    margin: 0px;
    height: auto;
    color: "#929796";
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  #Slot-cover {
    width: 100%;
    height: 100%;
  }

  #bottomActionBtns {
    width: 43px;
    text-align: center;
    padding: 3px;
    height: auto;
    position: fixed;
    right: 5px;
    bottom: 20vh;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 30px;
    z-index: 60;
  }

  #commentBoxCover {
    width: 100%;
    height: auto;
    padding: 10px;
    border-radius: 20px 20px 0px 0px;
    background-color: #000000;
  }

  #replyCommentBoxCover {
    border-radius: 20px 20px 0px 0px;
    min-height: 100px;
    padding: 10px;
    width: 100%;
    background-color: #000000;
  }

  #footer-wrapper {
    position: fixed;
    bottom: 0px;
    width: 100%;
    height: auto;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 50;
  }

  #analytics {
    width: 100%;
    height: auto;
    padding: 8px;
    text-align: center;
  }
}
</style>