<template>
  <div id="wrapper" v-if="canShow">
    <v-dialog v-model="canShow" :width="dynamicWidth">
      <div id="commentsWrapper" v-if="showComments">
        <div class="commentsheader">
          Comments
          <span class="commentsCount">{{numOfComments}}</span>
        </div>
        <ul>
          <li v-for="(item,index) in commenters " :key="index">
            <div class="comment-items-cover">
              <popupavatar :userId="item.userId" />
              <span class="comment-wrapper">
                <span class="comments-username">
                  {{item.userId == getUser.id ? 'You' : item.username }}
                  <span
                    :style="{color:Colors.subTextColor,fontSize:'14px'}"
                  >- {{setPostTime(moment,item.time,true,true)}}</span>
                </span>
                <span class="comments-comment" v-html=" formatText(item.comment)"></span>
              </span>
            </div>
            <div class="comment-btns">
              <div>
                <v-chip
                  :text-color="Colors.subTextColor"
                  :color="Colors.subTextColor"
                  outlined
                  small
                  v-if="item.repliesCount > 0"
                  @click="fetchReplyForComment(item.id,item.userId,item.username,item.avatar,item.time,item.comment,item.repliesCount)"
                >
                  <span
                    v-if="item.repliesCount > 1"
                  >view {{formatNumber(item.repliesCount)}} replies</span>
                  <span v-if="item.repliesCount == 1">view {{item.repliesCount}} reply</span>
                </v-chip>

                <v-chip
                  v-if="item.likesCount > 0"
                  :text-color="Colors.subTextColor"
                  :color="Colors.subTextColor"
                  outlined
                  small
                >
                  <v-avatar left :color="Colors.background">
                    <v-icon :color="Colors.subTextColor" size="15px">mdi-heart</v-icon>
                  </v-avatar>
                  {{formatNumber(item.likesCount)}}
                </v-chip>
              </div>
              <div class="actn">
                <v-btn width="30" icon @click="likeComment(index)">
                  <v-icon
                    :color="item.liked ? 'red' : Colors.subTextColor"
                    size="22px"
                    v-if="getUser.id != item.userId"
                  >mdi-heart</v-icon>
                </v-btn>
                <v-btn width="30" icon @click="applyReport(index)">
                  <v-icon
                    :color="Colors.subTextColor"
                    size="22px"
                    v-if="getUser.id != item.userId"
                  >mdi-flag</v-icon>
                </v-btn>
                <v-btn width="30" icon @click="showReplyCommentBox(index)">
                  <v-icon
                    :color="Colors.subTextColor"
                    size="22px"
                    v-if="getUser.id != item.userId"
                  >mdi-reply</v-icon>
                </v-btn>
                <v-btn width="30" icon v-if="getUser.id == item.userId" @click="applyDele(index)">
                  <v-icon :color="Colors.subTextColor" size="22px">mdi-delete</v-icon>
                </v-btn>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div id="replyWrapper" v-if="!showComments">
        <div id="target-comment-cover">
          <span id="target-comment-header">Replying to...</span>
          <span id="target-comment-count">{{commentReplies.repliesCount}}</span>
          <div id="target-comment" v-html=" formatText(commentReplies.comment)"></div>
          <div class="likes-items-cover">
            <popupavatar :userId="commentReplies.userId" />
            <span class="comments-username">
              {{commentReplies.username }},
              <span
                :style="{color:Colors.subTextColor,fontSize:'14px'}"
              >{{setPostTime(moment,commentReplies.time,true,true)}}</span>
            </span>
          </div>
        </div>

        <ul>
          <li v-for="(item,index) in commentReplies.replies " :key="index">
            <div class="comment-items-cover">
              <popupavatar :userId="item.userId" />
              <span class="comment-wrapper">
                <span class="comments-username">
                  {{item.userId == getUser.id ? 'You' : item.username }}
                  <span
                    :style="{color:Colors.subTextColor,fontSize:'14px'}"
                  >- {{setPostTime(moment,item.time,true,true)}}</span>
                </span>
                <span class="comments-comment" v-html=" formatText(item.comment)"></span>
              </span>
            </div>
            <div class="comment-btns">
              <div>
                <v-chip
                  :text-color="Colors.subTextColor"
                  :color="Colors.subTextColor"
                  outlined
                  small
                  v-if="item.repliesCount > 0"
                  @click="fetchReplyForComment(item.id,item.userId,item.username,item.avatar,item.time,item.comment,item.repliesCount,item.likesCount,item.likesCount)"
                >
                  <span
                    v-if="item.repliesCount > 1"
                  >view {{formatNumber(item.repliesCount)}} replies</span>
                  <span v-if="item.repliesCount == 1">view {{item.repliesCount}} reply</span>
                </v-chip>

                <v-chip
                  v-if="item.likesCount > 0"
                  :text-color="Colors.subTextColor"
                  :color="Colors.subTextColor"
                  outlined
                  small
                >
                  <v-avatar left :color="Colors.background">
                    <v-icon :color="Colors.subTextColor" size="15px">mdi-heart</v-icon>
                  </v-avatar>
                  {{formatNumber(item.likesCount)}}
                </v-chip>
              </div>
              <div class="actn">
                <v-btn width="30" icon @click="likeComment(index)">
                  <v-icon
                    :color="item.liked ? 'red' : Colors.subTextColor"
                    size="22px"
                    v-if="getUser.id != item.userId"
                  >mdi-heart</v-icon>
                </v-btn>
                <v-btn width="30" icon @click="applyReport(index)">
                  <v-icon
                    :color="Colors.subTextColor"
                    size="22px"
                    v-if="getUser.id != item.userId"
                  >mdi-flag</v-icon>
                </v-btn>
                <v-btn width="30" icon @click="showReplyCommentBox(index)">
                  <v-icon
                    :color="Colors.subTextColor"
                    size="22px"
                    v-if="getUser.id != item.userId"
                  >mdi-reply</v-icon>
                </v-btn>
                <v-btn width="30" icon v-if="getUser.id == item.userId" @click="applyDele(index)">
                  <v-icon :color="Colors.subTextColor" size="22px">mdi-delete</v-icon>
                </v-btn>
              </div>
            </div>
          </li>
        </ul>

        <button id="close-target-comment" @click="showComments = true ">Back</button>
      </div>
    </v-dialog>

    <v-bottom-sheet
      inset
      v-model="showReplyCommentSheet"
      max-width="550px"
      :dark="isDarkTheme ? true : false"
    >
      <div id="replyCommentBoxCover">
        <at-ta
          at="#"
          ref="tagPopup"
          @pattern="getPattern"
          :members="hashtags"
          @feedback="getMentionsOrTagsForReplyComment"
          @selectedValue="getSelectedMentionsOrTags"
          @at="wae"
        >
          <at-ta
            at="@"
            ref="mentionPopup"
            @pattern="getPattern"
            :members="members"
            name-key="username"
            @feedback="getMentionsOrTagsForReplyComment"
            @selectedValue="getSelectedMentionsOrTags"
            @at="wae"
          >
            <template slot="item" slot-scope="s">
              <img :src="s.item.avatar" />
              <span v-text="s.item.username"></span>
            </template>
            <v-textarea
              class="vuetify-editor"
              ref="ReplyCommentBoxRef"
              @focus="handleFocus"
              :name="replyTarget"
              :label="replyTarget"
              v-model="replyCommentText"
              rows="2"
              :dark="isDarkTheme ? true : false"
              outlined
              rounded
              :color="Colors.text"
              auto-grow
              :error-messages="replyCommentError"
              :append-icon="'mdi-send'"
              @click:append="replyComment"
              @click:prepend-inner="showReplyCommentEmo = !showReplyCommentEmo"
              prepend-inner-icon="mdi-emoticon-excited-outline"
              row-height="13"
              @blur="handleBlur"
            ></v-textarea>
          </at-ta>
        </at-ta>
        <emoji @emoji="getRelpyCommentEmoji" :canShow="showReplyCommentEmo" />
      </div>
    </v-bottom-sheet>

    <v-bottom-sheet inset v-model="deleteCommentBottomSheet" max-width="400px">
      <div id="delete-comment-wrapper">
        <span>
          <b>Are you sure you want to delete this comment ?</b>
        </span>
        <v-btn outlined block :dark="isDarkTheme" @click="deleteComment(deleteIndex)">YES</v-btn>
        <v-btn block :dark="isDarkTheme" @click="deleteCommentBottomSheet = false">NO</v-btn>
      </div>
    </v-bottom-sheet>

    <v-bottom-sheet inset v-model="reportCommentBottomSheet" max-width="400px">
      <div id="report-comment-wrapper">
        <span>
          <b>Are you sure you want to Report this comment ?</b>
        </span>
        <v-btn outlined block :dark="isDarkTheme" @click="reportComment(reportIndex)">YES</v-btn>
        <v-btn block :dark="isDarkTheme" @click="reportCommentBottomSheet = false">NO</v-btn>
      </div>
    </v-bottom-sheet>
  </div>
