

$(document).ready(function() {
  console.log("blagathath!");
  $('#plugin').cycle();
  initCarousel("#original-jquery");
  cycleCarousel("#original-jquery");
});

//make an array for each child of parent object

//set each child to absolute positioning
//set display mode to none and opacity to 0 for all but one child

var currentItem = 0, nextItem = 0, lastItem = 0, numItems = 0;
var displayTime = 2;
var transitionTime = .5;

function initCarousel(id){
  nextItem = 1;
  lastItem = $(id).children().length - 1;
  numItems = $(id).children().length;
  var firstElement = true;
  //for each child, set positioning to absolute
  $(id).children().each(function(){
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


}

function cycleCarousel(id){
  var myVar = setInterval(function () {
    transitionForward(id)
  }
  , 5000);
}

function transitionForward(id){
  var tempChildren = $(id).children();
  //$(tempChildren[currentItem]).css('opacity', 0);
  //$(tempChildren[nextItem]).css('display', 'none');
  $(tempChildren[currentItem]).fadeTo( 3000, 0, 'swing', function() {
    $(tempChildren[currentItem]).css('display', 'none');

    lastItem = currentItem;
    currentItem = nextItem;
  });

  //$(tempChildren[nextItem]).css('opacity', 1);
  //$(tempChildren[nextItem]).css('display', 'block');
  $(tempChildren[nextItem]).fadeTo( 3000, 1, 'swing', function() {
    $(tempChildren[nextItem]).css('display', 'block');
    nextItem++;

    if(nextItem > numItems-1){
      nextItem = 0;
    }
  });



  console.log("current item: " + currentItem + " next item: " + nextItem);
}
