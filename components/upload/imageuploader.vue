<template>
  <div class="uploadimage" v-if="canShow">
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <div class="dialog-wrapper">
        <v-app-bar color="rgba(0,0,0,0.3)" dark absolute>
          <v-btn icon @click="closePicker">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Image Picker</v-toolbar-title>
          <v-spacer></v-spacer>
           
   <v-tooltip bottom>
     <template v-slot:activator="{ on }">
         <v-btn icon v-on="on"  @click="showFileChooser">
            <v-icon>mdi-image-plus</v-icon>
          </v-btn>
        </template>
        <span>Add Image</span>
   </v-tooltip>

         
         
         
            <v-tooltip bottom v-if="images.length > 0" dark>
        <template v-slot:activator="{ on }">
           <v-btn icon  v-on="on" @click="remove" dark>
            <v-icon>mdi-trash-can-outline</v-icon>
          </v-btn>
        </template>
        <span>Remove image</span>
            </v-tooltip>

        </v-app-bar>
        <div id="u-container">
          <div
            v-if="images.length > 0"
            class="image-container"
            :style="{backgroundImage:'url('+images[currentImageIndex].pic+')'}"
          ></div>

          <div class="actions">
            <v-btn
              color="#ffffff"
              light
              size="50px"
              absolute
              top
              right
              fab
              @click="finished"
              v-if="images.length > 0"
            >
              <v-icon>mdi-send</v-icon>
            </v-btn>

           
            <input
              style="display:none"
              ref="input"
              type="file"
              name="image"
              accept="image/*"
              @change="getImage"
            />

            <v-row justify="center" align="center">
            
          



      

             <v-bottom-sheet  dark max-width="550px">
      <template v-slot:activator="{ on }">
      <v-btn icon v-on="on" dark>
            <v-icon color="#ffffff">mdi-text</v-icon>
          </v-btn>
      </template>

            <v-textarea 
                  label="Caption"
                  name="Caption"
                  v-model="caption"
                  rows="2"
                  clearable
                  dark
                  counter="250"
                  outlined 
                  rounded
                  auto-grow
                  row-height="15"
                ></v-textarea>
             </v-bottom-sheet>


            
            <v-tooltip bottom  v-if="images.length > 0" dark>
        <template v-slot:activator="{ on }">
          
             <v-btn icon v-on="on" @click="showCropper = !showCropper" dark>
            <v-icon color="#ffffff">mdi-crop</v-icon>
          </v-btn>
        </template>
         <span>Crop Photo</span>
            </v-tooltip>
      
           <v-tooltip bottom  v-if="images.length > 0" dark>
        <template v-slot:activator="{ on }">
          
            <v-btn icon  v-on="on"  @click="showCropper = !showCropper" dark>
            <v-icon color="#ffffff">mdi-emoticon-excited-outline</v-icon>
          </v-btn>

        </template>
         <span>Add Emoji</span>
            </v-tooltip>
      


   <v-tooltip bottom  v-if="images.length > 0" dark>
        <template v-slot:activator="{ on }">
          
             <v-btn icon v-on="on" @click="showCropper = !showCropper" dark>
            <v-icon color="#ffffff">mdi-draw</v-icon>
          </v-btn>

        </template>
         <span>Draw on Photo</span>
            </v-tooltip>


 <v-tooltip bottom  v-if="images.length > 0" dark>
        <template v-slot:activator="{ on }">
            <v-btn icon v-on="on" @click="showCropper = !showCropper" dark>
            <v-icon color="#ffffff">mdi-image-filter-black-white</v-icon>
          </v-btn>
        </template>
         <span>Add filter to images</span>
            </v-tooltip>
           
         
         

         

             
            </v-row>

            <div class="motiffs" v-if="images.length > 0">
              <v-slide-group show-arrows dark mobile-break-point="320px" center-active>
                <v-slide-item v-for="(tag,index) in images" :key="index">
                  <div
                    class="pics"
                    :class="{'active-pic': currentImageIndex == index}"
                    :style="{backgroundImage:'url('+tag.pic+')'}"
                    @click="setImage(index)"
                  ></div>
                </v-slide-item>
              </v-slide-group>
            </div>
          </div>
        </div>
        <div id="image-editor" v-if="showCropper">
          <div class="crop-header">
            <v-app-bar color="#000000" dark dense>
              <v-btn icon @click="showCropper = !showCropper">
                <v-icon>mdi-close</v-icon>
              </v-btn>
              <v-toolbar-title>Crop Image</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn color="#000000" @click="done" v-if="hasCropped">Done</v-btn>
              <v-btn icon @click="crop">
                <v-icon>mdi-crop</v-icon>
              </v-btn>
              <v-btn icon @click="reverse">
                <v-icon>mdi-undo</v-icon>
              </v-btn>
            </v-app-bar>
          </div>
          <div class="cropper-container">
            <vue-cropper
              ref="cropper"
              :minCropBoxWidth="200"
              :minCropBoxHeight="200"
              :src="images[currentImageIndex].pic"
              :viewMode="1"
              :autoCropArea="1"
              :aspectRatio="initAspectRatio"
              :containerStyle="stylex"
              :guides="false"
            />
          </div>
          <div class="crop-footer">
            <v-row align="center" justify="center">
              <v-btn v-for="(ratio,index) in aspectRatios" :key="index" color="#000000" dark @click="setAspectRatio(ratio)">
              <v-icon v-if="ratio == '0' || ratio == '0:0'">mdi-crop-free</v-icon>
              <span v-else > {{ratio}}</span>
              </v-btn>
            </v-row>
          </div>
        </div>
      </div>
    </v-dialog>
  </div>
