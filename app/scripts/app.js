'use strict';

/**
 * @ngdoc overview
 * @name margauxcuisineApp
 * @description
 * # margauxcuisineApp
 *
 * Main module of the application.
 */
angular
  .module('margauxcuisineApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
