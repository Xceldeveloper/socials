//@reposted="wasReposted"
export default{
    methods:{
        finalize_REPOST(target){
            if(target !== undefined || target !== "" || target !== null || target.length !== 0){
                let type = target.type;
                let postId = target.id;
                let userId = target.userId;
                console.log("reposted");
                this.$emit("reposted",target);
            }
        
        }
    }
}
