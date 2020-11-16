<template>
  <div id="cover">
    <div id="image-view-pager" ref="imagecover">
      <img v-for="(item,index) in images" :src="item.src" :key="index" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      default: []
    },
    leaving:{
        type:Boolean,
        default:false
    }
  },
  data() {
    return {
      TFN: {
        // can remove these if not used
        linear: function(k) {
          return k;
        },
        "ease-in": function(k, e = 1.675) {
          return Math.pow(k, e);
        },
        "ease-out": function(k, e = 1.675) {
          return 1 - Math.pow(1 - k, e);
        },
        "ease-in-out": function(k) {
          return 0.5 * (Math.sin((k - 0.5) * Math.PI) + 1);
        },
        "bounce-out": function(k, a = 2.75, b = 1.5) {
          return (
            1 -
            Math.pow(1 - k, a) *
              Math.abs(Math.cos(Math.pow(k, b) * (n + 0.5) * Math.PI))
          );
        }
      },
      i: 0,
      x0: null,
      locked: false,
      w: 0,
      ini: 0,
      fin: 0,
      rID: null,
      anf: null,
      n: null,
      N: 0,
      NF: 30,
      imageParent: null
    };
  },
  mounted() {
    this.imageParent = this.$refs.imagecover;
    this.size();

    this.imageParent.addEventListener("resize", this.size, false);
    this.imageParent.addEventListener("mousedown", this.lock, false);
    this.imageParent.addEventListener("touchstart", this.lock, false);
    this.imageParent.addEventListener("mousemove", this.drag, false);
    this.imageParent.addEventListener("touchmove", this.drag, false);
    this.imageParent.addEventListener("mouseup", this.move, false);
    this.imageParent.addEventListener("touchend", this.move, false);

    this.initPager();
  },
  methods: {
    initPager() {
      var screenWidth, screenHeight;
      screenWidth = this.imageParent.clientWidth;
      this.N = this.images.length;
      this.NF = 30;
      this.imageParent.style.setProperty("--n", this.N);
    },

    stopAni() {
      window.cancelAnimationFrame(this.rID);
      this.rID = null;
    },

    ani(cf = 0) {
      this.imageParent = document.getElementById("image-view-pager");
      this.imageParent.style.setProperty(
        "--i",
        this.ini + (this.fin - this.ini) * this.TFN["ease-in"](cf / this.anf)
      );
      if (cf === this.anf) {
        this.stopAni();
        return;
      }

      this.rID = window.requestAnimationFrame(this.ani.bind(this, ++cf));
    },

    unify(e) {
      return e.changedTouches ? e.changedTouches[0] : e;
    },

    lock(e) {
      this.x0 = this.unify(e).clientX;
      this.locked = true;
    },

    drag(e) {
      e.preventDefault();
      if (this.locked) {
        let dx = this.unify(e).clientX - this.x0,
          f = +(dx / this.w).toFixed(2);
        var ee = this.currPos();
        var sss = this.screenWidth * this.N;
        var x = (ee / sss) * 100;
        var ppp = "-" + (100 / this.N) * (this.N - 1);
        if (x <= 0) {
          this.imageParent.style.setProperty("--i", this.i - f);
        }
        if (x < ppp) {
          //   this.imageParent.style.setProperty('--i', N - 1);

          console.log("this is the last one");
        }
      }
    },
    currPos() {
      this.imageParent = document.getElementById("image-view-pager");
      var st = window.getComputedStyle(this.imageParent, null);
      var cc = st.getPropertyValue("transform");
      try {
        var values = cc.split("(")[1],
          values = values.split(")")[0],
          values = values.split(",");
        var a = values[0];
        var b = values[1];
        var c = values[2];
        var d = values[3];
        var e = values[4];
        var ff = values[5];
      } catch (error) {
        e = 0;
      }
      return e;
    },
    move(e) {
      if (this.locked) {
        var dx = this.unify(e).clientX - this.x0,
          s = Math.sign(dx),
          f = +((s * dx) / this.w).toFixed(2);
        this.ini = this.i - s * f;
        if (
          (this.i > 0 || s < 0) &&
          (this.i < this.N - 1 || s > 0) &&
          f > 0.2
        ) {
          this.i -= s;
          f = 1 - f;
        }
        this.fin = this.i;
        this.anf = Math.round(f * this.NF);
        this.n = 2 + Math.round(f);
        var nnn = this.currPos();
        if (nnn <= 0) {
          this.ani();
        } else {
          this.imageParent.style.setProperty("--i", 0);
        }
        this.x0 = null;
        this.locked = false;
      }
    },
    size() {
      this.w = this.imageParent.clientWidth;
    }
  },

  watch:{
      leaving(){
          if(!this.leaving){
              this.imageParent.style.setProperty("--i", 0);
                  this.imageParent.style.setProperty("--n", 1);
             alert("destoryed");
   
          }else{
                this.N = this.images.length;
      this.NF = 30;
      this.imageParent.style.setProperty("--n", this.N);
            alert("created");
   
 
          }
      }
  },
  beforeDestroy() {
                  
   
    // this.imageParent.removeEventListener("resize", this.size, false);
    // this.imageParent.removeEventListener("mousedown", this.lock, false);
    // this.imageParent.removeEventListener("touchstart", this.lock, false);
    // this.imageParent.removeEventListener("mousemove", this.drag, false);
    // this.imageParent.removeEventListener("touchmove", this.drag, false);
    // this.imageParent.removeEventListener("mouseup", this.move, false);
    // this.imageParent.removeEventListener("touchend", this.move, false);
  }
};
</script>

<style lang="scss" scoped>
#cover {
  width: 100%;
  height: 100%;
  background-color: black;
  overflow: hidden;
  display: block;
  margin: auto;
}

#image-view-pager {
  --n: 1;
  --i: 0;
  width: 100%;
  width: calc(var(--n) * 100%);
  height: 100%;
  transform: translate(calc(var(--i) / var(--n) * -100%));
  overflow: auto;
  padding: 0px;
  margin: 0px;
}

img {
  height: 100%;
  width: calc(100% / var(--n));
  object-fit: contain;
}
</style>