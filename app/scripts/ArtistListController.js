angular.module('app').controller('ArtistListController', 
    ['$scope', 'localStorageService', 'ArtistService',
    function($scope, localStorageService, ArtistService){

        $scope.deleteArtist = function(artist){
            for(i = 0; i < $scope.artists.length; i++){
                if($scope.artists[i] === artist){
                    $scope.artists.splice(i, 1);
                }
            }
        };
        
        $scope.resetArtists = function(){
            $scope.artists = ArtistService.GetArtists();
        }; 

        //the artists either are the oens in the store or go get them
        //from the service
        var artistsInStore = localStorageService.get('artists');  
        $scope.artists = artistsInStore || ArtistService.GetArtists();    

        //sets a watch on that store binding the $scope.artists to
        //the store 'artists'                          
        $scope.$watch('artists', function () {
            localStorageService.set('artists', $scope.artists);
        }, true); 

}])