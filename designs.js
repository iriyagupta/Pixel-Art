function makeGrid() {
var height = $("#inputHeight").val();
var weight = $("#inputWeight").val();
	for(var i=1 ;i<=height;i++){
	$("#pixelCanvas").append("<tr></tr>");
		for(var j=1;j<=weight;j++){
			$("tr:last").append("<td></td>");
			$("td").addClass("cells");
		}
	}
//color input on clicking
$(".cells").click(function(event){
	var colors = $('#colorPicker').val();
	$(event.target).css("background-color", colors);
	});

//removes color on double clicking
$(".cells").dblclick(function(event){
	$(event.target).css("background-color","#ffffff");
});

//paints when dragged over
var hoverC ;
$(".cells").mousedown(function(){
	hoverC = true;  //activates hovering on grid when grid is clicked 
});
$(".cells").mouseup(function(){
	hoverC = false; //deactivates hovering if unclicked 
});
// paints while hovering
$(".cells").mouseover(function() {
	if (hoverC===true)
    var colors= $("#colorPicker").val(); 
    $(this).css("background-color", colors);
 });
}
//creates grid

var submitButton = $('input[type="submit"]');
submitButton.click(function(event){
	event.preventDefault();
	$("#pixelCanvas").empty();
	makeGrid();
});
//resets grid
 var resetButton = $('input[type="reset"]');
	resetButton.click(function(event){
 	event.preventDefault();
 	$("#pixelCanvas").children().remove();
 });

