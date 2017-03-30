'use strict';

angular.module('sampleRepoApp')
  .controller('MainCtrl', ['$scope', '$http', function ($scope, $http){
  		$scope.records = {};
  		$scope.generatedRecords = [];
    	$http.get('JsonData/generated.json').then(function(response) {
    	    $scope.records = response.data;
    	    
    	    var len = $scope.records.length;
    	    for(var i=0;i<len;i++){
    	    	if($scope.records[i].isActive == true){
    	    		$scope.generatedRecords.push($scope.records[i]);    	    		
    	    	}    	   
    	    }
    	    console.log($scope.generatedRecords);       
      	});     	       
  }]);
