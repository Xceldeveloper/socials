<template>
    <div class="modaCover">
        <div class="modalFloor" @click="close">

        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
          
        };
    },
    mounted() {
      
    },
    methods:{
      close(){
           //  this.$bus.$emit('toggle-sideNavigation',this.isShowing);
             this.$bus.$emit('closing-modalFloor');
      }
    },
      computed:{
    isShowing() {
      return this.$store.state.settings.sideNav;
    },
      }
}
</script>

<style scoped lang="scss">
.modalFloor{
    width: 100%;
    height:100%;
    background-color: rgba($color: #000000, $alpha: 0.8);
    z-index: 94;
    position: fixed;
    top: 0%;
}
</style>

