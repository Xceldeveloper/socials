//@liked="wasLiked"
export default{
    methods:{

        finalize_LIKE(target){
            if(target !== undefined || target !== "" || target !== null || target.length !== 0){
                let type = target.type;
                let postId = target.id;
                let userId = target.userId;
                let isAdd = target.isAdd
      
                if(isAdd){
                     console.log('liked')
                }else{
                  console.log('un-liked') 
                }
      
                this.$emit("liked",target);
            }
        
        }
}
}
