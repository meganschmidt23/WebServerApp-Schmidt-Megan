export const todos = [
    {
        name: "Example"
    }
];

export function addFood(newFood) {
    this.todos.push(
        {
            name: newFood
        }
    )
}