export const User = [
    {Name: 'Bob Smith', Username: 'BobSmith1', Email: 'bobsmith1@aol.com', Password:"BobbySmith" },
];

export const Breakfast = [ ];

export const Lunch = [ ];

export const Dinner= [ ];
  
export const Snacks= [ ];

export let CurrentUser = null;

export function Login(username, password) {
  const user =Users.find(x => x.Username == username);
  if(!user) throw Error('User not found');
  if(user.Password != password) throw Error('Wrong Password');
  
  return CurrentUser= user;
}

function addBreakfast(text) {
    Breakfast.push(text);
}
function addLunch(text) {
  Lunch.push(text);
}
function addDinner(text) {
  Dinner.push(text);
}
function addSnack(text) {
  Snack.push(text);
}

module.exports = {
  list: User,
  add: addBreakfast, addDinner, addLunch, addSnack
}