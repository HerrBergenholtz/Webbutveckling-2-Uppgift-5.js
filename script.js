// JavaScript
let inputElem; //Variabel för de tre fälten som användaren skriver i.
let msgElem; //Elementet där text meddelande kommer skrivas ut.
let fruitImg; //Bilden där frukterna kommer visas.
let fruitNames; //Deklarerar en variabel som kommer att göras till en array där alla fruktnamn sparas.
let fruitNr; //Deklareras för att sedan indexera fruitNames.
let selFruitsElem; //Deklareras och kommer sedan att defineras som med div elementet där fruktbildenra ska läggas till.
let buttonShowImage; //Första knappen som man trycker på för att visa en frukt.
let buttonFruitName; //Andra knappen som man trycker på för att kontrollera namnet på frukten.
let buttonAddFruits; //Tredje knappen som man trycker på för att lägga till fruktbilder i selFruitsElem.
// Globala variabler

// Funktion som körs då hela webbsidan är inladdad, dvs då all HTML-kod är utförd.
// Initiering av globala variabler samt koppling avfunktioner till knapparna.
function init() { //Denna funktionen kommer att köras när webbsidan laddas in, då kommer den att definera variablerna ovan till element i html koden genom att välja deras id.
    inputElem = [];
    inputElem[1] = document.getElementById("input1");
    inputElem[2] = document.getElementById("input2");
    inputElem[3] = document.getElementById("input3");
    msgElem = document.getElementById("message");
    fruitImg = document.getElementById("fruitImg");
    fruitNames = [];
    fruitNames[1] = "äppel";
    fruitNames[2] = "banan";
    fruitNames[3] = "citron";
    fruitNames[4] = "apelsin";
    fruitNames[5] = "päron";
    console.log(fruitNames)
    fruitNr = 0;
    selFruitsElem = document.getElementById("selectedFruits");
    buttonShowImage = document.getElementById("btn1");
    buttonShowImage.addEventListener("click", showFruit);
    buttonFruitName = document.getElementById("btn2");
    buttonFruitName.addEventListener("click", checkName);
    buttonAddFruits = document.getElementById("btn3");
    buttonAddFruits.addEventListener("click", addFruits);
} // End init
window.onload = init; // Se till att init aktiveras då sidan är inladdad

function showFruit() {
    let nr;
    let fruitUrl;

    nr = getNr(1, 5);

    if (nr == null) {
        console.log("Funkar icke");
    }

    fruitUrl = `pics/fruit${nr}.jpg`; // "pics/fruit" + nr + ".jpg"  
    fruitImg.src = fruitUrl;

    fruitNr = nr;
}

function checkName() {
    let name;

    if (fruitNr == 0) {
        msgElem.innerHTML = "<p>Du måste först välja en frukt genom att skriva in ett nummer i första fältet </p>";
        return;
    }

    name = inputElem[2].value;

    if (name === fruitNames[fruitNr]) {
        msgElem.innerHTML = "<p>Rätt namn.</p>";
    } else {
        msgElem.innerHTML = "<p>Fel namn.</p>";
    }

}

function getNr(elemNr, high) {
    let nr;

    nr = Number(inputElem[elemNr].value);
    if (isNaN(nr)) {
        msgElem.innerHTML = "<p>Du måste skriva in ett tal</p>";
        return null;
    }

    if (nr < 1 || nr > high) {
        msgElem.innerHTML = "<p>Du måste skriva ett nummer mellan 1 och " + high + "</p>";
        return null;
    }

    if (Number.isInteger(nr)) {
        console.log("Input = integer")
    } else {
        nr = parseInt(nr)
        msgElem.innerHTML = "<p> Numret korrigerades till " + nr + ".</p>";
    }

    return nr;
}

function addFruits() {
    let amount;
    let imgList;
    let i;

    if (fruitNr == 0) {
        msgElem.innerHTML = "<p>Du måste först välja en frukt genom att skriva in ett nummer i första fältet </p>";
        return;
    }

    amount = getNr(3, 9);

    if (amount == null) {
        console.log("Funkar icke");
    }

    imgList = "";
    for (i = 0; i < amount; i++) {
        imgList += "<img src='pics/fruit" + fruitNr + ".jpg' alt='frukt'>";
    }

    selFruitsElem.innerHTML += imgList;
}
