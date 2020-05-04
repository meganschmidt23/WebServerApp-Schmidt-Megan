import myFetch from "./myFetch";

export default {
    State: {},
    Init() {
        myFetch('/food')
            .then(x=> { 
                this.State = x;
                console.log(x);
     })
    },
    async addFood(name, calories) {
        await myFetch("/food/addFood", {name, calories})
    },
    async removeFood(i) {
        await myFetch("/food/removeFood", {i})
    }
}