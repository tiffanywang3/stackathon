app.controller('MainCtrl', function($scope, $state){
	$scope.goToState = function(){
		var whatEmotion = logVals();
		$state.go('emotion-state', {finalEmotion: whatEmotion});
	}
})