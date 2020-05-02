import myFetch from "./myFetch";

export default {
    State: {},
    Init() {
        myFetch('/weight')
            .then(x=> { 
                this.State = x;
                console.log(x);
     })}
}