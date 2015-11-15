app.config(function ($stateProvider) {
    $stateProvider.state('emotion-state', {
        url: '/emotion/:finalEmotion/:userName',
        templateUrl: 'js/emotion/emotion.html',
        controller: 'EmotionCtrl'
    });
});



app.controller('EmotionCtrl', function ($scope, $state, $stateParams, EmotionFactory) {
	$scope.emotion = $stateParams.finalEmotion;
	$scope.name = $stateParams.userName;
	var happyText = ["So happy you're happy, " + $scope.name + "! Do a happy dance!", "Share your joy with someone else today, " + $scope.name + "!", "Hooray you're happy, " + $scope.name + "! Now you can pay it forward:)", "Your smile looks amazing on you, " + $scope.name + "! You should wear it more often:)"];
	var sadText = ["Don't forget that you are well loved and an amazing person, " + $scope.name + "!", "Don't be sad, " + $scope.name + "! Here, answer this: what did Jay-Z call his girlfriend before he got married? A Feyonce!", "This joke might cheer you up, " + $scope.name + "! What's the difference between snowmen and snowladies? Snowballs!"];
	var angryText = ["Don't be so upset, " + $scope.name + "! Take a second, breath, and think calming thoughts.", "Keep calm and carry on, " + $scope.name + "", "Life is too short to be angry, " + $scope.name + "!", "Don't be mad, " + $scope.name + "! Do more of what makes you happy!"];
	var surprisedText = ["Why are you so surprised, " + $scope.name + "? You're awesome!", "Sometimes what you're looking for comes when you're not looking at all! It's nice to be surprised, isn't it " + $scope.name + "?", "Give someone a surprise hug, " + $scope.name + "!"];
	

	if($scope.emotion == 'happy'){
		EmotionFactory.sendText({body: happyText[(Math.floor(Math.random() * 3) + 1)]})
	} else if ($scope.emotion == 'sad'){
		EmotionFactory.sendText({body: sadText[(Math.floor(Math.random() * 2) + 1)]})
	} else if($scope.emotion == 'angry'){
		EmotionFactory.sendText({body: angryText[(Math.floor(Math.random() * 3) + 1)]})
	} else if($scope.emotion == 'surprised') {
		EmotionFactory.sendText({body: surprisedText[(Math.floor(Math.random() * 2) + 1)]})
	}
	

});












