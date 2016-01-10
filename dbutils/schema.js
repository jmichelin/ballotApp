/*
CREATE TABLE `ballot` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`ballotName` varchar(255) NOT NULL,
	`createdOn` TIMESTAMP NOT NULL,
	`status` varchar(255) NOT NULL,
	`owningTemplateID` INT NOT NULL,
	`scheduledForTime` DATETIME NOT NULL,
	`ballotCode` varchar(32) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `ballotOption` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`owiningBallotID` INT NOT NULL,
	`ballotOptionName` varchar(255) NOT NULL,
	`numVotes` INT NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `userProfile` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`username` varchar(255) NOT NULL,
	`email` varchar(255) NOT NULL,
	`phone` varchar(16) NOT NULL,
	`userType` varchar(25) NOT NULL,
	`authProvider` varchar(255) NOT NULL,
	`status` varchar(255) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `group` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`name` varchar(255) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `userVote` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`owningUserID` INT NOT NULL,
	`owningBallotOption` INT NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `ballotUserXref` (
	`owningBallotID` INT NOT NULL,
	`owningUserID` INT NOT NULL,
	`userBallotRole` varchar(12) NOT NULL,
	`ballotOptionVote` varchar(255) NOT NULL
);

CREATE TABLE `userGroupXref` (
	`owningUserID` INT NOT NULL,
	`owningGroupID` INT NOT NULL
);

CREATE TABLE `groupBallotXref` (
	`owningGroupID` INT NOT NULL,
	`owningBallotID` INT NOT NULL
);

ALTER TABLE `ballotOption` ADD CONSTRAINT `ballotOption_fk0` FOREIGN KEY (`owiningBallotID`) REFERENCES `ballot`(`id`);

ALTER TABLE `userVote` ADD CONSTRAINT `userVote_fk0` FOREIGN KEY (`owningUserID`) REFERENCES `userProfile`(`id`);

ALTER TABLE `userVote` ADD CONSTRAINT `userVote_fk1` FOREIGN KEY (`owningBallotOption`) REFERENCES `ballot`(`id`);

ALTER TABLE `ballotUserXref` ADD CONSTRAINT `ballotUserXref_fk0` FOREIGN KEY (`owningBallotID`) REFERENCES `ballot`(`id`);

ALTER TABLE `ballotUserXref` ADD CONSTRAINT `ballotUserXref_fk1` FOREIGN KEY (`owningUserID`) REFERENCES `userProfile`(`id`);

ALTER TABLE `userGroupXref` ADD CONSTRAINT `userGroupXref_fk0` FOREIGN KEY (`owningUserID`) REFERENCES `userProfile`(`id`);

ALTER TABLE `userGroupXref` ADD CONSTRAINT `userGroupXref_fk1` FOREIGN KEY (`owningGroupID`) REFERENCES `group`(`id`);

ALTER TABLE `groupBallotXref` ADD CONSTRAINT `groupBallotXref_fk0` FOREIGN KEY (`owningGroupID`) REFERENCES `group`(`id`);

ALTER TABLE `groupBallotXref` ADD CONSTRAINT `groupBallotXref_fk1` FOREIGN KEY (`owningBallotID`) REFERENCES `ballot`(`id`);



*/
