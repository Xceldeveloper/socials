<template>
  <v-menu open-on-hover :close-on-click="false" :close-on-content-click="false" offset-y>
    <template v-slot:activator="{ on }">
      <img v-on="on" id="avatar" :src="avatar" alt />
    </template>
    <div id="small-profile-container">
      <img :src="avatar" alt id="small-avatar" />

      <span class="small-box-username">{{username}}</span>

      <span class="small-box-fullname">{{fullname}}</span>

      <v-btn
        small
        block
        @click="gotoProfile"
        :dark="isDarkTheme ? true : false"
        :text-color="Colors.text"
      >view profile</v-btn>
    </div>
  </v-menu>
</template>

<script>
import theme_mixin from "~/mixins/theme_mixin.js";
export default {
  mixins: [theme_mixin],
  props: ["userId"],
  data() {
    return {
      avatar: require("~/static/drake.jpg"),
      fullname: "Ted Mosbi",
      username: "Tedx"
    };
  },
  methods: {
    gotoProfile() {}
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
#avatar {
  height: 45px;
  width: 45px;
  padding: 0px;
  border-radius: 50%;
  margin: 5px 5px;
  cursor: pointer;
  border: 2px solid var(--background-color);
  box-shadow: 0px 1px 4px var(--shadow-color);
}

#small-profile-container {
  width: 190px;
  height: auto;
  background-color: var(--background-color);
  box-shadow: 0px 1px 3px var(--shadow-color), -0px -0px 0px var(--shadow-color);
}

#small-avatar {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  display: block;
  margin: auto;
  padding: 2px;
  border: 2px solid var(--text-color);
  box-shadow: 0px 1px 3px var(--shadow-color), -0px -0px 0px var(--shadow-color);
}

.small-box-username {
  width: 100%;
  display: block;
  text-align: center;
  color: var(--text-color);
}

.small-box-fullname {
  width: 100%;
  display: block;
  text-align: center;
  font-size: 14px;
  color: var(--subtext-color);
  margin-bottom: 10px;
}
</style>