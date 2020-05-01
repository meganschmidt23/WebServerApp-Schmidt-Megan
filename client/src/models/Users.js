const User = [
    {Name: 'Bob Smith', Username: 'BobSmith1', Email: 'bobsmith1@aol.com', Password:'BobbySmith', isAdmin:false },
    {Name: 'Easy', Username: 'a', Email: 'a@aim.com', Password:'a', isAdmin:true}
];

export let CurrentUser = null;

export function Login(username, password) {
  const user = User.find(x => x.Username == username);
  if(!user) throw Error('User not found');
  if(user.Password != password) throw Error ('Wrong Password');
  
  return CurrentUser = user;
}

export let State= {};

export function Init(){
  myFetch('http://localhost:3000/game')
      .then(x=> { 
          State = x;
          console.log(x);
      });
    }