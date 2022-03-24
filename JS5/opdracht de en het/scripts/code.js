const setup = () => {
    let tekst = "Gisteren zat de jongen op de stoep en at de helft van de appel";
    let tekst2 = "de man riep de";
    let nieuwetekst = tekst.replaceAll('de','het');
    console.log(tekst);
    console.log(nieuwetekst);
    console.log(tekst2.replaceAll('de','het'));
}
window.addEventListener("load", setup);