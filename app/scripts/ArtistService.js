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
              error(function(data) {
              // called asynchronously if an error occurs
              // or server returns response with an error status.
                deferred.reject("There was an error: " + data);
              });

            return deferred.promise;
        }

        var getArtist = function(name) {
              var deferred = $q.defer();

              $http.get('api/artists.json').
              success(function(data) {
              // this callback will be called asynchronously
              // when the response is available
                var artist = null;
                for(i = 0; i < data.length; i++){
                  if(data[i].Name === name){
                    artist = data[i];
                  }
                }
                if(artist){
                  deferred.resolve(artist);
                }else{
                  deferred.reject("Artist not found");
                }
                
                }).
                error(function(data) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                  deferred.reject("There was an error: " + data);
                });

            return deferred.promise;
        }

        return {
              GetArtists : getArtists,
              GetArtist: getArtist
        }
}])