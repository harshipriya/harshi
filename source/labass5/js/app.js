
    <script>
    angular.module('myApp')
 .controller('LoginCtrl', function($scope, $http, $location, $cookieStore) {
   var self = this;
   $scope.invalid = false;
   $scope.username=$cookieStore.username;
   $scope.password=$cookieStore.password;


   this.login=function(){
     $http.post('/login', {
       username=$scope.username,
       password=$scope.password
    }).success(function(data) {
      $cookieStore.put('username');
      $location.url('/');
    })
    .error(function() {
      $scope.password='';
      $scope.invalid=true;
    });
  };
});
    </script>