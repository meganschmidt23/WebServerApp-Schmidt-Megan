export const todos = [
    {
        goal: "Keep workin' it, beautiful"
    }
];

export function addGoal(newGoal) {
    this.todos.push(
        {
            goal: newGoal
        }
    )
}