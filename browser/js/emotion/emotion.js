app.config(function ($stateProvider) {
    $stateProvider.state('emotion-state', {
        url: '/emotion/:finalEmotion',
        templateUrl: 'js/emotion/emotion.html',
        controller: 'EmotionCtrl'
    });
});



app.controller('EmotionCtrl', function ($scope, $state, $stateParams, EmotionFactory) {
	$scope.emotion = $stateParams.finalEmotion;
	console.log("this should be stateParams", $stateParams.finalEmotion)

});












