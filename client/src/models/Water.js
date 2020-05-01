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
    plus1(){
        this.waterTotal+= 1;
    },
    plus5(){
        this.waterTotal +=5;
    },
    plus10(){
        this.waterTotal= 10;
    },
    plus20(){
        this.waterTotal+=20
    }
}