'use strict';

angular.module('sobazaar.sobrand', ['ui.router', 'sobazaar.soapi'])

.config(['$stateProvider', function($stateProvider) {
  $stateProvider.state('brand', {
    url: '/brand',
    templateUrl: 'brand/brand.html',
    controller: 'BrandCtrl as brand'
  });
}])

.controller('BrandCtrl', ['soApi', function(soApi) {

      var self = this;

      self.title = 'Brand'
      self.data = null;

      soApi.brand().then(function(response) {
        self.data = response;
      })
}]);