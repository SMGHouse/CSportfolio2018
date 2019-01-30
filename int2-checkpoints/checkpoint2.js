/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//


draw = function() {
    
    ellipse(mouseX, mouseY,50 ,50)
    
    if(mouseX > 200){
        fill (255,0,144);
        stroke (250,255,0);
        strokeWeight (5);  
    }
    else{
        fill (250,255,0);
        stroke (255,0,144);
        strokeWeight (5);
    
    if(mouseY > 200){
        fill (255,21,0);
        stroke (0,97,255);
        strokeWeight (5);
    }
    else{
        fill (0,97,255);
        stroke (255,21,0);
        strokeWeight(5);
    }
    }
    if(mouseY > 200){
        ellipse(mouseX, mouseY, 100,50)
    }
    else
        ellipse(mouseX, mouseY, 50,50)
 
        
        
// this makes the circle change color when the mouse crosses 200 on the y axis
    
};    
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
