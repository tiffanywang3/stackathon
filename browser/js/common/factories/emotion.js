app.factory('EmotionFactory', function($http){
	var EmotionFactory = {};
	EmotionFactory.sendText = function(body){
		$http.post('/api/twilio', body)
		.then(function(text){
			console.log(text);
		}, function(err){
			console.error(err);
		})

	}

	return EmotionFactory;

})