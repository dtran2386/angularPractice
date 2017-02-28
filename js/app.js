var app = angular.module('myApp', []);

app.controller('ctrl1', function($scope, $interval) {
    $scope.theTime = new Date().toLocaleTimeString();
    $interval(function() {
        $scope.theTime = new Date().toLocaleTimeString();
    }, 1000);
    
    $scope.names = [
        {name: 'Dylan', country: 'Vietnam'},
//        {name: 'Dylan Doe', country: 'USA'},
    ];
});

app.controller('customersCtrl', function($scope, $location, $timeout) {
    $scope.myUrl = $location.absUrl();
    $scope.myHeader = "Hey There!";
    $timeout(function() {
        $scope.myHeader = "How's It Going?!";
    }, 3000);
});

app.controller('weatherCtrl', function($scope, $http) {
//    var myWeather = [];
    // Function to return weather array contents to controller.
        $http({
            method: 'GET', 
            url: 'http://api.openweathermap.org/data/2.5/weather?q=Charlotte,NC&appid=f042de1f1718f8a9d47d94a47f05276b'
        }).then(function (response) {
//            myWeather.push(response.data);
            $scope.myWeather = response.data;
            console.log(response.data);
        }, function myError(response) {
            $scope.myWeather = "weather's not working! " + response.statusText;
        });
});

app.controller('inputCtrl', function ($scope) {
    $scope.fruit = "";
});

app.filter('kelvin', function() {
    return function(x) {
        return Math.round(x * (9/5) - 459.67);
    }
});