/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {
    with(processing) {
        size(1350, 1350);

        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//
        var border = 30;
        background(255, 0, 182);
        draw = function() {

            for (var i = 0; i < width; i++) {
                stroke(random(150),71,136);
                rect(i, 0, border, border);
                rect(0, i, border, border);
                rect(i, 1350 - border, border, border);
                rect(1350 - border, i, border, border);
            }

            kirby = function(x, y) {
                // function for makeing kirby's position change 
                strokeWeight(5);
                fill(255, 142, 204);
                ellipse(x, y, 150, 150);
                stroke(0);
                fill(112, 23, 72);
                ellipse(x - 25, y - 20, 30, 50);
                ellipse(x + 20, y - 20, 30, 50);
                fill(255, 145, 145);
                ellipse(x - 50, y + 20, 20, 10);
                ellipse(x + 50, y + 20, 20, 10);
                fill(255);
                ellipse(x - 25, y - 30, 15, 25);
                ellipse(x + 20, y - 30, 15, 25);
                // makes kirby
            };
            if (mouseX < 750) {
                mouseClicked = function() {
                    kirby(mouseX, mouseY);
                    //makes kirby appear where mouse is clicked
                }
            }

            meta = function(x, y) {
                strokeWeight(5);
                fill(45, 6, 135);
                ellipse(x, y, 150, 150);
                stroke(0);
                fill(1246, 255, 7);
                ellipse(x - 25, y - 20, 30, 50);
                ellipse(x + 20, y - 20, 30, 50);
                fill(212, 0, 255);
                ellipse(x - 50, y + 20, 20, 10);
                ellipse(x + 50, y + 20, 20, 10);
                fill(255);
                ellipse(x - 25, y - 30, 15, 25);
                ellipse(x + 20, y - 30, 15, 25);

                //makes meta knight
            };
            if (mouseX > 750) {
                mouseClicked = function() {
                    meta(mouseX, mouseY);
                }
            }

        };
    }

    // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
};
var p = new Processing(document.getElementById("output-canvas"), sketch);
