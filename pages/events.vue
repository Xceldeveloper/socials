<template>
  <div id="events">
    <v-app-bar
      absolute
      :color="Colors.background"
      shrink-on-scroll
      :height="this.isMobile==true ? '130px' : '250px'"
      scroll-target="#scrolling-techniques"
    >
      <v-btn icon>
        <v-icon :color="Colors.text">mdi-calendar-multiple</v-icon>
      </v-btn>
      <v-toolbar-title>
        <span :style="{color:Colors.text}">Events</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon to="/home">
        <v-icon :color="Colors.text">mdi-home-outline</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon :color="Colors.text">mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
    <v-sheet
      :color="Colors.background"
      id="scrolling-techniques"
      class="overflow-y-auto"
      max-height="100vh"
    >
      <v-container style="height: 1000px;"></v-container>
    </v-sheet>
  </div>
</template>

<script>
import theme_mixin from "~/mixins/theme_mixin.js";
import device_mixin from "~/mixins/device_mixin.js";
export default {
  mixins: [theme_mixin, device_mixin]
};
</script>
<style lang="scss" scoped>
#events {
  width: 100%;
  height: 100vh;
}
</style>