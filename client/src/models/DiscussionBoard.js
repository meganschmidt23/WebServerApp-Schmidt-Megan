import myFetch from "./myFetch";

export default {
    State: {},
    Init() {
        myFetch('/exercises')
            .then(x=> { 
                this.State = x;
                console.log(x);
     })
    },
    async addPost(name, profilePic, post) {
        await myFetch("/discussionboard/addPost", {name, profilePic, post})
    },
    async removePost(i) {
        await myFetch("/discussionboard/removePost", {i})
    }
}