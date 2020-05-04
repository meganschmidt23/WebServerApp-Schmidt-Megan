import myFetch from "./myFetch";

export default {
    State: {},
    Init() {
        myFetch('/goals')
            .then(x=> { 
                this.State = x;
                console.log(x);
     })
    },
    async addGoal(goal) {
        await myFetch("/goals/addGoal", {goal})
},
    async removeGoal(i) {
        await myFetch("/goals/removeGoals", {i})
}
}