</template>

<script>
import theme_mixin from "~/mixins/theme_mixin.js";
import device_mixin from "~/mixins/device_mixin.js";
import user_mixin from "~/mixins/user_mixin.js";
import popupavatar from "~/components/utils/popupavatar.vue";
import utils_mixin from "~/mixins/utils_mixin.js";
const moment = require("moment-timezone");
import { CONSTANTS } from "~/assets/libs/constants.js";

import TEST from "~/assets/libs/tests.js";
import emoji from "~/components/utils/emoji.vue";
export default {
  components: {
    popupavatar,
    emoji,
    AtTa: () =>
      process.client
        ? import("vue-at/dist/vue-at-textarea")
        : Promise.resolve({ render: h => h("div") })
  },
  mixins: [theme_mixin, device_mixin, user_mixin, utils_mixin],
  props: {
    canShow: {
      type: Boolean,
      default: false
    },
    postId: {
      required: true
    },
    postType: {
      required: true
    }
  },
  data() {
    return {
      moment: moment,
      CONSTANTS: CONSTANTS,
      numOfComments: 230,
      deleteCommentBottomSheet: false,
      reportCommentBottomSheet: false,
      replyCommentText: "",
      replyTarget: "",
      replyCommentError: "",
      showReplyCommentEmo: false,
      showReplyCommentSheet: false,
      showComments: true,
      deleteIndex: -1,
      reportIndex: -1,
      commentError: "",
      commentContainsError: false,
      replyCommentContainsError: false,
      commentReplies: {
        id: -1,
        userId: -1,
        time: "",
        likes: -1,
        repliesCount: -1,
        username: "",
        avatar: "",
        comment: "",
        replies: []
      },
      commenters: [
        {
          id: 23,
          userId: 1,
          repliesCount: 0,
          username: "ovmobile",
          avatar: require("~/static/drake.jpg"),
          time: "Mon May 12 2020 19:06:03 GMT+0100",
          comment: "wow python z great \n all hail python",
          likesCount: 20,
          liked: true
        },
        {
          id: 65,
          userId: 3456,
          repliesCount: 1,
          username: "bezos",
          avatar: require("~/static/drake.jpg"),
          time: "Mon May 12 2020 19:06:03 GMT+0100",
          comment: "hello all \n ....",
          likesCount: 12,
          liked: true
        },
        {
          id: 23,
          userId: 1,
          repliesCount: 0,
          username: "ovmobile",
          avatar: require("~/static/drake.jpg"),
          time: "Mon May 12 2020 19:06:03 GMT+0100",
          comment: "wow python z great \n all hail python",
          likesCount: 20,
          liked: false
        },
        {
          id: 65,
          userId: 3456,
          repliesCount: 4,
          username: "Larry",
          avatar: require("~/static/drake.jpg"),
          time: "Mon May 12 2020 19:06:03 GMT+0100",
          comment: "Google \n is great \n launching \n android 12 \n soon",
          likesCount: 12,
          liked: true
        }
      ],
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
  methods: {
    handleFocus() {
      this.showReplyCommentEmo = false;
      clearTimeout(this.blurTimer);
    },
    handleBlur() {
      this.replyCommentError = "";
      this.blurTimer = setTimeout(() => {
        this.$refs.tagPopup.closePanel();
        this.$refs.mentionPopup.closePanel();
      }, 1100);
    },
    applyDele(index) {
      this.deleteIndex = index;
      this.deleteCommentBottomSheet = true;
    },
    applyReport(index) {
      this.reportIndex = index;
      this.reportCommentBottomSheet = true;
    },
    reportComment() {
      this.reportCommentBottomSheet = false;
      if (this.showComments) {
      } else {
      }
    },
    deleteComment(index) {
      var push;
      this.deleteCommentBottomSheet = false;
      if (this.showComments) {
        // push = {
        //   type: this.postType,
        //   postId: this.commenters[index].id,
        //   userId: this.userId,
        //   comment: this.commenters[index].comment,
        //   isAdd: false
        // };

        var action = {
          type: "COMMENTED",
          actions: {
            type: this.postType,
            postId: this.commenters[index].id,
            userId: this.userId,
            comment: this.commenters[index].comment,
            isAdd: false
          }
        };

        this.$emit("actions", action);

        //  this.finalize_COMMENT(push);

        ////needs to come after
        this.commenters.splice(index, 1);
        this.deleteIndex = -1;
        this.numOfComments--;
      } else {
        this.commentReplies.replies.splice(index, 1);
        this.deleteIndex = -1;
        this.numOfComments--;
      }

      this.commentText = "";

      /**
       * after deleting comment re check db/arrray  if there is any other comment
       * so we would highlight the comment icon
       */
      var mm;
      if (this.showComments) {
        mm = this.commenters.filter(e => {
          return (
            (e.username || "").toLowerCase().indexOf(this.username || "") > -1
          );
        });
      } else {
        mm = this.commentReplies.replies.filter(e => {
          return (
            (e.username || "").toLowerCase().indexOf(this.username || "") > -1
          );
        });
      }

      if (mm == "" || mm.length == 0) {
        this.commented = false;
      } else {
        this.commented = true;
      }
    },
    likeComment(index) {
      if (this.showComments) {
        if (!this.commenters[index].liked) {
          this.commenters[index].liked = true;
          this.commenters[index].likesCount++;
        } else {
          this.commenters[index].liked = false;
          this.commenters[index].likesCount--;
        }
      } else {
        if (!this.commentReplies.replies[index].liked) {
          this.commentReplies.replies[index].liked = true;
          this.commentReplies.replies[index].likesCount++;
        } else {
          this.commentReplies.replies[index].liked = false;
          this.commentReplies.replies[index].likesCount--;
        }
      }
    },

    fetchReplyForComment(
      id,
      userId,
      username,
      avatar,
      time,
      comment,
      repliesCount,
      likes
    ) {
      this.showComments = false;
      this.commentReplies = "";
      var comment = {
        id: id,
        userId: userId,
        time: time,
        likes: likes,
        repliesCount: repliesCount,
        username: username,
        avatar: avatar,
        comment: comment,
        replies: [
          {
            id: 23,
            userId: 1,
            repliesCount: 0,
            username: "ovmobile",
            avatar: require("~/static/drake.jpg"),
            time: "Mon May 12 2020 19:06:03 GMT+0100",
            comment: "wow we at <b>ovmible inc</b> can't wait!!!",
            likesCount: 20,
            liked: true
          },
          {
            id: 23,
            userId: 31,
            repliesCount: 4,
            username: "ovmobile",
            avatar: require("~/static/drake.jpg"),
            time: "Mon May 12 2020 19:06:03 GMT+0100",
            comment: "Nice job guys",
            likesCount: 19,
            liked: true
          }
        ]
      };

      this.commentReplies = comment;
    },
    showReplyCommentBox(index) {
      this.currentReplyComentTextIndex = index;
      this.showReplyCommentSheet = true;
      if (this.showComments) {
        var id = this.commenters[index].id;
        this.replyTarget =
          "Replying " +
          this.commenters[index].username.toUpperCase() +
          "'s comment";
      } else {
        var id = this.commentReplies.replies[index].id;
        this.replyTarget =
          'Replying "' +
          this.commentReplies.replies[index].username.toUpperCase() +
          "'s comment";
      }
    },
    replyComment() {
      if (this.replyCommentText.TEST().isEmpty) {
        this.replyCommentContainsError = true;
        this.replyCommentError = "required";
      } else {
        this.replyCommentContainsError = false;
        this.replyCommentError = "";
      }

      if (this.replyCommentContainsError) {
        return;
      }

      this.replyCommentText = "";

      this.showReplyCommentSheet = false;
      this.showReplyCommentEmo = false;

      if (this.showComments) {
        this.commenters[this.currentReplyComentTextIndex].repliesCount++;
      } else {
        this.commentReplies.replies[this.currentReplyComentTextIndex]
          .repliesCount++;
      }
    },

    wae(val) {},

    getPattern(ss) {},

    getMentionsOrTagsForReplyComment(wow) {
      this.replyCommentText = wow;
    },

    getSelectedMentionsOrTags(val) {},
    getRelpyCommentEmoji(emoji) {
      this.insertChar(
        emoji,
        this.$refs.ReplyCommentBoxRef.$refs.input,
        this.replyCommentText,
        this,
        newText => {
          this.replyCommentText = newText;
        }
      );
    }
  },
  watch: {
    showReplyCommentSheet() {
      if (!this.showReplyCommentSheet) {
        this.replyCommentText = "";
        this.showReplyCommentEmo = false;
      } else {
        //auto focus had to wrap it setimeout
        this.$nextTick(() => {
          setTimeout(() => {
            this.$refs.ReplyCommentBoxRef.$refs.input.focus();
          }, 100);
        });
      }
    },
    canShow(open) {
      if (!open) {
        this.$emit("close", true);
      }
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

    canShowDialog() {
      return this.canShow;
    }
  }
};
</script>

<style lang="scss" scoped>
#delete-comment-wrapper,
#report-comment-wrapper {
  background-color: var(--background-color);
  color: var(--text-color);
  padding: 10px 10px;
  border-radius: 10px 10px 0px 0px;
}

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

#replyCommentBoxCover {
  border-radius: 20px 20px 0px 0px;
  min-height: 100px;
  padding: 10px;
  width: 100%;
  background-color: var(--background-color);
}

#wrapper {
  width: 100vw;
  height: 100vh;
  position: fixed;
}

