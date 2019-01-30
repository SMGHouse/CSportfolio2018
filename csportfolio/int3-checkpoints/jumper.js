var button = document.getElementById("button");
//variable for button
button.style.position= "absolute";
//makes position of button absolute
button.addEventListener("mousemove", function(){
    button.style.top=Math.random() *700+ "px";
    button.style.left=Math.random() *1500 + "px";
    //makesbutton move across the page from 1500, width by 700, length when mouse hovers over it
    
})