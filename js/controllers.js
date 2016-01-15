

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