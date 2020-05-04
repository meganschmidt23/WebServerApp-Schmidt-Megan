const express = require('express');
const router = express.Router();

const DiscussionBoard = require('../models/DiscussionBoard');

router
    .get ("/", (req,res)=> res.send({
        DiscussionBoard: DiscussionBoard.discussionBoard
    }))
    .post('/addPost', (req,res)=> res.send(
        DiscussionBoard.addPost(req.body.name, req.body.profilePic, requ.body.post)
        ))
    .post('/removePost', (req,res)=> res.send(
        DiscussionBoard.remove(Postreq.body.i)
        ))

module.exports = router;