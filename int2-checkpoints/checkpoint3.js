/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {
    with(processing) {
        size(400, 400);
                    background(242,230,67);
        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

        

        draw = function() {

        for (var mouseX = 0; mouseX < width; mouseX += 30) {
            for (var mouseY = 0; mouseY < height; mouseY += 30) {
                var size = random(30);
                fill(random(225), random, (255), random(255));
                stroke(random(255), random(255), random(255));
                ellipse(mouseX, mouseY, random(30), random(30));
            }
        }

                }

            }

        };
        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
    
var p = new Processing(document.getElementById("output-canvas"), sketch);
