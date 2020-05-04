const Weights = [
    {Date:"3/22/19", Weight: 230}
]

function addWeight(date, weight){
    this.Weights.push({date, weight});
    return true;
};

function removeWeight(i){
    this.Weights.splice(i,1);
    return true
}

module.exports = {
    Weights,
    addWeight,
    removeWeight
}