@media screen and (min-width: 767px) {
  #commentsWrapper,
  #replyWrapper {
    width: 100%;
    height: 90vh;
    background-color: var(--background-color);
    box-shadow: 0px 1px 3px var(--shadow-color),
      -0px -0px 0px var(--shadow-color);
    border-radius: 10px;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    flex-direction: column;
  }

  .commentsheader {
    width: 100%;
    padding: 10px 10px;
    color: var(--text-color);
    font-size: 20px;
    border-radius: 10px 10px 0px 0px;
    box-shadow: 0px 1px 3px var(--shadow-color),
      -0px -0px 0px var(--shadow-color);
  }

  .commentsCount {
    color: var(--subtext-color);
    font-size: 16px;
    font-weight: bold;
    float: right;
  }

  ul {
    padding: 0px;
    list-style: none;
    padding-top: 5px;
    width: 100%;
    margin: auto;
    flex: 1;
    overflow: auto;
  }

  li {
    display: block;
    margin: 0px;
    margin-top: 4px;
    padding: 8px 0px 8px 10px;
    box-shadow: 10px 0px 3px var(--subtext-color);
    -webkit-user-select: none; /* Chrome all / Safari all */
    -moz-user-select: none; /* Firefox all */
    -ms-user-select: none; /* IE 10+ */
    -o-user-select: none;
    user-select: none;
  }

  .comment-items-cover {
    display: -moz-box;
    display: flex;
    display: -ms-flexbox;
    display: -webkit-flex;
  }

  .comment-btns {
    width: 100%;
    display: -moz-box;
    display: flex;
    display: -ms-flexbox;
    display: -webkit-flex;
    margin-top: 5px;
  }

  .comment-btns div {
    flex: 1;
  }

  .comment-btns .actn {
    text-align: right;
    padding-right: 5px;
  }

  .comments-username {
    flex: 1;
    padding-left: 5px;
    color: var(--text-color);
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;

    overflow: hidden;
    text-overflow: ellipsis;

    -webkit-box-align: center;
    -moz-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;

    -webkit-box-pack: left;
    -moz-box-pack: left;
    -ms-flex-pack: left;
    -webkit-justify-content: left;
    justify-content: left;
  }

  .comment-wrapper {
    flex: 1;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    flex-direction: column;
    padding-left: 5px;
  }

  .comments-username {
    color: var(--text-color);
    display: block;
    padding: 3px 0px 0px 0px;
  }

  .comments-comment {
    color: var(--text-color);
    display: block;
    flex: 1;
  }

  #target-comment-cover {
    width: 100%;
    border-radius: 12px 12px 3px 3px;
    padding: 10px;
    color: var(--text-color);
    box-shadow: 0px 1px 3px var(--shadow-color),
      -0px -0px 0px var(--shadow-color);
    -webkit-user-select: none; /* Chrome all / Safari all */
    -moz-user-select: none; /* Firefox all */
    -ms-user-select: none; /* IE 10+ */
    -o-user-select: none;
    user-select: none;
  }

  #target-comment-header {
    color: var(--subtext-color);
    font-style: italic;
  }

  #target-comment-count {
    float: right;
    font-weight: bold;
  }

  #target-comment {
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 0px;
  }

  #close-target-comment {
    height: 40px;
    width: 100%;
    outline-style: none;
    background-color: var(--background-color);
    color: var(--text-color);
    box-shadow: 0px 1px 3px var(--shadow-color),
      -0px -0px 3px var(--shadow-color);
  }

  #commentBoxCover {
    width: 100%;
    padding: 0px 15px;
  }
}

