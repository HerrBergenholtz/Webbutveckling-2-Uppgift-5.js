// JavaScript
let inputElem; //Variabel för de tre fälten som användaren skriver i
let msgElem; //Elementet där text meddelande kommer skrivas ut 
let buttonShowImage; //Första knappen som man trycker på för att visa en frukt
let buttonFruitName; //Andra knappen som man trycker på där man ska skriva in namnet
let fruitImg; //Bilden där frukterna kommer visas
// Globala variabler


// Funktion som körs då hela webbsidan är inladdad, dvs då all HTML-kod är utförd.
// Initiering av globala variabler samt koppling avfunktioner till knapparna.
function init() { //Denna funktionen kommer att köras när webbsidan laddas in, då kommer den att definera variablerna ovan till element i html koden genom att välja deras id
    inputElem = [];
    inputElem[1] = document.getElementById("input1");
    inputElem[2] = document.getElementById("input2");
    inputElem[3] = document.getElementById("inut3");
    fruitImg = document.getElementById("fruitImg");
    msgElem = document.getElementById("message");
    buttonShowImage = document.getElementById("btn1");
    buttonShowImage.addEventListener("click", showFruit);
    buttonFruitName = document.getElementById("btn2");
} // End init
window.onload = init; // Se till att init aktiveras då sidan är inladdad

function showFruit() {
    let nr;
    let fruitUrl;

    nr = Number(inputElem[1].value);
    if (isNaN(nr)) {
        msgElem.innerHTML = "<p>Du måste skriva in ett tal</p>";
        return;
    }

    if (nr < 1, nr > 5) {
        msgElem.innerHTML = "<p>Du måste skriva ett nummer mellan 1 och 5";
        return;
    }

    /*if (Number.isInteger(nr)) {
        console.log("Hej")
    } else {
        Math.round(nr)
        msgElem.innerHTML = "<p> Numret korrigerades till" + nr + " </p>";
    }*/

    fruitUrl = "pics/fruit" + nr + ".jpg";
    fruitImg.src = fruitUrl;
}

function fruitName() {

}
