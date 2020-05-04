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
    async addExercise(newExercise) {
        await myFetch("/exercises/addExercise", {newExercise})
    },
    async removeExercise(i) {
        await myFetch("/exercises/removeExercise", {i})
    }
}