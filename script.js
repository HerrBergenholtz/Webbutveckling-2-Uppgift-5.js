// JavaScript
// Globala variabler
let inputElem; //Variabel för de tre fälten som användaren skriver i.
let msgElem; //Elementet där text meddelande kommer skrivas ut.
let fruitImg; //Bilden där frukterna kommer visas.
let fruitNames; //Deklarerar en variabel som kommer att göras till en array där alla fruktnamn sparas.
let fruitNr; //Deklareras för att sedan indexera fruitNames.
let selFruitsElem; //Deklareras och kommer sedan att definieras som med div elementet där fruktbildenra ska läggas till.
let buttonShowImage; //Första knappen som man trycker på för att visa en frukt.
let buttonFruitName; //Andra knappen som man trycker på för att kontrollera namnet på frukten.
let buttonAddFruits; //Tredje knappen som man trycker på för att lägga till fruktbilder i selFruitsElem.

// Funktion som körs då hela webbsidan är inladdad, dvs då all HTML-kod är utförd.
// Initiering av globala variabler samt koppling av funktioner till knapparna.
function init() { //Denna funktionen kommer att köras när webbsidan laddas in, då kommer den att definiera variablerna ovan till element i html koden genom att välja deras id.
    inputElem = []; //definierar inputElem som en arrayen.
    inputElem[1] = document.getElementById("input1");
    inputElem[2] = document.getElementById("input2");
    inputElem[3] = document.getElementById("input3"); //Arrayen definieras med de tre input fälten, arrayen börjar med 1 så att det blir simplare att hålla ordning på.

    msgElem = document.getElementById("message"); //Det element där meddelande skrivs ut.
    fruitImg = document.getElementById("fruitImg"); //Bilden som ska ändras till olika frukter.
    fruitNr = 0; //Numret av frukter som skrivs ut är 0 om användaren inte lägger in ett annat värde eftersom att vi inte vill att det ska skrivas ut något förens användaren gör något.
    selFruitsElem = document.getElementById("selectedFruits"); //Här ska listan med frukter läggas till.

    fruitNames = []; //definierar fruitNames som en array.
    fruitNames[1] = "äppel";
    fruitNames[2] = "banan";
    fruitNames[3] = "citron";
    fruitNames[4] = "apelsin";
    fruitNames[5] = "päron"; //definierar fruitNames arrayen med frukternas namn, jag börjar från 1 så att det också korresponderar till rätt fruktnummer.

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

    if (nr == null) { //Denna if sats kollar om nr är lika med "null"(null betyder 0), ifall det är det så kommer det att skrivas ut i konsollen, detta är för att man ska kunna kontrollera att allt fungerar, användaren kommer inte se det som skrivs i konsollen om de inte letar efter det. Om nr är lika med null så betyder det att antingen så har användaren skrivit in något annat än en siffra eller en för låg eller hög siffra och då funkar det normalt men om null skrivs ut i konsollen om man har skrivit rätt så är något fel vilket är det som det används för.
        console.log("null");
        return //return används för att lämna funktionen.
    }

    fruitUrl = "pics/fruit" + nr + ".jpg"; //Detta är textsträngen som är en länk till en av fruktbilderna, man lägger till nr i strängen för att få fram olika frukter beroende på det tal som användaren skrev in.
    fruitImg.src = fruitUrl; //Detta ändrar om fruitImg källan till fruitUrl vilket kommer att byta bilden till en frukt.

    fruitNr = nr; //fruitNr är en global variabel som används för att ta med nr till en annan funktion vilket vi kan göra genom att definiera den med nr såhär.
}

function checkName() { //Denna funktion kommer kommer att kontrollera namnet som användaren skriver in i det andra fältet.
    let name; //Deklarerar name som sedan kommer definieras som inputElem[2].

    if (fruitNr == 0) { //Denna if-satsen kontrollerar om användare har skrivit in ett nummer i inputElem[2] om inte så kommer ett meddelande skrivas ut i msgElem.
        msgElem.innerHTML = "<p>Du måste först välja en frukt genom att skriva in ett nummer i första fältet </p>"; //Skriver ut text.
        return;
    }

    name = (inputElem[2].value); //Definierar name till inputElem[2].value. .value är nödvändigt för att koden ska fungera korrekt.

    if (name == fruitNames[fruitNr]) { //If-satsen är till för att kontrollera om namnet stämmer, det görs genom att jämföra name med fruitNames indexet av det nummer som användaren har valt i inputElem[1]. Detta är anledningen till att vi gjorde en global variabel (fruitNr) och definierade den med nr i funktionen showFruit. 
        msgElem.innerHTML = "<p>Rätt namn.</p>";
    } else {
        msgElem.innerHTML = "<p>Fel namn.</p>"; //Sedan skrivs antingen rätt eller fel svar ut i msgElem.
    }
}

