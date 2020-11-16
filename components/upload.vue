<template>
  <div class="upload">
    <style>
       :root{
      --accent-color:{{Colors.accent}};
      --text-color:{{Colors.text}};
      --inverttext-color:{{Colors.invertTextColor}};
      --background-color:{{Colors.background}}
  }
    </style>

    <div class="upload-btn-cover">
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <button class="upload-btn" v-on="on" @click="showImageUploader = !showImageUploader">
            <span class="mdi mdi-camera"></span>
          </button>
        </template>
        <span>Upload Photo</span>
      </v-tooltip>

      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <button class="upload-btn" v-on="on">
            <span class="mdi mdi-video"></span>
          </button>
        </template>
        <span>Upload Video</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <button class="upload-btn" v-on="on">
            <span class="mdi mdi-note"></span>
          </button>
        </template>
        <span>Upload Status</span>
      </v-tooltip>

      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <button class="upload-btn" v-on="on">
            <span class="mdi mdi-map-marker-radius"></span>
          </button>
        </template>
        <span>Share Location</span>
      </v-tooltip>
    </div>
    <v-container grid-list-xs>
      <v-row align="center" justify="center">
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn icon v-on="on" :color="Colors.text" outlined width="50px" height="50px">
              <v-icon :color="Colors.text">mdi-close</v-icon>
            </v-btn>
          </template>
          <span>Abort Upload</span>
        </v-tooltip>
      </v-row>Uploading Images...(2 of 5)
      <v-progress-linear buffer-value="60" value="40" stream :color="Colors.text" rouded></v-progress-linear>
    </v-container>


      <imageuploader 
      :aspectRatios='["1:1","3:4","16:9"]'
      :showPicker="showImageUploader" @onFinished="imageResults" @onAbort="imageResults" />

  </div>
</template>

<script>
import theme_mixin from "~/mixins/theme_mixin.js";
import imageuploader from "~/components/upload/imageuploader.vue";
export default {
  components: {
    imageuploader
  },
  mixins: [theme_mixin],
  head() {
    const title = "upload";
    return {
      title
    };
  },
  data() {
    return {
      showImageUploader: false,
      images:[],
    };
  },

  mounted() {
    
  },

  methods: {
    upload() {
      this.$router.push("/home/upload");
    },
    imageResults(result = []) {
      this.showImageUploader = false;
      if(result.length > 0)
      this.images = []
     // console.log(result + "image results");
     console.log(result.caption)
    }
  }
};
</script>

<style  lang="scss" scoped>
.upload {
  width: 100%;
  height: 100%;
  background-color: var(--background-color);
  overflow: auto;
  color: var(--text-color);
}

@media screen and (min-width: 767px) {
  .upload-btn-cover {
    width: 100%;
    height: 80%;
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

  img {
    width: 70%;
    margin: auto;
    height: auto;
    display: block;
    margin-top: 10px;
  }

  .upload-btn {
    width: 220px;
    height: 220px;
    border-radius: 50%;
    margin-right: 20px;
    font-size: 100px;
    font-weight: bold;
    font-family: cursive;
    color: var(--background-color);
    outline-style: none;
    border: 7px solid var(--background-color);
    background-color: var(--text-color);
    box-shadow: 0px 1px 5px var(--text-color), -0px -0px 0px var(--text-color);
  }
}

@media screen and (min-width: 320px) and (max-width: 767px) {
  .upload-btn-cover {
    width: 100%;
    height: 60%;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    flex-direction: column;
    overflow: auto;
    flex-wrap: wrap;
    padding-top: 10px;
    margin-top: 15%;
    margin-bottom: 15%;
  }

  .upload-btn {
    width: 140px;
    height: 140px;
    border-radius: 50%;
    margin: auto;
    display: block;
    font-size: 50px;
    font-weight: bold;
    font-family: cursive;
    color: var(--background-color);
    outline-style: none;
    margin-top: 10px;
    border: 7px solid var(--background-color);
    background-color: var(--text-color);
    box-shadow: 0px 1px 3px var(--text-color), -0px -0px 0px var(--text-color);
  }
}

//for iphone X and others needs to come last or it would confilct with laptop screen
@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) {
  .upload-btn-cover {
    width: 100%;
    height: 50%;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    flex-direction: column;
    overflow: auto;
    flex-wrap: wrap;
    padding-top: 10px;
    margin-top: 28%;
    margin-bottom: 28%;
  }

  .upload-btn {
    width: 140px;
    height: 140px;
    border-radius: 50%;
    margin: auto;
    display: block;
    font-size: 50px;
    font-weight: bold;
    font-family: cursive;
    color: var(--background-color);
    outline-style: none;
    margin-top: 10px;
    border: 7px solid var(--background-color);
    background-color: var(--text-color);
    box-shadow: 0px 1px 3px var(--text-color), -0px -0px 0px var(--text-color);
  }
}
</style>

