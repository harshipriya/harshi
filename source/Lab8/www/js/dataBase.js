var app = angular.module("starter1", [])
app.controller("LoginCtrl", function ($scope, $http, $httpParamSerializerJQLike) {
$scope.pageClass = 'register';
$scope.visible=true;
$scope.srcc='UpdateUser.html';
$scope.register=function(username,email,password) {

$scope.checked=true; 
$scope.msg ="";
console.log("inside register function");
$http({
method: 'POST',
url : 'http://localhost:9081/MongoRestAppASElab8/MongoLabServlet',
data: JSON.stringify({
username: username,
lastname:lastname,
emailid: emailid,
password: password,
}),
contentType: "application/json"
}).success(function() {
$scope.username ="";

$scope.password ="";
$scope.emailid ="";

$scope.msg ="User created successfully";
alert("Registration Success");
})

else{
$scope.emailid ="";
$scope.reemailid ="";
$scope.checked=false;
$scope.msg ="Emaild-id doesnot match";}
}
$scope.login = function(username,password) {
console.log("inside login function");
//alert('hie');
$http({
method: 'GET',
url : 'http://localhost:9081/MongoRestAppASElab8/MongoLabServlet',
}).success(function(jsonDetails) {
//alert('hie');
var obj=angular.fromJson(jsonDetails);
//alert(obj[0]._id.$oid);
//alert(angular.equals(a,a));
for (var i = 0; i < obj.length; i++) {
//alert(obj[i].name);
//alert(userName);
if(angular.equals(obj[i].username,username))
{
//alert('hie');
if(angular.equals(obj[i].password,password))
{
$scope.checked=true;
$scope.msg="";
//alert('login correct');
localStorage.setItem("username",obj[i].username);
localStorage.setItem("password",obj[i].password);
localStorage.setItem("email",obj[i].email);
localStorage.setItem("id_user",obj[i]._id.$oid);
window.location.href='index.html';
}
}
else
{
}
//alert(obj[i].name);
}
$scope.checked=false;
$scope.msg="UserName / Password is incorrect";
/*$scope.userName1 =obj.name;
$scope.password1 =obj.password;
$scope.email1 =obj.email;*/
})
}
$scope.edit=function(username,username1) {
$http({
method: 'PUT',
url : 'http://localhost:9081/MongoRestAppASElab8/MongoLabServlet',
}).success(function(jsonDetails) {
//alert('hie');
var obj=angular.fromJson(jsonDetails);
//alert(obj[0].username);
//alert(angular.equals(a,a));
for (var i = 0; i < obj.length; i++) {
//alert(obj[i].name);
//alert(userName);
if(angular.equals(obj[i].username,"Nihar"))
{
//alert('hie');
obj[i].username=username1;
alert('hie');
break;
}
else
{
}
//alert(obj[i].name);
}
})
}
$scope.updateuser = function() {
//alert('hie');
$scope.srcc='UpdateUser.html';
}
$scope.deleteuser = function() {
//alert('hie');
$scope.srcc='DeleteUser.html';
}
$scope.api_views = function() {
//alert('hie');
$scope.srcc='mashup.html';
}
$scope.updateuser1 = function(new_user_name,new_last_name,new_password,new_emailid) {
//alert('hie');
var id =localStorage.getItem("id_user");
// alert(id);
$http({
method: 'PUT',
url : 'https://api.mongolab.com/api/1/databases/lab7/collections/users/'+id+'?apiKey=-7Ov9M4e5lWHPyfY0lzFSqhDxN5A_PRX',
data: JSON.stringify({
"username": new_user_name,
"password": new_password,
"lastname": new_last_name,
"emailid" : new_emailid
}),
contentType: "application/json"
}).success(function() {
alert('success');
})
}
$scope.deleteuser1 = function(user_name) {
//alert('hie');
var id =localStorage.getItem("id_user");
// alert(id);
$http({
method: 'DELETE',
url : 'https://api.mongolab.com/api/1/databases/lab7/collections/users/'+id+'?apiKey=-7Ov9M4e5lWHPyfY0lzFSqhDxN5A_PRX',
}).success(function() {
alert('success');
})
}
});