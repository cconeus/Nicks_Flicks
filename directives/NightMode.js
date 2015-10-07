nicksFlicks.directive("changeClass", function($document) {
  return function(scope, element, attrs) {
    element.bind("click", function() {
      $document.find("body").toggleClass(attrs.changeClass);
    });
  }
});
