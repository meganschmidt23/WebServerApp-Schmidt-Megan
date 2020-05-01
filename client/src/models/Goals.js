import myFetch from "./myFetch";

export default {
    State: {},
    Init() {
        myFetch('/exercises')
            .then(x=> { 
                this.State = x;
                console.log(x);
     })
    }
}

export function addGoal(newGoal) {
    this.Goals.push(
        {
            goal: newGoal
        }
    )
}