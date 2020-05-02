import myFetch from "./myFetch";

export default {
    State: {},
    Init() {
        myFetch('/goals')
            .then(x=> { 
                this.State = x;
                console.log(x);
     })
    }
}