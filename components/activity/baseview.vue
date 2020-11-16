<template>
  <div id="imagepost" ref="container">
    <div class="header">
      <popupavatar :userId="userId" />
      <div id="details-cover">
        <div id="username">{{userId == getUser.id ? 'You' : username }}</div>
        <div id="time">
          <span v-if="isPromotion" style="font-size:14px">Promoted</span>
          <span v-else>{{setPostTime(moment,time)}}</span>
        </div>
      </div>
      <div id="topActionBtns">
        <v-btn
          icon
          :color="Colors.background"
          height="50px"
          v-if="!isFollowing && userId !== getUser.id"
          @click="followBottomSheet = true"
        >
          <v-icon :color="Colors.text" size="28px">mdi-account-plus-outline</v-icon>
        </v-btn>
        <v-menu open-on-hover :close-on-click="false" :close-on-content-click="false" offset-x>
          <template v-slot:activator="{ on }">
            <v-btn icon v-on="on" :color="Colors.background" height="50px">
              <v-icon :color="Colors.text">mdi-dots-horizontal</v-icon>
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
      </div>
    </div>

    <!--  -->

    <div id="Slot-cover">
      <!-- <img id="temp-image" :src="avatar" alt /> -->

      <slot name="mini"></slot>
    </div>

    <!--  -->

    <div id="bottomActionBtns">
      <div class="mainBtns">
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
        <v-btn icon :color="Colors.background" height="50px" @click="like" v-if="disabled.likes">
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

      <v-btn icon :color="Colors.background" height="50px" v-if="userId == getUser.id">
        <v-icon :color="Colors.text" size="28px">mdi-chevron-down</v-icon>
      </v-btn>
    </div>

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
    <div id="analytics">
      <v-chip
        :text-color="Colors.text"
        :color="Colors.text"
        outlined
        v-if="disabled.comments"
        @click="commentsDialog = true"
      >
        <v-avatar left :color="Colors.background">
          <v-icon :color="Colors.text" size="17px">mdi-comment</v-icon>
        </v-avatar>
        {{formatNumber(numOfComments)}}
      </v-chip>

      <v-chip
        :text-color="Colors.text"
        :color="Colors.text"
        outlined
        @click="likesDialog = true"
        v-if="disabled.likes"
      >
        <v-avatar left :color="Colors.background">
          <v-icon :color="liked ? Colors.accent : Colors.text" size="17px">mdi-heart</v-icon>
        </v-avatar>
        {{formatNumber(numOfLikes)}}
      </v-chip>

      <v-chip
        :text-color="Colors.text"
        :color="Colors.text"
        outlined
        @click="repostsDialog = true"
        v-if="disabled.reposts"
      >
        <v-avatar left :color="Colors.background">
          <v-icon :color="Colors.text" size="20px">mdi-share</v-icon>
        </v-avatar>
        {{formatNumber(numOfReposts)}}
      </v-chip>
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
      @actions="transferReport"
      @close="commentsDialog = false"
      :canShow="commentsDialog"
      :postId="postId"
      :postType="postType"
    />

    <v-dialog v-model="showFullScreen" fullscreen>
      <fullscreenbaseview
        @actions="transferReport"
        @exit="exitFullScreen"
        @resetDetails="setDetailsFromFullScreen"
        :userDetails="setFullScreenUserDetails"
        :postDetails="setFullScreenPostDetails"
        :showFloat="canFloat"
        :postId="postId"
        :postType="postType"
        :isPromotion="isPromotion"
      >
        <template v-slot:max>
          <slot name="max"></slot>
        </template>
      </fullscreenbaseview>
    </v-dialog>
  </div>
</template>

<script>
/**--
 * userId = this user id //integer
 * avatar = this user avatar //string url
 * username = this user username //string
 * fullname = this user fullanme //string
 * isFollowing = this user following the op //boolean
 *  all this are gotten from db
 * --

 * numOfLikes: for post //integer
 * numOfComments: for post // integer
 * numOfReposts: for post //integer
 * commented:this user comment on post ? //boolean
 * likes: this user  lked the post ? //boolean
 * reposted: this user reposted post ? //boolean
 * bookmarked: this.user bookmarked post ? //boolean
 * commentText:this.commented ? true == text the user wrote //string
 * all this are gotten from db
 * --
 *
 */
