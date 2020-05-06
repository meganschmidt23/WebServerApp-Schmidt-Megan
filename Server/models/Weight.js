const Weights = [
    {Date:"3/22/19", Weight: 230}
]

function addWeight(date, weight){
    Weights.push({Date:date, Weight:weight});
    return true;
};

function removeWeight(i){
    Weights.splice(i,1);
    return true
}

module.exports = {
    Weights,
    addWeight,
    removeWeight
}