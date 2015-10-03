'use strict';
describe('Controller: LoginCtrl', function() {
  var LoginCtrl, $httpBackend, $rootScope, $provide, $location, $cookieStore, scope;
  beforeEach(module('myApp'));

  beforeEach(inject(function($injector) {
    $httpBackend=$injector.get('$httpBackend');
    $rootScope=$injector.get('rootScope');
    $cookieStore=$injector.get('$cookieStore');


    LoginCtrl=function() {
      return $controller('LoginCtrl', { // --> this is error: $controller is not defined
        '$scope': $rootScope,
        '$cookieStore': $cookieStore,
        '$location': $location
      });
    };
  }));

  //This is success
  it('should have a LoginCtrl controller', function() {
    expect('myApp.LoginCtrl').toBeDefined();
  });

  // Failure
  it('should store username and password into cookies', function() {
    var $scope={};
    var loginCtrl=LoginCtrl();
    $scope.username='testUser';
    expect($cookieStore.get('username')).toBe('testUser');
  });

  // Failure
  it('should logs a user in and redirect', function() {
    angular.element('username').enter('testUser'); // --> error: angular.element(...).enter is not a function
    angular.element('password').enter('testPassword');
    angular.element(':button').click();
    expect(location.url).toBe('/'); // --> error: location is not defined
  });
});