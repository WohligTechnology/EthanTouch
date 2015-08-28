angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope, $ionicModal, $timeout, $ionicLoading) {
})

.controller('WohligCtrl', function($scope, $ionicModal, $ionicLoading, $ionicScrollDelegate) {
      console.log('controller');

  var messageOptions = [{
    content: '<p>Wow, this is really something huh?</p>'
  }, {
    content: '<p>Yea, it\'s pretty sweet</p>'
  }, {
    content: '<p>I think I like Ionic more than I like ice cream!</p>'
  }, {
    content: '<p>Gee wiz, this is something special.</p>'
  }, {
    content: '<img src="img/logo.png" class="full-image"/>'
  }, {
    content: '<p>Is this magic?</p>'
  }, {
    content: '<p>Am I dreaming?</p>'
  }, {
    content: '<img src="img/logo.png" class="full-image"/>'
  }, {
    content: '<p>Am I dreaming?</p>'
  }, {
    content: '<p>Yea, it\'s pretty sweet</p>'
  }, {
    content: '<p>I think I like Ionic more than I like ice cream!</p>'
  }, ];

  var messageIter = 0;
  $scope.messages = [];

  $scope.add = function() {
    var nextMessage = messageOptions[messageIter++ % messageOptions.length];
    $scope.messages.push(angular.extend({}, nextMessage));
    $ionicScrollDelegate.scrollBottom(true);
  };
});
