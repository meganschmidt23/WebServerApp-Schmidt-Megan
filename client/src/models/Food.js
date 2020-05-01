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
    addFood(newFood) {
        this.todos.push(
        {
            name: newFood
        }
    )
}
}