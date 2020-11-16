// @bookmarked="wasBookMarked"
export default{
    methods:{
        finalize_BOOKMARK(target){
            if(target !== undefined || target !== "" || target !== null || target.length !== 0){
                let type = target.type;
                let postId = target.id;
                let userId = target.userId;
                let isAdd = target.isAdd
      
                if(isAdd){
                     console.log('bookmarked')
                }else{
                  console.log('un-bookmarked') 
                }
      
                this.$emit("bookmarked",target);
            }
        
        }
}
}
