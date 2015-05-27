angular.module('app').controller('ArtistListController', 
    ['$scope', '$log', 'localStorageService', 'ArtistService',
    function($scope, $log, localStorageService, ArtistService){

        $scope.deleteArtist = function(artist){
            for(i = 0; i < $scope.artists.length; i++){
                if($scope.artists[i] === artist){
                    $scope.artists.splice(i, 1);
                }
            }
        };

        $scope.resetArtists = function(){
            $scope.artists = ArtistService.GetArtists().then(function(data){
                    $scope.artists = data;
                }).reject(function(error){
                    $log.error(error);
                });                                                                                         
        };

        //the artists either are the ones in the store or go get them
        //from the service
        var artistsInStore = localStorageService.get('artists');  
        $scope.artists = artistsInStore || ArtistService.GetArtists().then(function(data){
                $scope.artists = data;
            }).reject(function(error){
                $log.error(error);
            });

        //sets a watch on that store binding the $scope.artists to
        //the store 'artists'                          
        $scope.$watch('artists', function () {
            localStorageService.set('artists', $scope.artists);
        }, true); 

}]);