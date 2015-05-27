angular.module('app', ['LocalStorageModule', 'ngRoute', 'ui.sortable']).config(function (localStorageServiceProvider) {
  localStorageServiceProvider
    .setPrefix('music-app');
}).config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/artists', {
        templateUrl: 'views/artistList.html',
        controller: 'ArtistListController'
      }).
      when('/artists/:name', {
        templateUrl: 'views/artistSingle.html',
        controller: 'ArtistSingleController'
      }).
      otherwise({
        redirectTo: '/artists'
      });
}]);