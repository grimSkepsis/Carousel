angular.module('app.directives.carousel', [])
  .directive('carousel', function(){ //function is dependancy injected
    return{
      restrict: 'E',//restricts directive to Element A = Attr  C = class
      scope: {
        data: '=',

      },
      controller: function($scope){

      },
      link: function(scope, element, attribute) {
        var imgArray = element.children;
        console.log(element.context.children);
      },
      templateUrl:"templates/carousel.html"
    };
  });
