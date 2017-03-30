'use strict';
angular.module('sampleRepoApp')
  .controller('AboutCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.records = {};
  	$scope.generatedRecords = [];
    $http.get('JsonData/generated.json').then(function(response) {
        //$scope.records = response.data;
        console.log($scope.records);	    	    
  	});
}]);
