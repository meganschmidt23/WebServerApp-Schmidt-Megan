const Goals = [
    {
        goal: "Keep workin' it, beautiful"
    }
];

function addGoal(goal) {
    Goals.push({goal:goal});
    return true;
};

function removeGoal(i){
    Goals.splice(i,1);
    return true;
    };

module.exports = {
    Goals,
    addGoal,
    removeGoal
}