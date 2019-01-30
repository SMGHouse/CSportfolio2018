var newBGColor = document.getElementById("newBGColor");
//makes variable for color change
var colorChangeButton = document.getElementById("colorChangeButton");
//makes variable for button to change color

colorChangeButton.addEventListener("click", function(){
//to make the button clickable
    document.body.style.backgroundColor = newBGColor.value;
//changes the color of background
})
