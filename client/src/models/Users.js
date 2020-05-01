import myFetch from "./myFetch";

export default {
    State: {},
    Init() {
        myFetch('/exercises')
            .then(x=> { 
                this.State = x;
                console.log(x);
     })
    }
}

export function Login(username, password) {
  const user = User.find(x => x.Username == username);
  if(!user) throw Error('User not found');
  if(user.Password != password) throw Error ('Wrong Password');
  
  return CurrentUser = user;
}