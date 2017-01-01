//Create an overlay
//var overlay = document.createElement("div");
//var lay = function() {
//    console.log("overlay");
//    
//    overlay.id = 'overlay';
//    document.body.appendChild(overlay);
//}

var $overlay = $('<div id="overlay"></div>');
$("body").append($overlay);

completedTaskHolder.addEventListener("click", function(event) {
    $overlay.show();
});

//When overlay is clicked 
$overlay.click(function(event){
  //Hide the overlay
  if(event.target.id == "overlay")
    $(this).hide();
});









