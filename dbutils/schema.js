'use strict'

let Schema = {
  ballot: {                                                                     // CREATE TABLE `ballot` (
    id: { type: 'increments', nullable: false, primary: true },                 //`id` INT NOT NULL AUTO_INCREMENT,
    ballot_name: { type: 'string', maxlength: 254, nullable: false },           //`ballotName` varchar(255) NOT NULL,
    status: { type: 'string', maxlength: 20, nullable: false, },
    user_id: { type: 'integer', nullable: false, unsigned: true },                //`status` varchar(255) NOT NULL,
    template_id: { type: 'integer', nullable: true, unsigned: true },           //`owningTemplateID` INT  NULL,
    sceduled_on: { type: 'datetime', nullable: true },                          //`scheduledForTime` DATETIME  NULL,
    ballot_code: { type: 'string', maxlength: 32, nullable: false },             //`ballotCode` varchar(32) NOT NULL,
    created_at: { type: 'dateTime', nullable: false },                          //`createdOn` TIMESTAMP  NULL,
    updated_at: { type: 'dateTime', nullable: true }                            //`updatedAt` DATETIME NULL
  },

  ballot_option: {                                                              // CREATE TABLE `ballotOption` (
    id: { type: 'increments', nullable: false, primary: true },                 // 	`id` INT NOT NULL AUTO_INCREMENT,
    ballot_id: { type: 'integer', nullable: false, unsigned: true },            // 	`owiningBallotID` INT NOT NULL,
    ballot_option_name: { type: 'text', maxlength: 60, nullable: false },       // 	`ballotOptionName` varchar(255) NOT NULL,
    number_option_votes: { type: 'integer',   nullable: true }                  // 	`numVotes` INT NOT NULL,
  },

  user_profile: {                                                               // CREATE TABLE `userProfile` (
    id: { type: 'increments', nullable: false, primary: true },                 // 	`id` INT NOT NULL AUTO_INCREMENT,
    name: { type: 'string', maxlength: 120, nullable: false },                  // 	`username` varchar(255) NOT NULL,
    email: { type: 'string', maxlength: 254, nullable: false, unique: true },   // 	`email` varchar(255) NOT NULL,
    phone: { type: 'string', maxlength: 16, nullable: true, unique: true },     // 	`phone` varchar(16) NOT NULL,
    role: { type: 'string', maxlength: 20, nullable: true },                    // 	`userType` varchar(25) NOT NULL,
    auth_provider: { type: 'string', maxlength: 100, nullable: true },          // 	`authProvider` varchar(255) NOT NULL,
    status: { type: 'string', maxlength: 100, nullable: true }                  // 	`status` varchar(255) NOT NULL,
  },

  ballot_group: {                                                               // CREATE TABLE `group` (
    id: { type: 'increments', nullable: false, primary: true },                 // 	`id` INT NOT NULL AUTO_INCREMENT,
    group_name: { type: 'string', maxlength: 254, nullable: false }            // 	`name` varchar(255) NOT NULL,
  },

  user_vote: {                                                                  // CREATE TABLE `userVote` (
    id: { type: 'increments', nullable: false, primary: true },                 // 	`id` INT NOT NULL AUTO_INCREMENT,
    user_id: { type: 'integer', nullable: false, unsigned: true },              // 	`owningUserID` INT NOT NULL,
    ballot_option_id: { type: 'integer', nullable: false, unsigned: true }      // 	`owningBallotOption` INT NOT NULL,
  }

};

module.exports = Schema;
