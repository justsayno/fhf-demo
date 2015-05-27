angular.module('app').controller("ArtistListController", 
    ['$scope','ArtistService',
    function($scope, ArtistService){

        $scope.artists = ArtistService.GetArtists();

        $scope.deleteArtist = function(artist){
            for(i = 0; i < $scope.artists.length; i++){
                if($scope.artists[i] === artist){
                    $scope.artists.splice(i, 1);
                }
            }
        };

}])