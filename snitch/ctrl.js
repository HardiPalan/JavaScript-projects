let appctrl = angular.module("appctrl", []);

appctrl.controller("categoryctrl", function ($scope) {
  $scope.orderByField = "title";
  $scope.reverseOrder = false;
  $scope.searchType = "title";
  $scope.searchText = "";
});

appctrl.controller("productctrl", function ($scope) {
  $scope.orderByField = "brand";
  $scope.reverseOrder = false;
  $scope.searchType = "brand";
  $scope.searchText = "";
})