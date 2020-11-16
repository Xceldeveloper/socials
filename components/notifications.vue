<template>
  <div class="notifications">
    <style>
       :root{
      --accent-color:{{Colors.accent}};
      --text-color:{{Colors.text}};
      --inverttext-color:{{Colors.invertTextColor}};
      --background-color:{{Colors.background}}
  }
    </style>
    <div class="header">
      <v-select
        :dark=" isDarkTheme ? true : false"
        :items="filters"
        v-model.trim="filter"
        :color="Colors.text"
        :item-color="Colors.accent"
        append-icon="mdi-filter-menu"
      ></v-select>
    </div>

    <div v-for="(item,index) in List" :key="index">
      <newfollower
        v-if="item.type == 'New Followers'"
        :index="index"
        :id="item.id"
        :lengthx="notifications.length "
      />
      <newphoto
        v-if="item.type == 'Photo Post'"
        :index="index"
        :id="item.id"
        :lengthx="notifications.length "
      />
      <newvideo
        v-if="item.type == 'Video Post'"
        :index="index"
        :id="item.id"
        :lengthx="notifications.length "
      />
       <newstatus
        v-if="item.type == 'Status Updates'"
        :index="index"
        :id="item.id"
        :lengthx="notifications.length "
      />
       <sharedevent
        v-if="item.type == 'Events'"
        :index="index"
        :id="item.id"
        :lengthx="notifications.length "
      />

       <livevideo
        v-if="item.type == 'Live Video'"
        :index="index"
        :id="item.id"
        :lengthx="notifications.length "
      />
       <newcomment
        v-if="item.type == 'Comments'"
        :index="index"
        :id="item.id"
        :lengthx="notifications.length "
      />
       <newlike
        v-if="item.type == 'Likes'"
        :index="index"
        :id="item.id"
        :lengthx="notifications.length "
      />
        <newreply
        v-if="item.type == 'Replies'"
        :index="index"
        :id="item.id"
        :lengthx="notifications.length "
      />

        <newtag
        v-if="item.type == 'Tagged'"
        :index="index"
        :id="item.id"
        :lengthx="notifications.length "
      />

         <newmention
        v-if="item.type == 'Mention'"
        :index="index"
        :id="item.id"
        :lengthx="notifications.length "
      />

          <newupdate
        v-if="item.type == 'News Update'"
        :index="index"
        :id="item.id"
        :lengthx="notifications.length "
      />

        <newpoll
        v-if="item.type == 'Polls'"
        :index="index"
        :id="item.id"
        :lengthx="notifications.length "
      />

    </div>
  </div>
</template>

<script>
import theme_mixin from "~/mixins/theme_mixin.js";
import newfollower from "~/components/notification/newfollower.vue";
import newphoto from "~/components/notification/newphoto.vue";
import newvideo from "~/components/notification/newvideo.vue";
import newstatus from "~/components/notification/newstatus.vue";
import sharedevent from "~/components/notification/sharedevent.vue";
import livevideo from "~/components/notification/livevideo.vue";
import newcomment from "~/components/notification/newcomment.vue";
import newlike from "~/components/notification/newlike.vue";
import newreply from "~/components/notification/newreply.vue";
import newtag from "~/components/notification/newtag.vue";
import newmention from "~/components/notification/newmention.vue";
import newupdate from "~/components/notification/newupdate.vue";
import newpoll from "~/components/notification/newpoll.vue";
export default {
  mixins: [theme_mixin],
  components: {
    newfollower,
    newphoto,
    newvideo,
    newstatus,
    sharedevent,
    livevideo,
    newcomment,
    newlike,
    newreply,
    newtag,
    newmention,
    newupdate,
    newpoll
  },
  head() {
    const title = "Your Notifications";
    return {
      title
    };
  },
  data() {
    return {
      filter:'All',
      filters:["All","Photo Post","Video Post","New Followers","Status Updates","Events","Live Video","Likes","Comments","Tagged","Mention","Polls","News Update","Replies"],
      notifications: [
        {
          id: 1,
          type: "New Followers"
        },
          {
          id: 1,
          type: "Replies"
        },
         {
          id: 1,
          type: "Status Updates"
        },
         {
          id: 1,
          type: "Events"
        },
        {
          id: 1,
          type: "Likes"
        },
        {
          id: 1,
          type: "Photo Post"
        },
        {
          id: 1,
          type: "Tagged"
        },
        {
          id: 1,
          type: "Comments"
        },
        {
          id: 1,
          type: "Mention"
        },
         {
          id: 1,
          type: "Live Video"
        },
         {
          id: 1,
          type: "Polls"
        },
        {
          id: 1,
          type: "Video Post"
        },
         {
          id: 1,
          type: "News Update"
        },
      ]
    };
  },

  mounted() {
    //this.$bus.$emit("routing", this.$route.name);
  },

  methods: {
    upload() {
      this.$router.push("/home/upload");
    }
  },
  computed:{
    List(){
      var filtered = this.notifications.filter(e => {
          return (
            (e.type || "").toLowerCase().indexOf((this.filter || "").toLowerCase()) > -1
          );
        });
      return this.filter == "All" ? this.notifications : filtered
    }
  }
};
</script>

<style  lang="scss" scoped>
.notifications {
  width: 100%;
  height: 100%;
  background-color: var(--background-color);
  overflow: auto;
  padding: 10px 0px 0px 0px;
}


.header {
  height: 50px;
  width: 100%;
  padding-right: 80%;
  padding-left: 5%;
}


@media screen and (min-width: 320px) and (max-width: 767px) {
  .header {
    height: 50px;
    width: 100%;
    padding-right: 35%;
    padding-left: 5%;
  }

}



//for iphone X and others needs to come last or it would confilct with laptop screen
@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: landscape) {
  .header {
    height: 50px;
    width: 100%;
    padding-right: 35%;
    padding-left: 5%;
  }

}
</style>

