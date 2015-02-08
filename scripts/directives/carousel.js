angular.module('app.directives.carousel', [])
  .directive('carousel', function(){ //function is dependancy injected
    return{
      restrict: 'E',//restricts directive to Element A = Attr  C = class
      scope: {
        data: '=',
        dir: '=',
        cycle:'=',
        time: '='
      },
      controller: function($scope, $interval){
        $scope.carouselArray = new Array();
        var cycleDir = $scope.dir;
        var cycle = $scope.cycle;
        var cArray = $scope.carouselArray;
        var transTime = $scope.time;
        var positionTracker = {cur: 0, next: 1, prev: $scope.data.length -1};

        for(var i = 0; i < $scope.data.length; i++){
          if(i == 0){
            cArray.push({url: $scope.data[i], displayed: true});
          }
          else{
            cArray.push({url: $scope.data[i], displayed: false});
          }
        }

        $scope.advanceForward = function(){
          cArray[positionTracker.next].displayed = true;
          cArray[positionTracker.cur].displayed = false;

          positionTracker.prev = positionTracker.cur;
          positionTracker.cur = positionTracker.next;
          positionTracker.next++;

          if(positionTracker.next > cArray.length-1){
            positionTracker.next = 0;
          }
        };

        $scope.advanceBackward = function(){
          cArray[positionTracker.prev].displayed = true;
          cArray[positionTracker.cur].displayed = false;

          positionTracker.next = positionTracker.cur;
          positionTracker.cur = positionTracker.prev;
          positionTracker.prev--;

          if(positionTracker.prev < 0){
            positionTracker.prev = cArray.length-1;
          }
        };


        $interval(function(){
          if(cycle){
            if(cycleDir == 'forward'){
              $scope.advanceForward();
            }else if(cycleDir =='backward'){
              $scope.advanceBackward();
            }
         }
       },transTime);
      },
      link: function(scope, element, attribute) {
        var imgArray = element.children;

      },
      templateUrl:"templates/carousel.html"
    };
  });
