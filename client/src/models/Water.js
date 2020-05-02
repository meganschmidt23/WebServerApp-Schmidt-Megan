import myFetch from "./myFetch";

export default {
    State: {},
    Init() {
        myFetch('/water')
            .then(x=> { 
                this.State = x;
                console.log(x);
     })
    }
}