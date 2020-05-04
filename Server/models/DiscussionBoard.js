const discussionBoard = [
    {name: "Megan", profilePic:"http://cs.newpaltz.edu/~schmidtm6/pics/IMG_2263.jpg", post:"Welcome to my website!"}
];

function addPost(name, profilePic, post) {
    this.discussionBoard.push(name, profilePic, post);
    return true;
};

function removePost(i){
    this.discussionBoard.splice(i,1);
    return true;
    };

module.exports = {
    discussionBoard,
    addPost,
    removePost
}