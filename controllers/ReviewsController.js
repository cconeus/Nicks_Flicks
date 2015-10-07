nicksFlicks.controller('ReviewsCtrl', function ReviewsCtrl($scope, $stateParams, FilmReviewsFactory, UtilitiesFactory) {
  $scope.movie = UtilitiesFactory.findById(FilmReviewsFactory.movies, $stateParams.movieId)
});
