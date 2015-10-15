  var app=angular.module('myApp', []);
    app.controller('putdelCtrl', function ($scope,$http,$window, $httpParamSerializerJQLike) {
        $scope.myVar=true;
        $scope.updateVar=false;
        $scope.deleteVar=false;
        $scope.delVar=true;
        $scope.chartVar=true;
        var usernameper= localStorage.getItem("uname");
        document.getElementById('welcome').innerHTML="Welcome "+usernameper;
        $scope.toggle1 = function() {
            $scope.myVar = !$scope.myVar;
            $scope.updateVar=!$scope.updateVar;
            $scope.delVar=true;
            $scope.otVar=true;
            $scope.statVar=true;
        }
        $scope.toggle2 = function() {
            $scope.deleteVar=!$scope.deleteVar;
            $scope.delVar=false;
        }
        $scope.toggle3 = function() {
            $scope.chartVar=!$scope.chartVar;
        }

        var iden=12;
        $http({
            method: 'GET',
            url: 'https://api.mongolab.com/api/1/databases/student_details/collections//student_details?apiKey=aUf996KoscqSjiXQEhcKUPhJ_0nZNspn'
        }).success(function (data) {
            var obj = angular.fromJson(data);
            var count = 0;
            for (i = 0; i < obj.length; i++) {
                if (angular.equals(obj[i].name, usernameper)) {
                    // alert('hie');
                    iden = obj[i]._id.$oid;
                    //alert(iden);
                }
                else {
                    //alert("login unsuccessful");
                }
            }
            // alert('hie');
        });
        $scope.update = function(userName,Password) {
            console.log("inside login function");
              //  alert(iden);
                $http({
                    method: 'PUT',
                    url: 'https://api.mongolab.com/api/1/databases/student_details/collections//student_details/' + iden + '?apiKey=aUf996KoscqSjiXQEhcKUPhJ_0nZNspn',
                    data: JSON.stringify({
                        "$set": {
                            name: userName,
                            password: Password,
                        }
                    }),
                    contentType: "application/json"
                }).success(function () {
                    // $scope.user.first ="";
                    // $scope.user.last ="";
                    // $scope.password ="";
                    // $scope.email ="";
                    alert("Updated Successfully");
                    $scope.myVar = !$scope.myVar;
                    $scope.updateVar=!$scope.updateVar;
                    // $scope.msg ="User created successfully";
                })
            }
        $scope.delete = function() {
            console.log("inside login function");
            $http({
                method: 'DELETE',
                async: true,
                url : 'https://api.mongolab.com/api/1/databases/student_details/collections//student_details/' + iden + '?apiKey=aUf996KoscqSjiXQEhcKUPhJ_0nZNspn',
                timeout: 300000
            }).success(function() {
                alert("Deleted Successfully");
                $window.location.href = 'index.html';
            })
        }
    });
