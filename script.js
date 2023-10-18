// JavaScript
let inputElem; //Variabel för de tre fälten som användaren skriver i.
let msgElem; //Elementet där text meddelande kommer skrivas ut.
let fruitImg; //Bilden där frukterna kommer visas.
let fruitNames; //Deklarerar en variabel som kommer att göras till en array där alla fruktnamn sparas.
let fruitNr; //Deklareras för att sedan indexera fruitNames.
let selFruitsElem; //Deklareras och kommer sedan att definieras som med div elementet där fruktbildenra ska läggas till.
let buttonShowImage; //Första knappen som man trycker på för att visa en frukt.
let buttonFruitName; //Andra knappen som man trycker på för att kontrollera namnet på frukten.
let buttonAddFruits; //Tredje knappen som man trycker på för att lägga till fruktbilder i selFruitsElem.
// Globala variabler

// Funktion som körs då hela webbsidan är inladdad, dvs då all HTML-kod är utförd.
// Initiering av globala variabler samt koppling av funktioner till knapparna.
function init() { //Denna funktionen kommer att köras när webbsidan laddas in, då kommer den att definiera variablerna ovan till element i html koden genom att välja deras id.
    inputElem = []; //definierar inputElem som en arrayen.
    inputElem[1] = document.getElementById("input1");
    inputElem[2] = document.getElementById("input2");
    inputElem[3] = document.getElementById("input3"); //Arrayen definieras med de tre input fälten, arrayen börjar med 1 så att det blir simplare att hålla ordning på.
    msgElem = document.getElementById("message"); //Det element där meddelande skrivs ut
    fruitImg = document.getElementById("fruitImg"); //Bilden som ska ändras till olika frukter
    fruitNames = []; //definierar fruitNames som en array.
    fruitNames[1] = "äppel";
    fruitNames[2] = "banan";
    fruitNames[3] = "citron";
    fruitNames[4] = "apelsin";
    fruitNames[5] = "päron"; //definierar fruitNames arrayen med frukternas namn, jag börjar från 1 så att det också korresponderar till rätt fruktnummer.
    fruitNr = 0; //Numret av frukter som skrivs ut är 0 om användaren inte lägger in ett annat värde eftersom att vi inte vill att det ska skrivas ut något förens användaren gör något.
    selFruitsElem = document.getElementById("selectedFruits");
    buttonShowImage = document.getElementById("btn1");
    buttonShowImage.addEventListener("click", showFruit);
    buttonFruitName = document.getElementById("btn2");
    buttonFruitName.addEventListener("click", checkName);
    buttonAddFruits = document.getElementById("btn3");
    buttonAddFruits.addEventListener("click", addFruits); //Här har alla knappar definierats och även fått varsin eventListener som kommer att anropa en funktion som har med knappen att göra
} // End init
window.onload = init; // Se till att init aktiveras då sidan är inladdad

function showFruit() { //Detta är funktionen för att visa den frukt som användaren har valt genom att skriva in ett nummer i inputElem[1].
    let nr; //Detta är numret som användaren skriver in
    let fruitUrl; //Detta kommer definieras med en textsträng som kommer att vara länken till en av frukterna. 

    nr = getNr(1, 5); //Detta anropar funktionen getNr med parametern: elemNr = 1 (inputElem[1]) och high = 5 (högsta värdet som kan väljas).

    if (nr == null) { //Denna if-sats finns bara till för att kontrollera att man får ett värde från getNr funktionen
        console.log("Funkar icke");
        return //return används för att lämna funktionen 
    }

    fruitUrl = `pics/fruit${nr}.jpg`; //Detta är textsträngen som är en länk till en av fruktbilderna, man lägger till nr i strängen för att få fram olika frukter beroende på det tal som användaren skrev in.  ""pics/fruit" + nr + ".jpg"" är ett annat sätt att skriva det på (Det sättet som jag skrev det på känns smidigare men vet inte vilket som är mest korrekt).
    fruitImg.src = fruitUrl; //Detta ändrar om fruitImg källan till fruitUrl vilket kommer att byta bilden till en frukt.

    fruitNr = nr; //fruitNr är en global variabel som används för att ta med nr till en annan funktion vilket vi kan göra genom att definiera den med nr såhär.
}

function checkName() { //Denna funktion kommer kommer att kontrollera namnet som användaren skriver in i det andra fältet
    let name; // Deklarerar name som sedan kommer definieras som inputElem[2]

    if (fruitNr == 0) { //Denna if-satsen kontrollerar om användare har skrivit in ett nummer i inputElem[2] om inte så kommer ett meddelande skrivas ut i msgElem.
        msgElem.innerHTML = "<p>Du måste först välja en frukt genom att skriva in ett nummer i första fältet </p>"; //Skriver ut text.
        return;
    }

    name = inputElem[2].value; //Definierar name till inputElem[2].value. .value är nödvändigt för att koden ska fungera korrekt

    if (name == fruitNames[fruitNr]) { //If-satsen är till för att kontrollera om namnet stämmer, det görs genom att jämföra name med fruitNames indexet av det nummer som användaren har valt i inputElem[1]. Detta är anledningen till att vi gjorde en global variable (fruitNr) och definerade den som nr i funktionen showFruit. 
        msgElem.innerHTML = "<p>Rätt namn.</p>";
    } else {
        msgElem.innerHTML = "<p>Fel namn.</p>"; //Sedan skrivs antingen rätt eller fel svar ut i msgElem.
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
