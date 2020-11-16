<template>
  <v-dialog v-model="canShow" :width="dynamicWidth">
    <div id="repostsWrapper">
      <div class="repostsheader">
          Reposts
        <span class="repostsCount">{{numOfReposts}}</span>
      </div>
      <ul>
        <li v-for="(item,index) in likers" :key="index">
          <div class="reposts-items-cover">
            <popupavatar :userId="item.userId" />
            <span class="reposts-username">
              {{item.userId == getUser.id ? 'You' : item.username }}
              <span
                :style="{color:Colors.subTextColor,fontSize:'14px'}"
              >- {{setPostTime(moment,item.time,true,true)}}</span>
            </span>
          </div>
        </li>
      </ul>
    </div>
  </v-dialog>
</template>
<script>
import theme_mixin from "~/mixins/theme_mixin.js";
import device_mixin from "~/mixins/device_mixin.js";
import user_mixin from "~/mixins/user_mixin.js";
import popupavatar from "~/components/utils/popupavatar.vue";
import utils_mixin from "~/mixins/utils_mixin.js";
const moment = require("moment-timezone");
import { CONSTANTS } from "~/assets/libs/constants.js";
export default {
  components: {
    popupavatar
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
      numOfReposts: 1243,
      likers: [
        {
          id: 20,
          userId: 1,
          username: "ovecomer",
          avatar: require("~/static/drake.jpg"),
          time: "Mon May 12 2020 19:06:03 GMT+0100"
        },
        {
          id: 56,
          userId: 3456,
          username: "bezos",
          avatar: require("~/static/drake.jpg"),
          time: "Mon May 12 2020 19:06:03 GMT+0100"
        },
        {
          id: 6,
          userId: 35,
          username: "jack",
          avatar: require("~/static/drake.jpg"),
          time: "Mon May 12 2020 19:06:03 GMT+0100"
        }
      ]
    };
  },

  methods: {

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
    }
  },
    watch:{
    canShow(open){
     if(!open){
      this.$emit("close", true);
     }
    
    }
  }
};
</script>
<style lang="scss" scoped>
#repostsWrapper {
  width: 100%;
  height: 90vh;
  background-color: var(--background-color);
  box-shadow: 0px 1px 3px var(--shadow-color), -0px -0px 0px var(--shadow-color);
  border-radius: 10px;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
}

.repostsheader {
  width: 100%;
  padding: 10px 10px;
  color: var(--text-color);
  font-size: 20px;
  border-radius: 10px 10px 0px 0px;
  box-shadow: 0px 1px 3px var(--shadow-color), -0px -0px 0px var(--shadow-color);
}

.repostsCount {
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

.reposts-items-cover {
  display: -moz-box;
  display: flex;
  display: -ms-flexbox;
  display: -webkit-flex;
}

.reposts-username {
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
</style>