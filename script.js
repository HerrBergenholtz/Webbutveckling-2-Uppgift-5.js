// JavaScript
let inputElem;
let msgElem;
let button;
let fruitImg;
// Globala variabler


// Funktion som körs då hela webbsidan är inladdad, dvs då all HTML-kod är utförd.
// Initiering av globala variabler samt koppling avfunktioner till knapparna.
function init() {
    inputElem = [];
    inputElem[1] = document.getElementById("input1");
    inputElem[2] = document.getElementById("input2");
    inputElem[3] = document.getElementById("inut3");
    fruitImg = document.getElementById("fruitImg");
    msgElem = document.getElementById("message");
    button = document.getElementById("btn1").onclick = showFruit

} // End init
window.onload = init; // Se till att init aktiveras då sidan är inladdad

function showFruit() {
    let nr;
    let fruitUrl;

    nr = Number(inputElem[1].value);
    if (isNaN(nr)){
        msgElem.innerHTML = "<p>Du måste skriva in ett tal</p>"
        return
    } 

    fruitUrl = "pics/fruit" + nr + ".jpg";
    fruitImg.src = fruitUrl
}   


