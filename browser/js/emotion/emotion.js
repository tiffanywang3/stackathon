app.config(function ($stateProvider) {
    $stateProvider.state('emotion-state', {
        url: '/emotion/:finalEmotion',
        templateUrl: 'js/emotion/emotion.html',
        controller: 'EmotionCtrl'
    });
});



app.controller('EmotionCtrl', function ($scope, $state, $stateParams, EmotionFactory) {
	var happyText = ["So happy you're happy! Do a happy dance!", "Share your joy with someone else today!", "Hooray you're happy! Now you can pay it forward:)", "Your smile looks amazing on you! You should wear it more often:)"];
	var sadText = ["Don't forget that you are well loved and an amazing person!", "Don't be sad! Here, answer this: what did Jay-Z call his girlfriend before he got married? A Feyonce!", "This joke might cheer you up! What's the difference between snowmen and snowladies? Snowballs!", "The night is darkest just before the dawn. Hang tough!"];
	var angryText = ["Don't be so upset! Take a second, breath, and think calming thoughts.", "Keep calm and carry on", "Life is too short to be angry!", "Don't be mad! Do more of what makes you happy!"];
	var surprisedText = ["Surprise! Here's a text to add to your wonderment:)", "Why are you so surprised? You're awesome!", "Sometimes what you're looking for comes when you're not looking at all! It's nice to be surprised:)", "Give someone a surprise hug!"];
	$scope.emotion = $stateParams.finalEmotion;
	if($scope.emotion == 'happy'){
		EmotionFactory.sendText({body: happyText[(Math.floor(Math.random() * 3) + 1)]})
	} else if ($scope.emotion == 'sad'){
		EmotionFactory.sendText({body: sadText[(Math.floor(Math.random() * 3) + 1)] })
	} else if($scope.emotion == 'angry'){
		EmotionFactory.sendText({body: angryText[(Math.floor(Math.random() * 3) + 1)] })
	} else if($scope.emotion == 'surprised') {
		EmotionFactory.sendText({body: surprisedText[(Math.floor(Math.random() * 3) + 1)] })
	}
	

});












