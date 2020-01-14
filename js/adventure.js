var bttn1 = document.getElementById("button1");
var bttn2 = document.getElementById("button2");
var bttn3 = document.getElementById("button3");
var container = document.getElementById("game-container");
var title = document.getElementById("title");
var description = document.getElementById("description");
var objectItem = document.getElementById("inventoryItem");

var items = {pickaxe:false,  bow:false, quiver:false};

bttn1.onclick = button1;
bttn2.onclick = button2;
bttn3.onclick = button3;

objectItem.onclick = pickUpItem;

function loadGame() {
    console.log("");
    container.style.background = "url(../img/castle.jpg)";
    container.style.backgroundSize = "cover";

    title.innerHTML = "Castle Invasion";
    description.innerHTML = "Je moet in de troonzaal zien te komen, maar het is niet gemakkelijk.";

    objectItem.style.visibility = "hidden";

    bttn1.style.visibility = "hidden";

    bttn2.style.visibility = "visible";
    bttn2.style.width = "120px";

    bttn3.style.visibility = "hidden";

    bttn2.innerHTML = "Start game!";
    bttn2.onclick = frontside;
}
function frontside() {
     if (items["pickaxe"] == false) {
        objectItem.style.visibility = "visible";
        objectItem.src = "../items/pickaxe.png";
        objectItem.style.width = "100px";
        objectItem.style.position = "absolute";
        objectItem.style.top = "375px";
        objectItem.style.right = "750px";
        objectItem.style.filter = "blur(3px)";
        objectItem.id = "pickaxe";
     }
     else {}
    console.log("");
    container.style.background = "url(../img/castle-front.jpg)";
    container.style.backgroundSize = "cover";
    title.innerHTML = "De voorkant";
    description.innerHTML = "Je bent bij de voorkant aangekomen, kies je kant.";

    bttn1.style.visibility = "visible";
    bttn1.style.position = "relative";
    bttn1.style.width = "79px";
    bttn2.style.bottom = "8px";

    bttn2.style.visibility = "visible";
    bttn2.style.width= "79px";
    bttn2.style.position = "relative";
    bttn2.style.bottom = "8px";

    bttn3.style.visibility = "visible";
    bttn3.style.position = "relative";
    bttn3.style.width = "79px";
    bttn3.style.bottom = "0px";

    bttn1.innerHTML = "Ga linksom";
    bttn2.innerHTML = "Probeer te kloppen";
    bttn3.innerHTML = "Ga rechtsom";

    bttn1.onclick = leftSide;
    bttn2.onclick = kloppen;
    bttn3.onclick = rechtsom;
}
function leftSide() {
    console.log("");
    container.style.background = "url(../img/castle-wall.jpg)";
    container.style.backgroundSize = "cover";

    title.innerHTML = "De linkerkant";
    description.innerHTML = "Je bent aan de linkerkant aangekomen en je ziet bewakers boven aan de muur lopen, wat ga je doen?";

    bttn1.style.visibility = "visible";
    bttn1.style.bottom = "0px";

    bttn2.style.visibility = "visible";
    bttn2.style.bottom = "0px";

    bttn3.style.visibility = "visible";
    bttn3.style.top = "0px";

    objectItem.style.visibility = "hidden";

    bttn1.innerHTML = "Hard verder rennen";
    bttn2.innerHTML = "Spring de gracht in";
    bttn3.innerHTML = "Langzaam teruglopen";
    bttn1.onclick = rennen;
    bttn2.onclick = gracht;
    bttn3.onclick = frontside;
}
function inside3() {
    console.log("Binnen!");
    container.style.background = "url(../img/inside.jpg)";
    container.style.backgroundSize = "cover";

    title.innerHTML = "Binnen!";
    description.innerHTML = "Je bent binnen. Wat nu?";

    objectItem.style.visibility = "hidden";

    bttn1.style.visibility = "visible";

    bttn2.style.visibility = "visible";
    bttn2.style.bottom = "0px";

    bttn3.style.visibility = "visible";
    bttn3.style.bottom = "0px";


    bttn1.innerHTML = "Ga naar links";
    bttn2.innerHTML = "Ga naar de voorkant";
    bttn3.innerHTML = "Ga naar rechts";

    bttn1.onclick = archerInside;
    bttn2.onclick = frontside;
    bttn3.onclick = inside;
}
function kloppen() {
    if (items["bow"] && items["quiver"] == true) {
        inside3();
    }
    else {
        console.log("You're dead");
        container.style.background = "url(../img/ridder.jpg)";
        container.style.backgroundSize = "cover";

        title.innerHTML = "Je bent dood!";
        description.innerHtML = "Je bent doodgestoken door een bewaker.";

        objectItem.style.visibility = "hidden";

        bttn1.style.visibility = "hidden";
        bttn2.style.visibility = "visible";
        bttn3.style.visibility = "hidden";

        bttn2.innerHTML = "Opnieuw starten";
        bttn2.onclick = reload;
    }
}
function rechtsom() {
    if (items["pickaxe"] == false) {
        console.log("");
        container.style.background = "url(../img/castle-wall.jpg)";
        container.style.backgroundSize = "cover";

        title.innerHTML = "De rechterkant";
        description.innerHTML = "Je bent aan de rechterkant aangekomen. En je ziet alleen een muur";

        bttn1.style.visibility = "hidden";

        bttn2.style.visibility = "visible";
        bttn2.style.textAlign = "center";

        bttn3.style.visibility = "hidden";

        objectItem.style.visibility = "visible";
        objectItem.src = "../items/bow.png";
        objectItem.style.width = "100px";
        objectItem.style.position = "absolute";
        objectItem.style.top = "498px";
        objectItem.style.right = "231px";
        objectItem.style.filter = "blur(2px)";
        objectItem.id = "bow";

        bttn2.innerHTML = "Terug gaan";
        bttn2.onclick = frontside;
    }
    else if (items["pickaxe"] == true) {
        console.log("test");
        container.style.background = "url(../img/hole.jpg)";
        title.innerHTML = "Open muur!";
        description.innerHTML = "De muur is open gebroken!";
        if (items["bow"] == false) {
            objectItem.style.visibility = "visible";
            objectItem.src = "../items/bow.png";
            objectItem.style.width = "100px";
            objectItem.style.position = "absolute";
            objectItem.style.top = "498px";
            objectItem.style.right = "231px";
            objectItem.style.filter = "blur(2px)";
            objectItem.id = "bow";
        }
        else {}

        bttn1.style.visibility = "visible";
        bttn1.style.width = "95px";

        bttn2.style.visibility = "hidden";

        bttn3.style.visibility = "visible";
        bttn3.style.width = "95px";
        bttn3.style.bottom = "9px";

        bttn1.innerHTML = "Ga terug";
        bttn3.innerHTML = "Ga door het gat";
        bttn1.onclick = frontside;
        bttn3.onclick = inside;
    }
}
function rennen() {
    console.log("");
    container.style.background = "url(../img/archer.jpg)";
    container.style.backgroundSize = "cover";

    title.innerHTML = "Je bent dood geschoten!";
    description.innerHTML = "De bewaker zag je, je bent doodgeschoten.";

    objectItem.style.visibility = "hidden";

    bttn1.style.visibility = "hidden";

    bttn2.style.visibility = "visible";
    bttn2.style.width = "150px";

    bttn3.style.visibility = "hidden";


    bttn2.innerHTML = "Klik hier om opnieuw te beginnen!";
    bttn2.onclick = loadGame;
}
function gracht() {
    console.log("");
    container.style.background = "url(../img/canal.jpg)";
    container.style.backgroundSize = "cover";

    title.innerHTML = "De gracht";
    description.innerHTML = "Je bent in het water gesprongen de bewakers zagen je NOG niet, maar je vedrinkt bijna!";

    bttn1.style.visibility = "visible";

    bttn2.style.visibility = "visible";

    bttn3.style.visibility = "visible";
    bttn3.style.top = "9px";

    objectItem.style.visibility = "hidden";

    bttn1.innerHTML = "Zwem naar de overkant";
    bttn2.innerHTML = "Blijf nog even onder"
    bttn3.innerHTML = "Zwem terug"
    bttn1.onclick = overkant;
    bttn2.onclick = verdronken;
    bttn3.onclick = leftSide;
}
function verdronken() {
    console.log("");
    container.style.background = "url(../img/drown.jpg)";
    container.style.backgroundSize = "cover";

    title.innerHTML = "Dood";
    title.style.color = "black";
    description.innerHTML = "Je bent verdronken omdat je niet zo goed kon zwemmen onderwater!"
    description.style.color = "black";

    objectItem.style.visibility = "hidden";

    bttn1.style.visibility = "hidden";

    bttn2.style.visibility = "visible";
    bttn2.style.width = "140px";
    bttn2.style.height = "60px";

    bttn3.style.visibility = "hidden";

    bttn2.innerHTML = "Klik hier om opnieuw te beginnen!"
    bttn2.onclick = reload;
}
function overkant() {
    if (items["quiver"] == false) {
        objectItem.style.visibility = "visible";
        objectItem.src = "../items/quiver.png";
        objectItem.style.width = "150px";
        objectItem.style.position = "absolute";
        objectItem.style.top = "490px";
        objectItem.style.right = "231px";
        objectItem.style.filter = "blur(2px)";
        objectItem.id = "quiver";

    }
    else {}
    console.log("");
    container.style.background = "url(../img/overkant.jpg)";
    container.style.backgroundSize = "cover";

    title.innerHTML = "De overkant";
    description.innerHTML = "Je bent bij de overkant je ziet alleen ede grote muur";

    bttn1.style.visibility = "hidden";
    bttn2.style.visibility = "visible";
    bttn3.style.visibility = "hidden";
    bttn2.innerHTML = "Zwem terug";
    bttn2.onclick = leftSide;

}
function inside() {
    if (items["pickaxe"] == true) {
        console.log("inside")
        container.style.background = "url(../img/inside2.jpg)";
        container.style.backgroundSize = "cover";

        title.innerHTML = "de Binnenkant";
        description.innerHTML = "je bent bij de binnenkant aangekomen";

        objectItem.style.visibility = "hidden";

        bttn1.style.visibility = "visible";

        bttn2.style.visibility = "hidden";

        bttn3.style.visibility = "visible";
        bttn3.style.bottom = "0px";

        bttn1.innerHTML = "Naar Links";
        bttn3.innerHTML = "Ga terug";
        bttn1.onclick = inside3;
        bttn3.onclick = rechtsom;
    } else {
        console.log("inside")
        container.style.background = "url(../img/inside2.jpg)";
        container.style.backgroundSize = "cover";

        title.innerHTML = "de Binnenkant";
        description.innerHTML = "je bent bij de binnenkant aangekomen";

        objectItem.style.visibility = "hidden";

        bttn1.style.visibility = "hidden";
        bttn2.style.visibility = "visible";
        bttn3.style.visibility = "hidden";

        bttn2.innerHTML = "Ga terug";
        bttn2.onclick = inside3;

    }
}
function archerInside() {
    if (items["bow"] && items["quiver"] == true) {
        container.style.background = "url(../img/archerinside.jpg)";
        container.style.backgroundSize = "cover";

        title.innerHTML = "Je bent gezien!";
        description.innerHTML = "Een boogschutter ziet je! Wat doe je?";

        objectItem.style.visibility = "hidden";

        bttn1.style.visibility = "visible";
        bttn1.style.width = "150px";
        bttn1.style.top = "-8px";

        bttn2.style.visibility = "visible";
        bttn2.style.width = "150px";

        bttn3.style.visibility = "visible";
        bttn3.style.width = "150px";

        bttn1.innerHTML = "Probeer de boogschutter neer te schieten";
        bttn2.innerHTML = "Probeer weg te rennen";
        bttn3.innerHTML = "Geef je over"

        bttn1.onclick = treasureRoom;
        bttn2.onclick = died;
        bttn3.onclick = died2;

    } else {
        container.style.background = "url(../img/archerinside.jpg)";
        container.style.backgroundSize = "cover";

        title.innerHTML = "Je bent gezien!";
        description.innerHTML = "Een boogschutter ziet je! Wat doe je?";

        objectItem.style.visibility = "hidden";

        bttn1.style.visibility = "visible";
        bttn2.style.visibility = "hidden";
        bttn3.style.visibility = "visible";

        bttn1.innerHTML = "Probeer weg te rennen";
        bttn3.innerHTML = "Geef je over";

        bttn1.onclick = died;
        bttn3.onclick = died2;
    }
}
function treasureRoom() {
    console.log("Gewonnen");
    container.style.background = "url(../img/treasureroom.jpg)";
    container.style.backgroundSize = "cover";

    title.innerHTML = "Het is je gelukt!";
    description.innerHTML = "Je hebt het spel uitgespeeld! je bent in de schatkamer gekomen!";

    objectItem.style.visibility = "hidden";

    bttn1.style.visibility = "hidden";
    bttn2.style.visibility = "visible";
    bttn3.style.visibility = "hidden";

    bttn2.innerHTML = "Klik hier om opnieuw te beginnen!";

    bttn2.onclick = reload;
}

