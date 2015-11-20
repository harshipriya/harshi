// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])


.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  
   .state('main', {
      url: '/main',
      templateUrl: 'templates/main.html',
      controller: 'MainCtrl'
  })
  .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'LoginCtrl'
  })
  .state('register', {
      url: '/register',
      templateUrl: 'templates/register.html',
      controller: 'RegisterCtrl'
  })
 
   .state('adminhome', {
      url: '/adminhome',
      templateUrl: 'templates/adminhome.html'
      //controller: 'HomeCtrl'
     
  })
   .state('studenthome', {
      url: '/studenthome',
      templateUrl: 'templates/studenthome.html',
      controller: 'StudenthomeCtrl'
    
  })
    .state('studentlogin', {
      url: '/studentlogin',
      templateUrl: 'templates/studentlogin.html',
      controller: 'StudentLoginCtrl'
    
  })
    .state('update', {
      url: '/update',
      templateUrl: 'templates/update.html',
      controller: 'UpdateCtrl'
    
  })
  
      .state('viewid', {
      url: '/viewid',
      templateUrl: 'templates/viewid.html'
      //controller: 'ViewidCtrl'
    
  })
  
      .state('scanid', {
      url: '/scanid',
      templateUrl: 'templates/scanid.html'
      //controller: 'UpdateCtrl'
    
  })
    
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/main');

});
