/** alert("Test");  **/


$(document).ready(function(){
  boxGen(genSize);
  newGame();
});






var genSize = parseInt(prompt("How many boxes should the game be?"), 10);
//var size = parseInt(prompt("How many boxes should the game be?"), 10);




var boxGen = function(theSize){

var size = theSize;
for(i=0; i<size; i++)
  $("#theBox").append('<tr class="newRow"></tr>');

    for(j=0; j<size; j++){
      $(".newRow").append('<td class="newData"></td>');
      $(".newData").width(600/size);
      $(".newData").height(600/size);
    }
hoverEffect();
};


function hoverEffect(){
$('.newData').hover(
  function(){
    $(this).addClass('change');
})

};



function newGame(){

  $('#reset').click(
    function(){
      $("#theBox").empty();
      var newSize = parseInt(prompt("How big should the new game be?"),10);

         boxGen(newSize);
      })
};
