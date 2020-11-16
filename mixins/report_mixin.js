//@reported="wasReported"
export default{
    methods:{
        finalize_REPORT(target){
            if(target !== undefined || target !== "" || target !== null || target.length !== 0){
                let type = target.type;
                let postId = target.id;
                let userId = target.userId;
                console.log("reported");
                this.$emit("reported",target);
            }
        
        }
    }
}
