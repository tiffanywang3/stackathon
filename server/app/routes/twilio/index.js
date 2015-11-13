'use strict';
var router = require('express').Router();
//var client = require('../authentication/twilio.js');
module.exports = router;

router.post('', function(){
	client.messages.create({ 
		to: "+19497018406", 
		from: "+17148743954", 
		body: "test",   
	}, function(err, message) { 
		console.log(message.sid); 
	});

})


