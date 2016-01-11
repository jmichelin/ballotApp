'use strict'

//require('./dbutils/connection.js');
let knex = require('knex')({
  client: 'mysql',
  connection: {
    host      : 'mysqlcluster7.registeredsite.com',
    user      : 'ballot_admin',
    password  : '!Qaz2wsx3edc',
    database  : 'greenfield_ballot',
    charset   : 'utf8'
  }
});


let Bookshelf = require('bookshelf')(knex);
let _ = require('lodash');
let express = require('express');
let app = express();
let bodyParser = require('body-parser');

//application router
let router = express.Router();

//application body-parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

  //////////////////////
 //      Models      //
//////////////////////

//user profile model
let UserProfile = Bookshelf.Model.extend({
  tableName: 'user_profile',

  userVote: function () {
    return this.hasMany(UserVote, 'user_id')
  }

});

//user vote model
let UserVote = Bookshelf.Model.extend({
  tableName: 'user_vote',

  userProfile: function () {
    return this.belongsTo(UserProfile);
  },

  ballotOption: function () {
    return this.belongsTo(BallotOption, 'ballot_option_id');
  }

});

//ballot options model
let BallotOption = Bookshelf.Model.extend({
  tableName: 'ballot_option',

  userVote: function () {
    return this.hasMany(UserVote, 'ballot_option_id');
  }

});

//ballot model

let Ballot = Bookshelf.Model.extend({
  tableName: 'ballot',

  hasTimestamps: true,

  ballotOption: function () {
    return this.hasMany(BallotOption, 'ballot_id');
  }

});

  //////////////////////
 //   Collections    //
//////////////////////

//UserProfiles collection
let UserProfiles = Bookshelf.Collection.extend({
  model: UserProfile
});

//UserVotes collection
let UserVotes = Bookshelf.Collection.extend({
  model: UserVote
});

//BallotOptions collection
let BallotOptions = Bookshelf.Collection.extend({
  model: BallotOption
});


//Ballots collection
let Ballots = Bookshelf.Collection.extend({
  model: Ballot
});

  //////////////////////
 //   API Endpoints  //
//////////////////////


//UserProfiles
/*
    GET       /users        //fetch all users
    POST      /users        //create a new user
    GET       /users/:id    //fetch a single user by id
    PUT       /users/:id    //update user
    DELETE    /users/:id    //delete user
*/

//UserVotes
/*
    GET       /votes                              //fetch all votes
    POST      /votes                              //create a new vote
    GET       /votes/ballot/:ballot_option_id     //fetch all votes by ballot_option_id
    GET       /votes/:id                          //fetch a single vote by id
    GET       /votes/user/:user_id                //fetch all votes by user_id
    PUT       /votes/:id                          //update vote
    DELETE    /vote/:id                           //delete vote
*/

//BallotOptions
/*
    GET       /ballotOptions                              //fetch all ballotOptions
    POST      /ballotOptions                              //create a new ballotOption
    GET       /ballotOptions/ballot/:ballot_id            //fetch all ballotOptions by ballot_id
    GET       /ballotOptions/:id                          //fetch a single ballotOption by id
    PUT       /ballotOptions/:id                          //update ballotOption
    DELETE    /ballotOptions/:id                          //delete ballotOption
*/

//Ballots
/*
    GET       /ballots                              //fetch all ballots
    POST      /ballots                              //create a new ballots
    GET       /ballots/:id                          //fetch a single ballot by id
    GET       /ballots/user/:user_id                //fetch all ballots by user_id
    PUT       /ballots/:id                          //update ballot
    DELETE    /ballots/:id                          //delete ballot
*/
