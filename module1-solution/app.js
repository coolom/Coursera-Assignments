(function(){
'use strict';

angular.module('app',[])
.controller('LunchCheckController',LunchCheckController);

LunchCheckController.$injector = ['$scope'];

function LunchCheckController($scope){
  $scope.message = '';
  $scope.lunches = '';
  $scope.lunchCount = 0;

$scope.checkLunches = function(){
  if($scope.lunches === ''){
    $scope.message = "Please enter data first";
    return;
  }
    $scope.lunchCount = splitLunches($scope.lunches);
    if($scope.lunchCount > 3)
      $scope.message = "Too Much!";
    else
      $scope.message = "Enjoy!";

}



   function splitLunches(lunches){
    var arrayOfStrings = lunches.split(',');

    var length = arrayOfStrings.length;

    return length;
 }


}



})();
