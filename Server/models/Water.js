const waterTotal = [{watertotal: 20}];

function updateTotal(waterValue){
    waterTotal[0].watertotal = waterValue;
    return true;
}

module.exports = {
    waterTotal,
    updateTotal
}