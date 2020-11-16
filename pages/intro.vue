<template>
  <div id="intro">
    <div id="intro-cover">
      <v-carousel
        v-model="model"
        height="100vh"
        cycle
        hide-delimiter-background="true"
        color="red"
        :show-arrows="this.isMobile==true ? false:true"
      >
        <v-carousel-item v-for="(color, i) in colors" :key="color">
          <v-sheet :color="color" height="100%" tile>
            <v-row class="fill-height" align="center" justify="center">
              <div class="display-3">Slide {{ i + 1 }}</div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </div>
    <div id="btncover">
      <button id="signin" @click="signin">SIGN IN</button>
      <button id="explore" @click="explore">EXPLORE</button>
    </div>
  </div>
</template>

<script>
import device_mixin from "~/mixins/device_mixin.js";
export default {
  mixins: [device_mixin],
  data() {
    return {
      colors: ["primary", "secondary", "yellow darken-2", "red", "orange"],
      model: 0
    };
  },

  methods: {
    explore() {
      this.$router.push("/home");
    },
    signin() {
      this.$router.push("/gateway");
    }
  }
};
</script>

<style>
#intro {
  width: 100%;
  height: 100vh;
}

#intro-cover {
  width: 100%;
  height: 100%;
}

#btncover {
  position: fixed;
  bottom: 50px;
  width: 100%;

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

@media screen and (min-width: 768px) {
  #signin {
    width: 300px;
    height: auto;
    padding: 15px;
    border: 4px;
    border-radius: 10px 0px 0px 10px;
    font-weight: bold;
    background-color: white;
    color: black;
    box-shadow: 1px 1px 5px black;
    margin: 0px;
    outline-style: none;
  }

  #explore {
    width: 300px;
    height: auto;
    padding: 15px;
    border: 4px;
    border-radius: 0px 10px 10px 0px;
    font-weight: bold;
    color: white;
    background-color: black;
    box-shadow: 1px 1px 5px black;
    margin: 0px;
    outline-style: none;
  }
}

@media screen and (min-width: 320px) and (max-width: 767px) {
  #btncover {
    flex-direction: column;
  }

  #signin {
    width: 60%;
    height: auto;
    padding: 7px;
    border: 4px;
    border-radius: 10px;
    font-weight: bold;
    background-color: white;
    color: black;
    box-shadow: 1px 1px 5px black;
    margin: 0px;
    outline-style: none;
  }

  #explore {
    width: 60%;
    height: auto;
    padding: 7px;
    border: 4px;
    border-radius: 10px;
    font-weight: bold;
    color: white;
    background-color: black;
    box-shadow: 1px 1px 5px black;
    margin-top: 7px;
    outline-style: none;
  }
}
</style>