angular.module('app').controller('ArtistSingleController', 
  ['$scope', '$log', '$routeParams', 'ArtistService',
  function($scope, $log, $routeParams, ArtistService){
    ArtistService.GetArtist($routeParams.name).then(function(data){
        $scope.artist = data; 
    });
}]);