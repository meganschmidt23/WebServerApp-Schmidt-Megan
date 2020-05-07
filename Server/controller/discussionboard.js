const express = require('express');
const router = express.Router();
const users = require('../models/Users');

const DiscussionBoard = require('../models/DiscussionBoard');

router
    .get ("/", (req,res)=> res.send({
        DiscussionBoard: DiscussionBoard.discussionBoard,
        currUser: users.User[req.userID]
    }))
    .post('/addPost', (req,res)=> res.send(
        DiscussionBoard.addPost(req.userID, req.body.post)
        ))
    .post('/removePost', (req,res)=> res.send(
        DiscussionBoard.removePost(req.body.i)
        ))

module.exports = router;