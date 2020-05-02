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
}