export default {
  data() {
    return {
      isMobile: false,
      isTablet: false,
      isLaptop: false,
      isDesktop: false,
      is4kMax: false,
      deviceOrientation: {
        landscape: false,
        portrait: false
      },
      Platform: '',
    }
  },
  created() {

  },
  mounted() {

    this.checkOrientation();
    this.checkOsPlatform();
    // this.checkScreenSize();
    // // this.checkScreenSizex();
    this.forScreen();

    //this.checkScreenSizex();
    window.addEventListener('resize', this.forScreen, {
      passive: true
    });
  },

  beforeDestroy() {
    if (typeof window !== "undefined")
      window.removeEventListener("resize", this.forScreen, {
        passive: true
      });
  },
  methods: {
    checkScreenSizex() {
      if (window.matchMedia("screen and (min-device-width: 320px) and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2) ").matches) {
        this.isMobile = true;
        this.isTablet = false;
        this.isLaptop = false;
        /* ----------- iPhone 5, 5S, 5C and 5SE ----------- */
      } else if (window.matchMedia("screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2)").matches) {
        this.isMobile = true;
        this.isTablet = false;
        this.isLaptop = false;
        /* ----------- iPhone 6, 6S, 7 and 8 ----------- */
      } else if (window.matchMedia("screen and (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3)").matches) {
        this.isMobile = true;
        this.isTablet = false;
        this.isLaptop = false;
        /* ----------- iPhone 6+, 7+ and 8+ ----------- */
      } else if (window.matchMedia("screen and (device-width: 360px) and (device-height: 640px) and (-webkit-device-pixel-ratio: 2)").matches) {
        this.isMobile = true;
        this.isTablet = false;
        this.isLaptop = false;
        /* ----------- Galaxy S3 ----------- */

      } else if (window.matchMedia("screen and (min-device-width: 375px) and (max-device-width: 812px)  and (-webkit-min-device-pixel-ratio: 3)").matches) {
        this.isMobile = true;
        this.isTablet = false;
        this.isLaptop = false;
        /* ----------- iPhone X ----------- */
      } else if (window.matchMedia("screen and (device-width: 320px) and (device-height: 640px) and (-webkit-device-pixel-ratio: 3)").matches) {
        this.isMobile = true;
        this.isTablet = false;
        this.isLaptop = false;
        /* ----------- Galaxy S4, S5 and Note 3 ----------- */
      } else if (window.matchMedia("screen and (device-width: 360px) and (device-height: 640px) and (-webkit-device-pixel-ratio: 4)").matches) {
        this.isMobile = true;
        this.isTablet = false;
        this.isLaptop = false;
        /* ----------- Galaxy S6 ----------- */
      } else if (window.matchMedia("screen and (device-width: 360px) and (device-height: 640px) and (-webkit-device-pixel-ratio: 3)").matches) {
        this.isMobile = true;
        this.isTablet = false;
        this.isLaptop = false;
        /* ----------- Google Pixel  HTC One----------- */
      } else if (window.matchMedia("screen and (device-width: 360px) and (device-height: 640px) and (-webkit-device-pixel-ratio: 4)").matches) {
        this.isMobile = true;
        this.isTablet = false;
        this.isLaptop = false;
        /* ----------- Google Pixel XL ----------- */
      } else if (window.matchMedia("screen and (device-width: 480px) and (device-height: 800px)").matches) {
        this.isMobile = true;
        this.isTablet = false;
        this.isLaptop = false;
        /* ----------- Windows Phone ----------- */
      } else if (window.matchMedia("screen and min-device-width: 320px and (max-device-width: 600px)").matches) {
        this.isMobile = true;
        this.isTablet = false;
        this.isLaptop = false;
        /*----------All small Screens-------*/
        /*Tablets*/
      } else if (window.matchMedia("screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1)").matches) {
        this.isTablet = true;
        this.isMobile = false;
        this.isLaptop = false;
        /* ----------- iPad 1, 2, Mini and Air ----------- */
      } else if (window.matchMedia("screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2)").matches) {
        this.isTablet = true;
        this.isMobile = false;
        this.isLaptop = false;
        /* ----------- iPad 3, 4 and Pro 9.7" ----------- */
      } else if (window.matchMedia("screen and (min-device-width: 834px) and (max-device-width: 1112px)and (-webkit-min-device-pixel-ratio: 2)").matches) {
        this.isTablet = true;
        this.isMobile = false;
        this.isLaptop = false;
        /* ----------- iPad Pro 10.5" ----------- */
        /*declare same property for portarait and landscape respectively*/
      } else if (window.matchMedia("screen and (min-device-width: 1024px) and (max-device-width: 1366p and (-webkit-min-device-pixel-ratio: 2)").matches) {
        this.isTablet = true;
        this.isMobile = false;
        this.isLaptop = false;
        /* ----------- iPad Pro 12.9" ----------- */
        /*declare same property for portarait and landscape respectively*/
        /* Source: https://medium.com/connect-the-dots/css-media-queries-for-ipad-pro-8cad10e17106*/
      } else if (window.matchMedia("(min-device-width: 800px) and (max-device-width: 1280px)").matches) {
        this.isTablet = true;
        this.isMobile = false;
        this.isLaptop = false;
        /* ----------- Galaxy Tab 2 ----------- */
      } else if (window.matchMedia(" (min-device-width: 800px) and (max-device-width: 1280px)and (-webkit-min-device-pixel-ratio: 2)").matches) {
        this.isTablet = true;
        this.isMobile = false;
        this.isLaptop = false;
        /* ----------- Galaxy Tab S ----------- */
      } else if (window.matchMedia("screen and (min-device-width: 767px) and (max-device-width: 1024px)").matches) {
        this.isTablet = true;
        this.isMobile = false;
        this.isLaptop = false;
        /*All Tablet Screens*/
        /**Laptops */
      } else if (window.matchMedia("screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 1)").matches) {
        this.isLaptop = true;
        this.isMobile = false;
        this.isTablet = false;
        /**All non retina Screens Laptop */
      } else if (window.matchMedia("screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 2)and (min-resolution: 192dpi) ").matches) {
        this.isLaptop = true;
        this.isMobile = false;
        this.isTablet = false;
        /**All  retina Screens Laptop */
      }
    },
    checkOrientation() {
      this.deviceOrientation.landscape = window.matchMedia("(orientation:landscape)").matches;
      this.deviceOrientation.portrait = window.matchMedia("(orientation:portrait)").matches;
      window.addEventListener("orientationchange", () => {
        if (window.matchMedia("(orientation: portrait)").matches) {
          this.deviceOrientation.landscape = true;
          this.deviceOrientation.portrait = false;
          this.forScreen();
          //  alert(this.deviceOrientation.landscape);
        } else if (window.matchMedia("(orientation: landscape)").matches) {
          this.deviceOrientation.portrait = true;
          this.deviceOrientation.landscape = false;
          this.forScreen();
          //    alert(this.deviceOrientation.portrait);
        }

      }, false);
    },
    checkOsPlatform() {
      var isDeviceType = (/iPad/i).test(navigator.userAgent) ?
        "iOS" : (/iPhone/i).test(navigator.userAgent) ?
        "iOS" : (/Android/i).test(navigator.userAgent) ?
        "Android" : (/BlackBerry/i).test(navigator.userAgent) ?
        "Windows" : (/Windows/i).test(navigator.userAgent) ?
        "BlackBerry" : "Browser";
      // this.isDeviceType = isDeviceType;
      this.Platform = isDeviceType;


    },
    checkScreenSize() {
      this.isMobile = this.$vuetify.breakpoint.xsOnly;
      this.isTablet = this.$vuetify.breakpoint.smOnly;
      this.isLaptop = this.$vuetify.breakpoint.mdOnly;
      this.isDesktop = this.$vuetify.breakpoint.lgOnly;
      this.is4KMAX = this.$vuetify.breakpoint.xlOnly;
      //

      //alert(window.innerWidth)
    },
    forScreen(){
      this.checkScreenSize();
      this.checkScreenSizex();
    }
  }
}
