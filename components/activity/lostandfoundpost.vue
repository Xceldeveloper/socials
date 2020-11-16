<template>
  <div id="lost-and-found">
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
    >
      <template v-slot:mini>
          Missing
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
      //type: Object
    },
    scrolling: {
      type: Boolean
    },
    keyPressed: {
      type: Object
    }
  },

  data(){

  return{
       isFullScreen: false,
      float: false,
      limited: true,
      getKey: "",
  }
  },
  
  mounted() {
   
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
       
      } else if (pos.inside) {
    
      } else if (pos.bottom) {
       
      }
    },

  }


}
</script>

<style lang="scss" scoped>
#lost-and-found{
    width:auto;
    height: auto;
    display: block;
    margin: auto;

}

</style>