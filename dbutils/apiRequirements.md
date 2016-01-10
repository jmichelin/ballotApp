POST  /api/ballot                     //creates the ballot container and attaches the ballotCode
POST  /api/ballotOption               //adds a ballot option to the ballot
GET   /api/ballot/:ballot_id          //pull up ballot information including options/votes/status using the ballotCode
POST  /api/ballot/vote/:ballot_id     //cast a vote on a specific ballot option
POST  /api/ballot/close/:ballot_id    //close the vote