@media screen and (min-width: 320px) and (max-width: 767px) {
  #commentBoxCover {
    width: 100%;
    padding: 0px 15px;
  }

  #commentsWrapper,
  #replyWrapper {
    width: 100%;
    height: 90vh;
    background-color: var(--background-color);
    box-shadow: 0px 1px 3px var(--shadow-color),
      -0px -0px 0px var(--shadow-color);
    border-radius: 10px;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    flex-direction: column;
  }

  .commentsheader {
    width: 100%;
    padding: 10px 10px;
    color: var(--text-color);
    font-size: 20px;
    border-radius: 10px 10px 0px 0px;
    box-shadow: 0px 1px 3px var(--shadow-color),
      -0px -0px 0px var(--shadow-color);
  }

  .commentsCount {
    color: var(--subtext-color);
    font-size: 16px;
    font-weight: bold;
    float: right;
  }

  ul {
    padding: 0px;
    list-style: none;
    padding-top: 5px;
    width: 100%;
    margin: auto;
    flex: 1;
    overflow: auto;
  }

  li {
    display: block;
    margin: 0px;
    margin-top: 4px;
    padding: 5px 0px 5px 10px;
    box-shadow: 10px 1px 3px var(--shadow-color);
    -webkit-user-select: none; /* Chrome all / Safari all */
    -moz-user-select: none; /* Firefox all */
    -ms-user-select: none; /* IE 10+ */
    -o-user-select: none;
    user-select: none;
  }

  .comment-items-cover {
    display: -moz-box;
    display: flex;
    display: -ms-flexbox;
    display: -webkit-flex;
  }

  .comment-btns {
    width: 100%;
    display: -moz-box;
    display: flex;
    display: -ms-flexbox;
    display: -webkit-flex;
    margin-top: 5px;
  }

  .comment-btns div {
    flex: 1;
    white-space: nowrap;
  }

  .comment-btns .actn {
    text-align: right;
    flex: 1;
  }

  .comments-username {
    flex: 1;
    padding-left: 5px;
    color: var(--text-color);
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;

    overflow: hidden;
    text-overflow: ellipsis;

    -webkit-box-align: center;
    -moz-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;

    -webkit-box-pack: left;
    -moz-box-pack: left;
    -ms-flex-pack: left;
    -webkit-justify-content: left;
    justify-content: left;
  }

  .comment-wrapper {
    flex: 1;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    flex-direction: column;
    padding-left: 5px;
  }

  .comments-comment {
    color: var(--text-color);
    display: block;
    flex: 1;
  }

  .comment-wrapper {
    flex: 1;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    flex-direction: column;
    padding-left: 5px;
  }

  .comments-username {
    color: var(--text-color);
    display: block;
    padding: 3px 0px 0px 0px;
  }

  .comments-comment {
    color: var(--text-color);
    display: block;
    flex: 1;
  }

  #target-comment-cover {
    width: 100%;
    border-radius: 12px 12px 3px 3px;
    padding: 10px;
    color: var(--text-color);
    box-shadow: 0px 1px 3px var(--shadow-color),
      -0px -0px 0px var(--shadow-color);
    -webkit-user-select: none; /* Chrome all / Safari all */
    -moz-user-select: none; /* Firefox all */
    -ms-user-select: none; /* IE 10+ */
    -o-user-select: none;
    user-select: none;
  }

  #target-comment-header {
    color: var(--subtext-color);
    font-style: italic;
  }

  #target-comment-count {
    float: right;
    font-weight: bold;
  }

  #target-comment {
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    overflow: auto;
    height: auto;
    max-height: 130px;
  }

  #close-target-comment {
    height: 40px;
    width: 100%;
    outline-style: none;
    background-color: var(--background-color);
    color: var(--text-color);
    box-shadow: 0px 1px 3px var(--shadow-color),
      -0px -0px 3px var(--shadow-color);
    border-radius: 0px 0px 10px 10px;
  }
}
</style>