const waterTotal = [{watertotal: 0}];

function add1(){
    this.waterTotal+=1
    return true
};

function add5(){
    this.waterTotal +=5;
    return true
};
function add10(){
    this.waterTotal +=10;
    return true
};

function add20(){
    this.waterTotal +=20;
    return true
}

module.exports = {
    waterTotal,
    add1,
    add10,
    add5,
    add20
}