import TEST from "~/assets/libs/tests.js";
import popupavatar from "~/components/utils/popupavatar.vue";
import fullscreenbaseview from "~/components/activity/fullscreenbaseview.vue";
import emoji from "~/components/utils/emoji.vue";

import theme_mixin from "~/mixins/theme_mixin.js";
import device_mixin from "~/mixins/device_mixin.js";
import user_mixin from "~/mixins/user_mixin.js";
import utils_mixin from "~/mixins/utils_mixin.js";

import likersList from "~/components/utils/likersList.vue";

import repostersList from "~/components/utils/repostersList.vue";

import commentersList from "~/components/utils/commentersList.vue";

const moment = require("moment-timezone");

import { CONSTANTS } from "~/assets/libs/constants.js";

export default {
  components: {
    emoji,
    popupavatar,
    fullscreenbaseview,
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
    showFullScreen: {
      default: true
    },
    canFloat: {
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
    parentPosition: {
      //type: Object
    },
    isScrolling: {
      type: Boolean
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
    //var container = document.getElementById("imagepost");
    var container = this.$refs.container;
    setTimeout(() => {
      this.getViewPosition(
        this.getBoxPos(container, this.parentPosition),
        this.parentPosition,
        pos => {
          this.$emit("viewPos", pos);
        }
      );
    }, 1000);
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
    transferReport(result) {
      if (result.type == "REPORTED") {
        this.finalize_REPORT(result.actions);
      } else if (result.type == "REPOSTED") {
        this.finalize_REPOST(result.actions);
      } else if (result.type == "DELETED") {
        this.$emit("deleted");
      } else if (result.type == "COMMENTED") {
        this.finalize_COMMENT(result.actions);
      } else if (result.type == "LIKED") {
        this.finalize_LIKE(result.actions);
      } else if (result.type == "BOOKMARKED") {
        this.finalize_BOOKMARK(result.actions);
      } else if (result.type == "CARTED") {
        this.finalize_CART(result.actions);
      } else if (result.type == "EVENT-REMINDER") {
        this.finalize_REMINDER(result.actions);
      }
    },

    exitFullScreen() {
      this.$emit("exitFullScreen", true);
    },

    setDetailsFromFullScreen(result) {
      this.numOfLikes = result.numOfLikes;
      this.numOfComments = result.numOfComments;
      this.numOfReposts = result.numOfReposts;

      this.reminder = result.reminder;
      this.addedToCart = result.addedToCart;

      this.commented = result.commented;
      this.liked = result.liked;
      (this.reposted = result.reposted), (this.bookmarked = result.bookmarked);
      this.limited = result.limmited;
      this.disabled = result.disabled;
      this.notificationDisabled = result.notificationDisabled;
    },

    copyPostUrl() {},

    toggleNotification() {},

    ReportPost() {
      var push = {
        type: this.postType,
        postId: this.postId,
        userId: this.userId
      };
      this.finalize_REPORT(push);
    },
    stopSeeingOpPost() {},

    deletePost() {
      this.$emit("deleted");
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
      this.userId = 12321;
      this.username = "Drake";
      this.fullname = "Tim Cook";
      this.time = "Mon May 12 2020 17:06:03 GMT+0100";
      this.avatar = require("~/static/covid.jpg");
      this.numOfLikes = 30400;
      this.numOfComments = 13400;
      this.numOfReposts = 214557;

      if (this.postType == CONSTANTS.event_post) {
        this.reminder = true;
      }

      if (this.postType == CONSTANTS.ecommerce_post) {
        this.addedToCart = true;
      }

      this.checkedForExtra();
    },

    gotoProfile() {},

    checkedForExtra() {
      this.liked = true;
      this.commented = false;
      this.reposted = false;

      this.notificationDisabled = true;

      this.disabled.likes = true;
      this.disabled.comments = true;
      this.disabled.reposts = true;
      this.disabled.bookmark = true;
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

      push = {
        type: this.postType,
        postId: this.postId,
        userId: this.userId,
        comment: this.commentText,
        isAdd: true
      };

      this.finalize_COMMENT(push);

      this.showCommentBox = false;

      this.commentText = "";
    },
    like() {
      var push;
      if (!this.liked) {
        this.liked = true;
        this.numOfLikes++;

        push = {
          type: this.postType,
          postId: this.postId,
          userId: this.userId,
          isAdd: true
        };
      } else {
        this.liked = false;
        this.numOfLikes--;

        push = {
          type: this.postType,
          postId: this.postId,
          userId: this.userId,
          isAdd: false
        };
      }

      this.finalize_LIKE(push);
    },
    repost() {
      var push;
      if (!this.reposted) {
        this.numOfReposts++;
        this.reposted = true;
        this.repostBottomSheet = false;

        push = {
          type: this.postType,
          postId: this.postId,
          userId: this.userId
        };

        this.finalize_REPOST(push);
      }
    },
    bookmark() {
      var push;
      if (!this.bookmarked) {
        this.bookmarked = true;

        push = {
          type: this.postType,
          postId: this.postId,
          userId: this.userId,
          isAdd: true
        };
      } else {
        this.bookmarked = false;

        push = {
          type: this.postType,
          postId: this.postId,
          userId: this.userId,
          isAdd: false
        };
      }

      this.finalize_BOOKMARK(push);
    },

    addToCart() {
      var push;
      if (!this.addedToCart) {
        this.addedToCart = true;

        push = {
          type: this.postType,
          postId: this.postId,
          userId: this.userId,
          isAdd: true
        };
      } else {
        this.addedToCart = false;

        push = {
          type: this.postType,
          postId: this.postId,
          userId: this.userId,
          isAdd: false
        };
      }

      this.finalize_CART(push);
    },

    notifyForEvent() {
      var push;
      if (!this.reminder) {
        this.reminder = true;

        push = {
          type: this.postType,
          postId: this.postId,
          userId: this.userId,
          isAdd: true
        };
      } else {
        this.reminder = false;

        push = {
          type: this.postType,
          postId: this.postId,
          userId: this.userId,
          isAdd: false
        };
      }

      this.finalize_REMINDER(push);
    },

    viewed() {}
  },
  watch: {
    isScrolling(val) {
      var container = this.$refs.container;
      this.getViewPosition(
        this.getBoxPos(container, this.parentPosition),
        this.parentPosition,
        pos => {
          this.$emit("viewPos", pos);
        }
      );
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
    commentsDialog() {}
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
    },
    setFullScreenUserDetails() {
      var xx = {
        userId: this.userId,
        avatar: this.avatar,
        username: this.username,
        fullname: this.fullname
      };

      return xx;
    },
    setFullScreenPostDetails() {
      var xx = {
        time: this.time,

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

      return xx;
    },
    setFullScreenPostActions() {
      var xx = {};

      return xx;
    }
  }
};
</script>

<style lang="scss" scoped>
#repost-wrapper,
#follow-wrapper,
#delete-comment-wrapper,
#report-comment-wrapper {
  background-color: var(--background-color);
  color: var(--text-color);
  padding: 10px 10px;
  border-radius: 10px 10px 0px 0px;
}

#repost-wrapper span,
#follow-wrapper span,
#delete-comment-wrapper span,
#report-comment-wrapper span {
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



@media screen and (min-width: 767px) {
  #imagepost {
    width: 500px;
    height: auto;
    background-color: var(--texture-color);
    border-radius: 5px;
    box-shadow: 0px 1px 3px var(--shadow-color),
      -0px -0px 0px var(--shadow-color);
    margin: auto;
    margin-bottom: 20px;
  }

  .header {
    height: auto;
    width: 100%;
    display: -moz-box;
    display: flex;
    display: -ms-flexbox;
    display: -webkit-flex;
  }

  #details-cover {
    height: auto;
    flex: 1;
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
  }

  #time {
    font-size: 12px;
    padding: 0px;
    margin: 0px;
    height: auto;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: var(--subtext-color);
  }

  #topActionBtns {
    width: auto;
    height: 100%;
    margin: 0px;
    padding: 0px;
  }

  #Slot-cover {
    width: 100&;
    height: auto;
  }

  #bottomActionBtns {
    width: 100%;
    height: 50px;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
  }

  .mainBtns {
    flex: 1;
  }

  #commentBoxCover {
    width: 100%;
    padding: 0px 15px;
  }

  #analytics {
    height: auto;
    width: 100%;
    white-space: nowrap;
    padding: 8px;
  }
}
@media screen and (min-width: 767px) and (max-width: 1024px) {
  #imagepost {
    width: 400px;
    height: auto;
    background-color: var(--texture-color);
    border-radius: 5px;
    box-shadow: 0px 1px 3px var(--shadow-color),
      -0px -0px 0px var(--shadow-color);
    margin: auto;
    margin-bottom: 5px;
  }
}

