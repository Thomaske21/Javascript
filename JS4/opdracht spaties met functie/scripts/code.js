const setup = () => {
    let elementTekst = document.getElementById("tekst");
    let button = document.getElementById("button");
    button.addEventListener("click", () => console.log(maakMetSpaties(updateTekst())));
}
const updateTekst = () => {
    let tekst = document.getElementById("tekst").value;
    let tekstZonderSpace = tekst.replace(/ /g,'');
    return tekstZonderSpace;
}
const maakMetSpaties = (inputtekst) => {
    let nieuwetekst = '';
    for (let i = 0; i < inputtekst.length; i++) {
        nieuwetekst += inputtekst.charAt(i)+' ';
    }
    return nieuwetekst
}
window.addEventListener("load", setup);