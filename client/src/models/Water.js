import myFetch from "./myFetch";

export default {
    State: {},
    Init() {
        myFetch('/water')
            .then(x=> { 
                this.State = x;
                console.log(x);
     })
    },
    async add1() {
        await myFetch("/water/add1")
},
    async add5() {
        await myFetch("/water/add5")
},
async add10() {
    await myFetch("/water/add10")
},
async add20() {
    await myFetch("/water/add20")
}
}
