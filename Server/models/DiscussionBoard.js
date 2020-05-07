const person = require('./Users')

const discussionBoard = [
    {name: "Megan", profilePic:"http://cs.newpaltz.edu/~schmidtm6/pics/IMG_2263.jpg", post:"Welcome to my website!"}
];

function addPost(userid, post) {
    const user = person.User.find(x=> x.userID == userid);
    discussionBoard.push({userID: user.userID, name:user.Name, profilePic:user.profilePic, post:post});
    return true;
};

function removePost(i){
    discussionBoard.splice(i,1);
    return true;
    };

module.exports = {
    discussionBoard,
    addPost,
    removePost
}