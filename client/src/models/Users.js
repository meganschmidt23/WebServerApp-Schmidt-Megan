const User = [
    {Name: 'Bob Smith', Username: 'BobSmith1', Email: 'bobsmith1@aol.com', Password:'BobbySmith' },
    {Name: 'Easy', Username: 'a', Email: 'a@aim.com', Password:'a'}
];

export let CurrentUser = null;

export function Login(username, password) {
  const user = User.find(x => x.Username == username);
  if(!user) throw Error('User not found');
  if(user.Password != password) throw Error ('Wrong Password');
  
  return CurrentUser = user;
}