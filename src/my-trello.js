// Why do I get a long string of errors when importing these? I installed the modules with npm i --save. They worked well in my standalone app.

// var chrono = require('chrono-node');
// var trello = require('trello-client')(TrelloKey, TrelloToken);


// Trello related constants
// reinsert constants.
// var trello = require('trello-client');

// consumes a string containing a task and potentially a date
// writes the string to trello, with the hard-coded listID and userID, using the auth tokens here.

function createTrelloCard(answer) {

	// extract the date if there is one. If not, gives me null, which is what Trello wants if there's no date.
	var date = (Chrono.parseDate(answer));
	
	// consume a string, give me a string without the date if there is a date. Otherwise, return the same string.
	// takes date as a constant.
	var removeDate = function (string) {
		if (date) return (answer).replace((Chrono.parse(answer))[0].text, '')
		else return answer; // this is a little messy but it extracts the actual date text from chrono so I can do a string replace.
	}

	// make the card
	trello.createCard({'name': removeDate(answer), 'due': date, 'idList': myListID, 'urlSource': null, 'idMembers': [ myUserID ]});
};

module.exports = {
	createCard: createTrelloCard
};