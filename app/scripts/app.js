angular.module('app', ['LocalStorageModule']).config(function (localStorageServiceProvider) {
  localStorageServiceProvider
    .setPrefix('music-app');
});