

module.exports = function(app){
	var accountSid= app.getValue('env').TWILIO.clientID; 
	var authToken = app.getValue('env').TWILIO.clientSecret;
	var client = require('twilio')(accountSid, authToken); 

	
};



