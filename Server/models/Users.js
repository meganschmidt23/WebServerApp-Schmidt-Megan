const User = [
    {Name: 'Bob Smith', Username: 'BobSmith1', Email: 'bobsmith1@aol.com', Password:'BobbySmith', isAdmin:false, userID:0 },
    {Name: 'Easy', Username: 'a', Email: 'a@aim.com', Password:'a', isAdmin:true, userID:1}
];

module.exports = {
  Login(username, password) {
  
      const user = User.find(x => x.Username == username);
      if(!user) throw Error('User not found');
      if(user.Password != password) throw Error('Wrong Password');
  
      return user;
  },
  Get(userId) {
      return Users[userId]
  }
}