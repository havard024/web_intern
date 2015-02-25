'use strict';

angular.module('sobazaar.sofeed', ['ui.router', 'sobazaar.soapi'])

.config(['$stateProvider', function($stateProvider) {
  $stateProvider.state('feed', {
    url: '/feed',
    templateUrl: 'feed/feed.html',
    controller: 'FeedCtrl as feed'
  });
}])

.controller('FeedCtrl', ['soApi', '$scope', function(soApi, $scope) {

        var self = this,
            feedOpts = {
              params: {
                page_size: 10
              }
            };

        self.title = 'Feed'
        self.data = null;
        self.loading = true;
        self.userId = ''

        function search(query) {
            console.log('search', query)

            if (query) {
                feedOpts.params.user_id = query;
            } else {
                delete feedOpts.params.user_id;
            }

            soApi.feed(feedOpts).then(function(response) {
                self.data = response;
            }).finally(function () {
                self.loading = false;
            })
        }

        $scope.$watch('feed.userId', function(n,o) {
            search(n)
        })
}]);