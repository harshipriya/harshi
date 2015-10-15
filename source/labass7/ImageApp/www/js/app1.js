  
 var app = angular.module("myApp", [])
 app.controller("LoginCtrl", function ($scope, $http,$window, $httpParamSerializerJQLike) {
     $scope.pageClass = 'Login';
     $scope.Login = function(userName, Password) {
         console.log("inside login function");
         localStorage.setItem("uname" , userName);
         $http({
             method: 'GET',
             url : 'https://api.mongolab.com/api/1/databases/student_details/collections//student_details?apiKey=aUf996KoscqSjiXQEhcKUPhJ_0nZNspn'
         }).success(function(data) {
             var obj=angular.fromJson(data);
             var count=0;
             for(i=0;i<obj.length;i++)
             {
                 if (angular.equals(obj[i].name, userName)&&angular.equals(obj[i].password,Password)) {
                    // alert('hie')
                     $window.location.href = 'home.html';
                 }
                 else {
                     count++;
                     //alert("login unsuccessful");
                 }
             }
             if(count==obj.length){
                 // alert("hiii");
                 $scope.myVar = false;
             }
            // alert('hie');
         })
     }
 });
