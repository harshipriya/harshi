
angular.module('starter.controllers', ['starter.services'])

.controller('LoginCtrl', function($scope, $state,mainservice,$http,$window,$httpParamSerializerJQLike) {
    $scope.data = {};
      console.log("inside login cntrl function");
 // $scope.pageClass = 'login';
    $scope.login = function(username,password) {
        //console.log("inside login function");
        inside.getMethod();
        $http({
    method: 'GET',
    url : 'https://api.mongolab.com/api/1/databases/studentcorner/collections//Ase_project?apiKey=Q_u73BV4oOdMGpnu3WFGmJ8YH_lxHDHO',
   
    contentType: "application/json"
}).success(function(response) {
     var list=response;
    for(i=0;i<list.length;i++){
         if((list[i].username==username) && (list[i].password==password))
        {
           localStorage.setItem("username",list[i].username);
            localStorage.setItem("id_user",list[i]._id.$oid);
            //alert("Login success");
            //location.href="home.html";
            console.log("inside if loop");
            $state.go('adminhome');
        }
        else{
            //alert("Incorrect username/password");
              console.log("inside else loop");
      document.getElementById('x').innerHTML="<P>Invalid Creditials! Please try again....</p>";
         }
    }
        })
     
    }
})
// begin of student login
.controller('StudentLoginCtrl', function($scope, $state,mainservice,$http,$window,$httpParamSerializerJQLike) {
    $scope.data = {};
      console.log("inside student login cntrl function");
    $scope.pageClass = 'studentlogin';
    $scope.studentlogin = function(username,password) {
        //console.log("inside login function");
          inside.getMethod();
        $http({
    method: 'GET',
    url : 'https://api.mongolab.com/api/1/databases/studentcorner/collections//Ase_project?apiKey=Q_u73BV4oOdMGpnu3WFGmJ8YH_lxHDHO',
   
    contentType: "application/json"
}).success(function(response) {
     var list=response;
    for(i=0;i<list.length;i++){
         if((list[i].username==username) && (list[i].password==password))
        {
           localStorage.setItem("username",list[i].username);
            localStorage.setItem("id_user",list[i]._id.$oid);
            //alert("Login success");
            //location.href="home.html";
            console.log("inside if loop");
            $state.go('studenthome');
        }
        else{
            //alert("Incorrect username/password");
              console.log("inside else loop");
      document.getElementById('x').innerHTML="<P>Invalid Creditials! Please try again....</p>";
         }
    }
        })
     
    }
})
//begin of register controller
.controller('RegisterCtrl', function($scope, $state,RegisterService,$http,$window,$httpParamSerializerJQLike) {
 // $scope.data = {};
  $scope.pageClass = 'register';
    $scope.register = function(firstname,lastname,address,age,email,username,password) {
       // $state.go('home');
          //console.log("inside register function");
        inside.postMethod();
        $http({
    method: 'POST',
    url : 'https://api.mongolab.com/api/1/databases/studentcorner/collections//Ase_project?apiKey=Q_u73BV4oOdMGpnu3WFGmJ8YH_lxHDHO',
    data: JSON.stringify({
                "firstname":firstname,
                "lastname":lastname,
                "address":address,
                "age":age,
                "email":email,
                "username":username,
                "password":password
            }),
    contentType: "application/json"
}).success(function() {
    $scope.firstname ="";
    $scope.lastname="";
    $scope.address="";
    $scope.age="";
    $scope.email ="";
    $scope.username="";
    $scope.password ="";
     
    alert("User created successfully ");
            $state.go('home');
    //$scope.msg ="User created successfully";
    //$window.location.href="index.html";
        })    
    }
    $scope.pageClass = 'logout';
    $scope.logout = function() {
        console.log("student logout!");
         $state.go('main');
    }
})


  //end of register controller
.controller('MainCtrl', function($scope, $state,mainservice) {
  $scope.data = {};
  $scope.pageClass = 'admin';
    $scope.admin = function() {
        console.log("inside admin");
         $state.go('login');
               
}
      $scope.pageClass = 'student';
        $scope.student = function() {
        console.log("student login!");
         $state.go('studentlogin');             
}
              
})

  //end of register controller

//begin of update controller
.controller("UpdateCtrl", function ($scope,$state,$http,$window,$httpParamSerializerJQLike) {

    $scope.pageClass = 'update';
$scope.update = function(firstname,lastname,address,age,email,username,password) {
    
    var id=localStorage.getItem("id_user");
   //console.log("inside update function");
    inside.putMethod();
$http({
    method: 'PUT',
    url: 'https://api.mongolab.com/api/1/databases/studentcorner/collections//Ase_project/'+id+'?apiKey=Q_u73BV4oOdMGpnu3WFGmJ8YH_lxHDHO',
    data: JSON.stringify({
                "firstname": firstname, 
                "lastname":lastname,
                "address":address,
                "age":age,
                "email":email,
                "password":password,
                "email":email
            }),
   
    contentType: "application/json"
    
    
}).success(function() {
    $scope.firstname ="";
    $scope.lastname="";
    $scope.address="";
    $scope.age="";
    $scope.email ="";
    $scope.username="";
    $scope.password ="";
    alert("update successful");
    $state.go("studenthome");
       })
} 
}) 
//end of update controller               

              


.controller("StudenthomeCtrl", function ($scope,$http,$state,$window,$httpParamSerializerJQLike) {

    $scope.pageClass = 'delete';
$scope.delete = function() {
    
    var id=localStorage.getItem("id_user");
   //console.log("inside delete function");
    inside.deleteMethod();
$http({
    method: 'DELETE',
    url: 'https://api.mongolab.com/api/1/databases/studentcorner/collections//Ase_project/'+id+'?apiKey=Q_u73BV4oOdMGpnu3WFGmJ8YH_lxHDHO',
   
    contentType: "application/json"
}).success(function() {
   
    alert("Delete success!");
    console.log("delete success");
    $state.go("main");
       })
}
$scope.update = function(){
   $state.go("update"); 
}
var storageFactory = new StorageFactory();
        var localstorage = storageFactory.createStorage({});
    $scope.username1=localstorage.username;
    
    
var adminName = Admin.getInstance();  
  //console.log(user.fullName()); // true
  
  $scope.firstname = adminName.firstName;
  $scope.lastname = adminName.lastName;
})


;
 