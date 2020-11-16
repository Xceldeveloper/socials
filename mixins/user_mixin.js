export default {
    data() {
      return {
      // isLoggedIn:false
      Followings:[]
      }
    },
    beforeCreate() {
        if(this.$store.state.user.isLoggedIn){
            console.log("fetching from db from callback...")
            var iss = true;
            setTimeout(()=>{
              if(iss){
                  this.$store.commit('user/setIsLoggedIn',true)
                 // this.isLoggedIn = true;
              }else{
                this.$store.commit('user/setIsLoggedIn',false)
                this.isLoggedIn = false
              }
            },1000);
        }else{
            // do nothing....
            console.log("already logged in");
          //  this.isLoggedIn = true;
        }
    },
    created() {

    },

    computed: {
        getUser(){
            return this.$store.state.user;
        },
        isLoggedIn(){
            return this.$store.state.user.isLoggedIn;
        },
        getFollowings(){
          return this.$store.state.user.followings;
        }
    },

    methods: {
      checkIsFollowing(username){
        var mm = this.getFollowings.filter(e => {
          return(
            (e.username || '').toLowerCase().indexOf((username || "").toLowerCase()) > -1
          )
        });

        if(mm == '' || mm.length === 0){
          return false;
        }else{
          return true
        }
       
      }
    },

}