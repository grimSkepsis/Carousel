

$(document).ready(function() {
  console.log("blagathath!");
  $('#plugin').cycle();
  initCarousel("#original-jquery");
});

//make an array for each child of parent object

//set each child to absolute positioning
//set display mode to none and opacity to 0 for all but one child

var currentItem = 0;

function initCarousel(id){
  var firstElement = true;
  //for each child, set positioning to absolute
  $(id).children().each(function(){
    $(this).css('postioning', 'absolute');

    if(firstElement){
        firstElement = false;
    }
    else{
      $(this).css('opacity', 0);
      $(this).css('display', 'none');
    }
  });
  //for each child set opacity too zero

}
