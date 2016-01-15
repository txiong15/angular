/**
 * Created by Tom on 1/13/16.
 */

var myApp = angular.module('myApp', []);

myApp.controller('MyController', ['$scope', '$http', function($scope, $http) {

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