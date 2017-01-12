var $overlay = $('<div id="overlay"></div>');
var $textBoxHolder = $('<div id="textBoxHolder"></div>')
var $textBox = $('<div id="textbox"></div>');
var $leftArrow = $('<button id="previous"></button>');
var $rightArrow = $('<button id="next"</button>');
var $XButton = $('<button id="x-button"></button>');
//var x = document.getElementsByClassName("article");
//var $label = $('<label type="label"></label>');


// Variable to keep track of which overlay
// list item is in use
var $index = 0;

//Function to update overlay label and paragraph
//var updateOverlay = function(labelLocation, paragraphLocation) {
//    label.innerText = labelLocation;        
//}

//Add overlay
$("body").append($overlay);

$overlay.append($textBoxHolder);

//TextBox to overlay
$textBoxHolder.append($textBox);

//Arrows to text box
$textBox.append($leftArrow);
$textBox.append($rightArrow);

//X button to text box
$textBox.append($XButton);

//Capture the click event on a list item
completedTaskHolder.addEventListener("click", function (event) {
    if (event.target.className !== 'delete-task') {

        //$textBox.append(completedTaskHolder);

        //var label = document.createElement("label");
        //var paragraph = document.createElement("p");

        //label.type = "label";

        //$textBox.append(label);
        //$textBox.append(paragraph);

        //label.innerText = "label";
        //paragraph.innerText = "paragraph";

        //var labelLocation = ;
        //var paragraphLocation = ;

        //updateOverlay(labelLocation, paragraphLocation);

        $overlay.show();
    }
});

//When overlay or X button is clicked 
//hideOverlay.addEventListener()

$overlay.click(function(event) {
  //Hide the overlay
  if(event.target.id == "overlay" || event.target.id == "x-button") 
    $(this).hide();
});

//$XButton.click(function(event) {
//	// Hide the overlay
//	$overlay.hide();
//});









