const Goals = [
    {
        goal: "Keep workin' it, beautiful"
    }
];

function addGoal(goal) {
    this.Goals.push({goal});
    return true;
};

function removeGoal(i){
    this.Goals.splice(i,1);
    return true;
    };

module.exports = {
    Goals,
    addGoal,
    removeGoal
}