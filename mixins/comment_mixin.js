//  @commented="wasCommentedOn"
export default {
  methods: {
    finalize_COMMENT(target) {
      if (target !== undefined || target !== "" || target !== null || target.length !== 0) {
        let type = target.type;
        let postId = target.id;
        let userId = target.userId;
        let comment = target.comment;
        let isAdd = target.isAdd

        if (isAdd) {
          console.log('commented')
        } else {
          console.log('deleted comment')
        }

        this.$emit("commented", target);
      }

    }

  }
}
