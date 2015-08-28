var wohligapp = angular.module('starter', ['ionic', 'starter.controllers']);

wohligapp.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {});
});

wohligapp.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider, $httpProvider) {
  $ionicConfigProvider.scrolling.jsScrolling(false);
  $ionicConfigProvider.views.swipeBackEnabled(false);
  $stateProvider

  .state('wohlig', {
    url: "/wohlig",
    abstract: true,
    controller: 'WohligCtrl',
    templateUrl: "template/home.html"
  })
    .state('wohlig.home', {
      url: "/home",
      views: {
        'content': {
          templateUrl: "template/home.html",
          controller: 'HomeCtrl'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/wohlig/home');


});

wohligapp.directive('typedJs', function($document) {
  return {
    restrict: 'EA',
    replace: false,
    link: function($scope, element, attr) {
      $('.cometyes').hide();
      var $element = $(element);
      dem = $element;
      $element.typed({
        strings: ["Hi! I’m Matt Wazolski. <br>Welcome to the universe. I hope you are doing good.<br><br>Are you ready for the ride?"],
        typeSpeed: 60,
        callback: function() {
          $('.cometyes').fadeIn();
          console.log('Done');
        }
      });
    }
  }
});
