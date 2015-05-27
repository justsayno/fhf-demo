angular.module('app').controller("ArtistListController", 
    ['$scope','ArtistService',
    function($scope,ArtistService){
        $scope.artists = ArtistService.GetArtists();
}])