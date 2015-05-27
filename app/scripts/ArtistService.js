angular.module('app').factory('ArtistService', 
    [ '$http' , '$q',
    function($http , $q) {
        var getArtists = function() {
                var deferred = $q.defer();

                $http.get('api/artists.json').
                    success(function(data) {
                    // this callback will be called asynchronously
                    // when the response is available
                        deferred.resolve(data);
                    }).
                    error(function() {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                        deferred.reject("There was an error: ");
                    });

                return deferred.promise;
        }

        return {
                GetArtists : getArtists
        }
}])