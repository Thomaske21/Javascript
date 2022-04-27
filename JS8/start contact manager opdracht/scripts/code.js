let personen = [];
let global ={
    INDEX: -1
}

// Event listener (btnBewaar click)
// Bewaar de wijzigingen die in de user interface werden aangebracht
const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");
    let options = document.getElementById("lstPersonen");
    let voornaam = document.getElementById("txtVoornaam").value;
    let familienaam = document.getElementById("txtFamilienaam").value;
    let geboortedatum = document.getElementById("txtGeboorteDatum").value;
    let email = document.getElementById("txtEmail").value;
    let aantalKinderen = document.getElementById("txtAantalKinderen").value;
    let persoonObject = {
        voornaam: voornaam,
        familienaam: familienaam,
        geboortedatum: geboortedatum,
        email: email,
        aantalKinderen: aantalKinderen
    }
    let persoonJson = JSON.stringify(persoonObject)
    // valideer alle input data en controleer of er geen errors meer zijn
    if (valideer()) {
        if (global.INDEX === -1){
            let persoon = document.createElement("option");
            persoon.setAttribute("id", personen.length);
            persoon.setAttribute("data-Json", persoonJson);
            let value = document.createTextNode(voornaam + " " + familienaam)
            persoon.appendChild(value);
            personen.push(persoonObject);
            options.appendChild(persoon);
            persoon.addEventListener("click",bewerkPersooon);
        } else {
            personen[global.INDEX]
            let option = document.getElementById(global.INDEX);
            option.setAttribute("data-Json", persoonJson);
            let value = document.createTextNode(voornaam + " "+ familienaam);
            option.firstChild.remove();
            option.appendChild(value);
        }
    }


    // indien ok, bewaar de ingegeven data.
    // een nieuw aangemaakte persoon voegen we toe
    // een bes taande persoon in de lijst passen we aan

    // zorg ervoor dat de naam en voornaam ook aangepast en/of zichtbaar zijn in de lijst na updaten
};

const bewerkPersooon = (event) => {
   let target = event.currentTarget;
   global.INDEX = target.id;
   console.log(global.INDEX)
   let json = JSON.parse(target.getAttribute("data-Json"));
    let voornaam = document.getElementById("txtVoornaam").value = json.voornaam;
    let familienaam = document.getElementById("txtFamilienaam").value = json.familienaam;
    let geboortedatum = document.getElementById("txtGeboorteDatum").value = json.geboortedatum;
    let email = document.getElementById("txtEmail").value = json.email;
    let aantalkinderen = document.getElementById("txtAantalKinderen").value = json.aantalKinderen;
}

// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");
    global.INDEX = -1;

    let voornaam = document.getElementById("txtVoornaam");
    let familienaam = document.getElementById("txtFamilienaam");
    let geboortedatum = document.getElementById("txtGeboorteDatum");
    let email = document.getElementById("txtEmail");
    let aantalkinderen = document.getElementById("txtAantalKinderen");

    voornaam.value = "";
    familienaam.value = "";
    geboortedatum.value = "";
    email.value = "";
    aantalkinderen.value = "";


    // Zet de user interface klaar om de gegevens van een nieuwe persoon in te voeren
};


// onze setup functie die de event listeners registreert
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    // voeg een change listener toe aan lstPersonen. Bij het klikken op een option element in de lijst
    // moet de data van die persoon getoond worden in het formulier
};

window.addEventListener("load", setup);