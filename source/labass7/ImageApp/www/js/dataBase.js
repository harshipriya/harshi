var app = angular.module("myApp", [])


app.controller("RegisterController", function ($scope, $http,$window, $httpParamSerializerJQLike) {

    $scope.pageClass = 'register';
$scope.register = function(userName, password) {
   console.log("inside register function");
$http({
    method: 'POST',
    url : 'https://api.mongolab.com/api/1/databases/student_details/collections//student_details?apiKey=aUf996KoscqSjiXQEhcKUPhJ_0nZNspn',
    data: JSON.stringify({
                name: userName,
                password: password,
                
            }),
    contentType: "application/json"
}).success(function() {
    $scope.userName ="";
    $scope.password ="";
    
    $scope.msg ="User created successfully";
    $window.location.href='home.html';
        })
}
   
});  