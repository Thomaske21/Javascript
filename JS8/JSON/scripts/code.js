const setup = () => {
    let butn1 = document.getElementById("1");
    let butn2 = document.getElementById("2");
    butn1.addEventListener("click", Prog1);
    butn2.addEventListener("click", Prog2)

}
const Prog1 = () => {
    let student1 = {
        voornaam: "Jan",
        familienaam: "Janssens",
        geboorteDatum: new Date("1993-12-31"),
        adres: {
            straat: "Kerkstraat 13",
            postcode: "8500",
            gemeente: "Kortrijk"
        },
        isIngeschreven: true,
        namenVanExen: ["Sofie", "Berta", "Philip", "Albertoooo"],
        aantalAutos: 2
    }
    let json = JSON.stringify(student1);
    console.log(json);
}
const Prog2 = () => {
    let text = '{"voornaam":"Jan","familienaam":"Janssens","geboorteDatum":null,"adres":{"straat":"Kerkstraat 13","postcode":"8500","gemeente":"Kortrijk"},"isIngeschreven":true,"namenVanExen":["Sofie","Berta","Philip","Albertoooo"],"aantalAutos":2}';
    let student = JSON.parse(text);
console.log(student.voornaam);
}
window.addEventListener("load", setup);