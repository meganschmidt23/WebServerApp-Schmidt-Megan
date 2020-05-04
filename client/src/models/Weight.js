import myFetch from "./myFetch";

export default {
    State: {},
    Init() {
        myFetch('/weight')
            .then(x=> { 
                this.State = x;
                console.log(x);
     })},
     async addWeight(date, weight) {
        await myFetch("/weight/addWeight", {date, weight})
},
    async removeGoal(i) {
        await myFetch("/weight/removeWeight", {i})
}
}
