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

//user profile model
let UserProfile = Bookshelf.Model.extend({
  tableName: 'user_profile',

  userVotes: function () {
    return this.hasMany(UserVotes, 'user_id')
  }

});

//user vote model
let UserVotes = Bookshelf.Model.extend({
  tableName: 'user_vote',

  userProfile: function () {
    return this.belongsTo(UserProfile);
  },

  ballotOptions: function () {
    return this.belongsTo(BallotOptions, 'ballot_option_id');
  }

});

//ballot options model
let BallotOptions = Bookshelf.Model.extend({
  tableName: 'ballot_option',

  userVotes: function () {
    return this.hasMany(UserVotes, 'ballot_option_id');
  }

});

//ballot model

let Ballot = Bookshelf.Model.extend({
  tableName: 'ballot',

  hasTimestamps: true,

  ballotOptions: function () {
    return this.hasMany(BallotOptions, 'ballot_id');
  }

});
