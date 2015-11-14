'use strict';
var router = require('express').Router();
var app = require('../../../app')
module.exports = router;
var accountSid= app.getValue('env').TWILIO.clientID; 
var authToken = app.getValue('env').TWILIO.clientSecret;
var client = require('twilio')(accountSid, authToken);

router.post('/', function(req,res,next){
	client.messages.create({ 
		to: "+19497018406", 
		from: "+17148743954", 
		body: req.body.body,   
	}, function(err, message) { 
		console.log(message);
		if (err) next(err); 
		else res.send(message);
	});

})


