/** alert("Test");  **/


$(document).ready(function(){

  boxGen();

});






var height = parseInt(prompt("How many boxes high?"), 10);
var width = parseInt(prompt("How many boxes wide?"), 10);



var boxGen = function(){

for(i=0; i<height; i++)
  $("#theBox").append('<tr class="newRow"></tr>');
    for(j=0; j<width; j++){
      $(".newRow").append('<td class="newData"></td>');
    }
hoverEffect();
};


function hoverEffect(){
$('.newData').hover(
  function(){
    $(this).addClass('change');
})

};