</template>

<script>
import VueCropper from "vue-cropperjs";
import "cropperjs/dist/cropper.css";
export default {
  components: { VueCropper },
  props: {
    onFinished: {
      type: Function
    },
    showPicker: {
      type: Boolean,
      default: true
    },
    aspectRatios: {
      type: Array,
      default: ["0:0","1:1","16:9","3:4"]
    }
  },
  data() {
    return {
      canShow: this.showPicker,
      dialog: true,
      showCropper: false,
      croppedImg: "",
      hasCropped: false,
      currentImageIndex: -1,
      images: [],
      caption:"",
      stylex: {
        height: "100%",
        width: "100%"
      }
    };
  },

  mounted() {
    console.log(this.showImageUploader);
  },
  methods: {
    setImage(index) {
      this.currentImageIndex = index;
    },
    crop() {
      var imgx = this.$refs.cropper.getCroppedCanvas().toDataURL();
      this.croppedImg = imgx;
      this.$refs.cropper.replace(imgx, false);
      this.hasCropped = true;
    },
    done() {
      this.images[this.currentImageIndex].pic = this.croppedImg;
      this.showCropper = false;
      this.croppedImg = "";
    },
    setAspectRatio(aspectRatio) {
      if(aspectRatio !== '0' || aspectRatio !== '0:0'){
      var ratios = aspectRatio.split(":");
       var a = parseInt(ratios[0]), b = parseInt(ratios[1]);
      this.$refs.cropper.setAspectRatio(a/b);
      }else{
        this.$refs.cropper.setAspectRatio(0);
      }
    },
    reverse() {
      this.$refs.cropper.reset();
      this.hasCropped = false;
    },

    remove() {
      this.images.splice(this.currentImageIndex, 1);
      if (this.images.length > 0) {
        this.setImage(0);
      } else {
        this.closePicker();
      }
    },
    closePicker() {
      this.$emit("onAbort", []);
    },
    finished() {
      var result = {
        caption:this.caption,
        images:this.images
      }
      this.$emit("onFinished", result);
    },

    getImage(e) {
      var file;
      try {
        file = e.target.files[0];
      } catch (error) {
        this.canShow = false;
      }
      if (file.type.indexOf("image/") === -1) {
        alert("Please select an image file");
        return;
      }
      if (typeof FileReader === "function") {
        const reader = new FileReader();
        reader.onload = event => {
          //  this.imgSrc = event.target.result;
          this.images.push({
            pic: event.target.result
          });
          this.currentImageIndex = this.images.length - 1;
          // rebuild cropperjs with the updated source
          //  this.$refs.cropper.replace(event.target.result);
          
        };
        reader.readAsDataURL(file);
      } else {
        alert("Sorry, FileReader API not supported");
      }
    },
    showFileChooser() {
      this.$refs.input.click();
    }
  },

  computed:{
    initAspectRatio(){
      var aspectRatio = this.aspectRatios[0];
       if(aspectRatio !== '0' || aspectRatio !== '0:0'){
      var ratios = aspectRatio.split(":");
       var a = parseInt(ratios[0]), b = parseInt(ratios[1]);
     // this.$refs.cropper.setAspectRatio(a/b);
      return a/b
      }else{
        this.$refs.cropper.setAspectRatio(0);
        return 0;
      }
    }
  },

  watch: {
    showPicker: function() {
      this.canShow = this.showPicker;
      if (this.canShow) {
        if (this.images.length <= 1)
          setTimeout(() => {
            this.$refs.input.click();
          }, 100);
      } else {
        this.images = [];
        this.caption = "";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.uploadimage {
  width: 100%;
  height: 100%;
  background-color: var(--background-color);
  overflow: auto;
  color: var(--text-color);
}
.dialog-wrapper {
  width: 100%;
  height: 100%;
  background-color: #000000;
}
#u-container {
  width: 34%;
  height: 100%;
  margin: auto;
  position: relative;
}

.image-container {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  background-size: contain;
  background-position: center;
}

.actions {
  width: 100%;
  height: 120px;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  bottom: 0px;
  left: 0px;
}

.motiffs {
  width: 100%;
  height: auto;
  overflow: auto;
  white-space: nowrap;
  padding: 0px;
  margin: 0px;
}

.pics {
  width: 60px;
  height: 80px;
  margin: 0px;
  margin-left: 5px;
  padding: 0px;
  display: inline-block;
  background-size: contain;
  background-position: center;
}

.active-pic {
  border: 2px solid white;
}

@media screen and (min-width: 320px) and (max-width: 1024px) {
  #u-container {
    width: 100%;
    height: 100%;
    margin: auto;
    position: relative;
  }
}

#image-editor {
  width: 100%;
  height: 100%;
  background-color: #000000;
  position: fixed;
  top: 0px;
  z-index: 100;
  display: -moz-box;
  display: flex;
  display: -ms-flexbox;
  display: -webkit-box;
  flex-direction: column;
}

.crop-header {
  width: 100%;
  height: 48px;
}
.cropper-container {
  width: 100%;
  flex: 1;
}

.crop-footer {
  width: 100%;
  height: 50px;
}
</style>