function died() {
    container.style.background = "url(../img/youdied.jpg)";
    container.style.backgroundSize = "cover";

    title.innerHTML = "Je bent gestorven!";
    description.innerHTML = "De boogschutter heeft je doodgeschoten omdat je probeerde te vluchten."

    objectItem.style.visibility = "hidden";

    bttn1.style.visibility = "hidden";
    bttn2.style.visibility = "visible";
    bttn3.style.visibility = "hidden";

    bttn2.innerHTML = "Klik hier om opnieuw te beginnen!";

    bttn2.onclick = reload;
}
function died2() {
    container.style.background = "url(../img/prison.jpg)";
    container.style.backgroundSize = "cover";

    title.innerhTML = "Je bent opgepakt!";
    description.innerHTML = "De boogschutter heeft je voor levenslang in de gevangenis onder het kasteel gegooid."

    objectItem.style.visibility = "hidden";

    bttn1.style.visibility = "hidden";
    bttn2.style.visibility = "visible";
    bttn3.style.visibility = "hidden";

    bttn2.innerHTML = "Klik hier om opnieuw te beginnen!";

    bttn2.onclick = reload;
}
function reload() {
    window.location = window.location;
}
function pickUpItem() {
    objectItem.style.visibility = "hidden";
    items[this.id] = true;
    console.log("I picked up the \"" + this.id + "\"");
}

loadGame();
