import myFetch from "./myFetch";

export default{
    State: {},
    Init(){
        myFetch("/about") //Actually going to localhost:3000/about
        .then(x=> { 
            this.State = x;
            console.log(x);
        });
    }
}