



//make an array for each child of parent object

//set each child to absolute positioning
//set display mode to none and opacity to 0 for all but one child

var currentItem = 0, nextItem = 0, lastItem = 0, numItems = 0;
var displayTime = 2;
var transitionTime = .5;






function JQueryCarousel(id){


    this.nextItem = 1;
    this.lastItem = $(id).children().length - 1;
    this.numItems = $(id).children().length;
    this.currentItem = 0;
    this.id = id;
    this.interval;


    var firstElement = true;
    //for each child, set positioning to absolute
    $(this.id).children().each(function(){
      $(this).css('position', 'absolute');

      if(firstElement){
        firstElement = false;
      }
      else{
        //for each child other than the first one, set opacity to zero
        $(this).css('opacity', 0);
        $(this).css('display', 'none');
      }
    });



  this.transitionForward = function(carousel){
    var self = carousel;
    var tempChildren = $(self.id).children();
    return function (){
      $(tempChildren[self.currentItem]).fadeTo( 3000, 0, 'swing', function() {
        $(tempChildren[self.currentItem]).css('display', 'none');
        self.lastItem = self.currentItem;
        self.currentItem = self.nextItem;
      });
      $(tempChildren[self.nextItem]).fadeTo( 3000, 1, 'swing', function() {
        $(tempChildren[self.nextItem]).css('display', 'block');
        self.nextItem++;
        if(self.nextItem > self.numItems-1){
          self.nextItem = 0;
        }
      });

    };
  };

  this.cycle = function(){
    var self = this;
    var transition = this.transitionForward(self);
    this.interval = setInterval(function(){
      transition()
    }
      , 5000);

  };



  this.transitionBackwards = function(carousel){
    var self = carousel;
    var tempChildren = $(self.id).children();
    return function (){
      $(tempChildren[self.currentItem]).fadeTo( 3000, 0, 'swing', function() {
        $(tempChildren[self.currentItem]).css('display', 'none');
        self.nextItem = self.currentItem;
        self.currentItem = self.lastItem;
      });
      $(tempChildren[self.lastItem]).fadeTo( 3000, 1, 'swing', function() {
        $(tempChildren[self.lastItem]).css('display', 'block');
        self.lastItem--;
        if(self.lastItem < 0){
          self.lastItem = self.numItems-1;
        }
      });

    };
  };

  this.cycleBackwards = function(){
    var self = this;
    var transition = this.transitionBackwards(self);
    this.interval = setInterval(function(){
      transition()
    }
    , 5000);

  };


  }



$(document).ready(function() {
  //console.log("blagathath!");
  $('#plugin').cycle();
  //initCarousel("#original-jquery");
  //cycleCarousel("#original-jquery");
  var jQCarousel = new JQueryCarousel("#original-jquery");
  jQCarousel.cycleBackwards();

});
