app.controller('MainCtrl', function($scope, $state){
	$scope.isShowing = true;
	$scope.goToState = function(){
		var whatEmotion = logVals();
		var name = $scope.name;
		var userPhone = $scope.phone;
		$scope.isShowing = false;
		$state.go('emotion-state', {finalEmotion: whatEmotion, userName: name, phone: userPhone});
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