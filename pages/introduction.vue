<template>
<div class="cover">
    <style>
    :root{
        --next:{{translatexx}};
        --dynamic:{{pw}};
        --widthx:{{iw}};
        --sec:{{secx}}
    }
    </style>
    <div class="cov">
           <div class="item" v-for="(item, index) in intros" :key="index">
       {{index}}
           <button class="nav left" @click="prevx(index)">prev<br>pp</button>
        <button class="nav right" @click="nextx(index)">next<br>hhh</button>
    </div>
    </div>
    <div class="action-btn">gggg</div>
</div>
</template>

<script>
export default {
    data () {
        return {
          intros:[
              {
                  image:"01"
              },
               {
                  image:"02"
              },
               {
                  image:"03"
              },
               {
                  image:"04"
              }
          ],
        translatexx:'',
        current:3,
        secx:"1s"
        };
    },
    mounted() {
      this.move();
    },
    methods:{
        move(){
            setInterval(()=>{
      if(this.current < this.intros.length){
          this.secx='1s';
          this.nextx(this.current);
          this.current+=1;
            }else{
               
                this.current = 0;
                 this.nextx(this.current);
            }
            },3000);
        },
      nextx(integer){
          var le = this.intros.length;
        var mm = 100/le,
        mx = integer+1,
        mf = mx*mm, 
        mc = (mf)+"%";
        if(mf/mm <le){
             this.secx='0.8s'
        this.translatexx = "translateX(-"+mc+")";
    }else{
        mx = 0;
            mf = mx*mm;
             mc = (mf)+"%";
              this.secx='0s'
           this.translatexx = "translateX(-"+mc+")";
    }
      },
      prevx(integer){
          var le = this.intros.length;
          var mm = 100/le,
           mx = integer*mm-mm,
           mc = (mx)+"%";
        this.translatexx = "translateX(-"+mc+")";
      }
    },
    computed:{
        pw(){
           var le = this.intros.length;
        var mm = 100/le;
        return le*100+"%";
        },
        iw(){
             var le = this.intros.length;
        var mm = 100/le;
          return mm+"%";
        }
    }
}
</script>

<style scoped lang="scss">
.cover{
    background-color:#fff;
    width: 100%;
    height: 100%;
}

.cov{
    height: 100%;
    width: var(--dynamic);
    transform: var(--next);
 transition: transform var(--sec) ease-in;
 z-index: 20;
 
}
.item{
    background-color: #fff;
    border:1px solid black;
    width: var(--widthx);
    height: 100%;
    float:left;
   
}

.nav{
 display: block;
 border: 1px solid black;
 display: none;
}

.left{

}

.right{
 position: absolute;
 bottom: 20px;
 
}

.action-btn{
    width: 100%;
    height: 20px;
    background-color: red;
    z-index: 100;
    position: fixed;
    bottom: 20px;
    text-align: center;
}

#explore{

}
#sign-in{

}
</style>

