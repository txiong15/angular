

var artistControllers = angular.module('artistControllers', []);

artistControllers.controller('ListController', ['$scope', '$http', function($scope, $http) {

    //$http.get('js/data.json').then(function () {
    //    $scope.artists = data;
    //});

    $http({
        method: 'GET',
        url: 'js/data.json'
    }).then(function successfullCallback(response) {
        $scope.artists = response.data;
        artistOrder = 'name';
    }, function errorCallback(response) {
        console.log("Cannot get file....");
    });



}]);


artistControllers.controller('DetailsController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {

    $http({
        method: 'GET',
        url: 'js/data.json'
    }).then(function successfullCallback(response) {
        $scope.artists = response.data;
        $scope.whichItem = $routeParams.itemId;

        if ($routeParams.itemId > 0) {
            $scope.prevItem = Number($routeParams.itemId) - 1;
        } else {
            $scope.prevItem = $scope.artists.length - 1;
        }

        if ($routeParams.itemId < ($scope.artists.length - 1)) {
            $scope.nextItem = Number($routeParams.itemId) + 1;
        } else {
            $scope.nextItem = 0;
        }

    }, function errorCallback(response) {
        console.log("Cannot get file....");
    });



}]);