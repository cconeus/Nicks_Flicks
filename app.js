var nicksFlicks = angular.module('nicksFlicks', ['ui.router']);

nicksFlicks.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: "",
    views: {
      'header': {
        templateUrl: "partials/header.html",
      },
      'body': {
        templateUrl: "partials/welcome.html",
      },
    }
  });

  $stateProvider.state('movies', {
    url: "/movies",
    views: {
      'header': {
        templateUrl: 'partials/header.html',
      },
      'sideBar': {
        templateUrl: 'partials/sidebar.html',
      },
      'body': {
        templateUrl: "partials/movies.html",
      },
    }
  });

  $stateProvider.state('movies.reviews', {
    url: "/:reviewsId",
    views: {
      'header': {
        templateUrl: 'partials/header.html',
      },
      'sideBar': {
        templateUrl: 'partials/sidebar.html',
      },
      'body': {
        templateUrl: "partials/movies.reviews.html",
        controller: 'StudentsCtrl'
      },
    }
  });
});
