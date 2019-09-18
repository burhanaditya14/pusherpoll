const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Vote = require('../models/Vote');

const Pusher = require('pusher');

var pusher = new Pusher({
  appId: '847418',
  key: '2dd7139a67951aa6bd44',
  secret: '30a325ffe52f30cc0be1',
  cluster: 'ap1',
  encrypted: true
});

router.get('/', (req, res) =>{
   Vote.find().then(votes=>res.json({success: true,
  votes: votes}));
});

router.post('/', (req, res) => {
  const newVote ={
    os: req.body.os,
    points: 1
  }  

new Vote(newVote).save().then(vote=>{
  pusher.trigger('os-poll', 'os-vote', {
    points : parseInt(vote.points),
    os: vote.os
  });


      return res.json({success : true, message :'Thank You for Voting'});
});
});

module.exports = router;