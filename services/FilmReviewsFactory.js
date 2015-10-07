nicksFlicks.factory('FilmReviewsFactory', function FilmReviewsFactory() {
  var factory = {};
  factory.movies = [{
    movieTitle: "Braveheart",
    reviews: "Some text about Braveheart",
    movieId: 1
  },
  {
    movieTitle: "Speed",
    reviews: "Some review text about the movie Speed",
    movieId: 2
  }
  ];

  factory.addReview = function() {
    factory.movies.push({
        movieTitle: factory.movieTitle,
        body: factory.reviews,
        movieId: factory.movies.length + 1
    });
    factory.movieTitle = null;
    factory.reviews = null;
};

  return factory;
})
