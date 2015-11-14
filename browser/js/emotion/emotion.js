app.config(function ($stateProvider) {
    $stateProvider.state('emotion-state', {
        url: '/emotion/:finalEmotion',
        templateUrl: 'js/emotion/emotion.html',
        controller: 'EmotionCtrl'
    });
});



app.controller('EmotionCtrl', function ($scope, $state, $stateParams, EmotionFactory) {
	$scope.emotion = $stateParams.finalEmotion;
	if($scope.emotion == 'happy'){
		EmotionFactory.sendText({body: "So happy you're happy! Spread the joy:)"})
	} else if ($scope.emotion == 'sad'){
		EmotionFactory.sendText({body: "You're not alone - you are well loved and an amazing person!"})
	} else if($scope.emotion == 'angry'){
		EmotionFactory.sendText({body: "Don't be so upset! Take a second, breath, and think calming thoughts."})
	} else if($scope.emotion == 'surprised') {
		EmotionFactory.sendText({body: "Surprise! Here's a text to add to your wonderment:)"})
	}
	

});












