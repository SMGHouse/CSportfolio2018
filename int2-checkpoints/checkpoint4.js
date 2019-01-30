/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {
    with(processing) {
        size(400, 400);
        background(255);
        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//


        draw = function() {
            kirby = function(x, y) {


                fill(255, 181, 222);
                ellipse(x, y, 150, 150);
                stroke(0);
                fill(112, 23, 72);
                ellipse(x - 25, y - 20, 30, 50);
                ellipse(x + 20, y - 20, 30, 50);
                fill(249, 134, 198);
                ellipse(x - 50, y + 20, 20, 10);
                ellipse(x + 50, y + 20, 20, 10);
                fill(255);
                ellipse(x - 25, y - 30, 15, 25);
                ellipse(x + 20, y - 30, 15, 25);
            };

            mouseClicked = function() {
                kirby(mouseX, mouseY);
            }
        };


        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
    }
};
var p = new Processing(document.getElementById("output-canvas"), sketch);
