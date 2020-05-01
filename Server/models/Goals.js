const Goals = [
    {
        goal: "Keep workin' it, beautiful"
    }
];

function addGoal(newGoal) {
    this.Goals.push(
        {
            goal: newGoal
        }
    )
}

module.export = {
    Goals,
    addGoal
}