@media screen and (min-width: 320px) and (max-width: 767px) {
  #imagepost {
    width: 100%;
    height: auto;
    background-color: var(--texture-color);
    box-shadow: 0px 1px 3px var(--shadow-color),
      -0px -0px 0px var(--shadow-color);
    border: none;
    border-bottom: 5px double var(--shadow-color);
    margin: auto;
    margin-bottom: 0px;
  }

  .header {
    height: auto;
    width: 100%;
    display: -moz-box;
    display: flex;
    display: -ms-flexbox;
    display: -webkit-flex;
  }

  #details-cover {
    height: auto;
    flex: 1;
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
  }

  #time {
    font-size: 12px;
    padding: 0px;
    margin: 0px;
    height: auto;
    overflow: hidden;
    text-overflow: ellipsis;
    color: var(--subtext-color);
  }

  #topActionBtns {
    width: auto;
    height: 100%;
    margin: 0px;
    padding: 0px;
  }

  #Slot-cover {
    width: 100&;
    height: auto;
  }

  #bottomActionBtns {
    width: 100%;
    height: 50px;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
  }

  .mainBtns {
    flex: 1;
  }

  #commentBoxCover {
    width: 100%;
    padding: 0px 15px;
  }

  #analytics {
    height: auto;
    width: 100%;
    white-space: nowrap;
    padding: 8px;
  }
}

