import myFetch from "./myFetch";

export default {
    State: {},
    Init() {
        myFetch('/weight')
            .then(x=> { 
                this.State = x;
                console.log(x);
     })},
     async addWeight(Date, Weight) {
        await myFetch("/weight/addWeight", {Date, Weight})
},
    async removeGoal(i) {
        await myFetch("/weight/removeWeight", {i})
}
}
