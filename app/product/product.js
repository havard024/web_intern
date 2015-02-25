'use strict';

angular.module('sobazaar.soproduct', ['ui.router', 'sobazaar.soapi'])

.config(['$stateProvider', function($stateProvider) {
      $stateProvider.state('product', {
        url: '/product',
        templateUrl: 'product/product.html',
        controller: 'productCtrl as product'
      })
}])

.controller('productCtrl', ['soApi', function(soApi) {
        var self = this;

        self.title = 'Product'
        self.data = null;

        soApi.product().then(function(response) {
            self.data = response;
        })
}]);