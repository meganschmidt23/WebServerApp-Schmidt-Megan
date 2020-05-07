const User = [
    {Name: 'Bob Smith', Username: 'BobSmith1', Email: 'bobsmith1@aol.com', Password:'BobbySmith', City:'Kingston, NY', profilePic:"https://i.pinimg.com/originals/c2/95/9c/c2959c63b540853bde6e90180359d8ce.jpg", isAdmin:false, userID:0 },
    {Name: 'Adam Jones', Username: 'a', Email: 'a@aim.com', Password:'a', City:'Albany, NY', profilePic:"http://cs.newpaltz.edu/~schmidtm6/pics/ducky.jpg", isAdmin:true, userID:1}
];

function Login(username, password) {
  
  const user = User.find(x => x.Username == username);
  if(!user) throw Error('User not found');
  if(user.Password != password) throw Error('Wrong Password');

  return user;
};

function Get(userID){
    return User[userID]
  }
;
module.exports = {
  Login, Get, User

}