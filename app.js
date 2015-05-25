angular.module('main', [])
.controller('sound', function($scope, data) {
 angular.extends($scope, data);
})
.factory('data', function() {
  // holds notes data
  // holds the context
  // holds the oscillator
  // holds the gain
  // has a function to start the note
  // has a function to stop the note
})