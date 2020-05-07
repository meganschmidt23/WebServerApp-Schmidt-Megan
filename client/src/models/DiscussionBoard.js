import myFetch from "./myFetch";

export default {
    State: {},
    Init() {
        myFetch('/discussionboard')
            .then(x=> { 
                this.State = x;
                console.log(x);
     })
    },
    async addPost(post) {
        await myFetch("/discussionboard/addPost", {post})
    },
    async removePost(i) {
        await myFetch("/discussionboard/removePost", {i})
    }
}