function addFruits() { //Denna funktion lägger till så många frukter som användaren skriver in i inputElem[3].
    let amount; //Numret av frukter som användaren skriver in.
    let imgList; //En textsträng som ska vara länken till en av fruktbilderna 
    let i; //Variabel som kommer användas i for-loopen.
    
    if (fruitNr == 0) { //Kollar så att man har valt en frukt i inputElem[1].
        msgElem.innerHTML = "<p>Du måste först välja en frukt genom att skriva in ett nummer i första fältet </p>"; //Skriver ut att man först måste välja frukt.
        return;
    }

    amount = getNr(3, 9); //definierar amount med resultatet från frunktionen getNr med parametrarna 3 (som står för inputElem[3]) och 9 (som står för högsta värdet som kan väljas.)

    if (amount == null) { //Denna if sats kollar om nr är lika med "null"(null betyder 0), ifall det är det så kommer det att skrivas ut i konsollen, detta är för att man ska kunna kontrollera att allt fungerar, användaren kommer inte se det som skrivs i konsollen om dem inte letar efter det. Om nr är lika med null så betyder det att antingen så har användaren skrivit in något annat än en siffra eller en för låg eller hög siffra och då funkar det normalt men om null skrivs ut i konsollen om man har skrivit rätt så är något fel vilket är det som det används för.
        console.log("null");
    }

    imgList = ""; //imgList definieras som en tom sträng.
    
    for (i = 0; i < amount; i++) { //Denna for-loopen kommer att börja på 0, max antalet är amount (det tal som användaren har skrivit in i inputElem[3]) och för varje loop så ökar antalet med 1. 
        imgList += "<img src='pics/fruit" + fruitNr + ".jpg' alt='frukt'>"; //Detta är det som kommer skrivas ut i varje loop så många gånger som användaren har valt, detta definieras imgList med som sedan kommer att skrivas ut i selFruitsElem.
    }

    selFruitsElem.innerHTML += imgList; //Här skrivs imgList ut i selFruitsElem (med ett "+=") vilket gör om användaren väljer att trycka på knappen flera gånger med olika frukter så kommer listan att byggas på med fler frukter.
}

    
function getNr(elemNr, high) { //Detta är den funktion som skaffar numrerna som behövs i showFruit och addFruits, den har parametern elemNr och high. Detta görs så att funktionen kan användas i olika funktioner för att läsa av olika element genom att ändra parametern när man anropar funktionen. elemNr ger man det nummer som det input element man vill läsa av har i inputElem arrayen och high är det högsta värdet som ska kunna användas.
    let nr; //Numret som vi söker i elementet.
    
    nr = Number(inputElem[elemNr].value); //definierar nr som ett nummer av värdet från inputElem[elemNr(som är den parameter som ges när funktionen anropas i en annan funktion (1-3(som står för inputElem[1-3])))].
    
    if (isNaN(nr)) { //Den här if-satsen läser av om nr inte är ett nummer (om användaren har skrivit in något annat).
        msgElem.innerHTML = "<p>Du måste skriva in ett tal</p>"; //Ifall det är sant så kommer det skrivas ut i msgElem att man måste skriva ett tal.
        return null; //Sedan så skickas null tillbaka till den funktion som man anropade genNr i vilket kommer göra så att ingenting händer 
    }
    
    if (nr < 1 || nr > high) { //Denna if-sats fyller samma funktion som den över men denna körs om användaren antingen har skrivit ut ett tal mindre än ett och större än high (vilket också definierades då funktionen anropades)
        msgElem.innerHTML = "<p>Du måste skriva ett nummer mellan 1 och " + high + "</p>"; //Skriver ut att man måste skriva ett korrekt nummer i msgElem.
        return null;
    }
    
    if (Number.isInteger(nr)) { //Denna if-sats kollar om nr är en integer (ett heltal).
        console.log("Input = integer") //Om det är det så skrivs detta ut i konsollen.
    } else {
        nr = parseInt(nr) //Om det inte är det så kommer nr att göras om till en integer, då raderas eventuella decimaler från talet.
        inputElem[elemNr].value = nr //Sedan så skrivs det korrigerade talet in i input elementet.
        msgElem.innerHTML = "<p> Numret korrigerades till " + nr + ".</p>"; //Samt som att det skrivs detta ut i msgElem så att användaren är medveten om ändringen.
    }
    
    return nr; //Till sist så skickas nr tillbaka till den funktion där getNr anropades.
    }