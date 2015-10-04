nicksFlicks.factory('FilmReviewsFactory', function FilmReviewsFactory() {
  var factory = {};
  factory.reviews = [];

  factory.addReview = function() {
    factory.reviews.push({ name: factory.reviewName, id: factory.reviews.length +1, students: [] });
    factory.reviewName = null;
  };

  return factory;
})
