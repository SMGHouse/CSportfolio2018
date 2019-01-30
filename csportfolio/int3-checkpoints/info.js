var sword = document.getElementById("sword");
//makes variable for sword image
var hammer = document.getElementById("hammer");
//makes variable for hammer image
var snow = document.getElementById("snow");
//makes variable for snow image
var beam = document.getElementById("beam");
//makes variable for beam image
var fire = document.getElementById("fire");
//makes variable for fire image
var display = document.getElementById("display");
//makes variable for div
sword.addEventListener("click", function(){
    display.innerHTML = "Ultra Sword Kirby- a super ability of his sword ability where he strikes everything infront of him with a giant sword slash."
});
//add eventListener to sword image so when clicked, shows text

hammer.addEventListener("click", function(){
    display.innerHTML = "Grand Hammer Kirby- a super ability of his hammer ability where he strikes everything on the ground a giant hammer swing."
});
//add eventListener to hammer image so when clicked, shows text
snow.addEventListener("click", function(){
    display.innerHTML = "Snow Bowl Kirby- a super ability of his snow ability where he rolls into a snowball and rolls to strike everything infront of him."
});
//add eventListener to snow image so when clicked, shows text
beam.addEventListener("click", function(){
    display.innerHTML = "Flare Beam Kirby- a super ability of his beam ability where he strike everything with a controlled ball of energy."
});
//add eventListener to beam image so when clicked, shows text
fire.addEventListener("click", function(){
    display.innerHTML = "Monster Flame Kirby- a super ability of his fire ability where he strikes everything with a flame dragon across the stage."
});
//add eventListener to fire image so when clicked, shows text