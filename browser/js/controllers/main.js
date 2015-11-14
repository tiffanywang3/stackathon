app.controller('MainCtrl', function($scope, $state){
	$scope.goToState = function(){
		var whatEmotion = logVals();
		$state.go('emotion-state', {finalEmotion: whatEmotion});
	}
	$scope.goHome = function(){
		location.reload();
		$state.go('home');
	}
	$scope.playClip = function(){
		var audio = document.getElementById("mySound");
		audio.play();
	}
})