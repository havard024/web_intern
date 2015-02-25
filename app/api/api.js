/**
 * Created by mac on 2/25/15.
 */

'use strict';

angular.module('sobazaar.soapi', ['ui.router'])

    .factory('soApi', ['$http', function ($http) {

        var backend_end_point = 'http://api-noren.sobazaar.com/api/web/';

        function createRequest(url, opts) {
            var opts = opts || {};
            return $http.get(backend_end_point + url, opts).then(function (response) {
                return response.data;
            })
        }
        return {
            feed: function(opts) {
                return createRequest('feed/', opts);
            },
            brand: function(opts) {
                return createRequest('brand/', opts);
            },
            product: function(opts) {
                return createRequest('product/', opts);
            }
        }
    }])