//for iphone X and others needs to come last or it would confilct with laptop screen
@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) {
  #imagepost {
    width: 100%;
    height: auto;
    background-color: var(--texture-color);
    box-shadow: 0px 1px 3px var(--shadow-color),
      -0px -0px 0px var(--shadow-color);
    margin: auto;
    border: none;
    border-bottom: 5px double var(--shadow-color);
  }

  .header {
    height: auto;
    width: 100%;
    display: -moz-box;
    display: flex;
    display: -ms-flexbox;
    display: -webkit-flex;
    -webkit-user-select: none; /* Chrome all / Safari all */
    -moz-user-select: none; /* Firefox all */
    -ms-user-select: none; /* IE 10+ */
    -o-user-select: none;
    user-select: none;
  }

  #details-cover {
    height: auto;
    flex: 1;
    padding-left: 5px;
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
  }

  #time {
    font-size: 12px;
    padding: 0px;
    margin: 0px;
    height: auto;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: var(--subtext-color);
  }

  #topActionBtns {
    width: auto;
    height: 100%;
    margin: 0px;
    padding: 0px;
  }

  #Slot-cover {
    width: 100&;
    height: auto;
  }

  #bottomActionBtns {
    width: 100%;
    height: 50px;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
  }

  .mainBtns {
    flex: 1;
  }

  #commentBoxCover {
    width: 100%;
    padding: 0px 15px;
  }

  #analytics {
    height: auto;
    width: 100%;
    white-space: nowrap;
    padding: 8px;
  }
}
</style>