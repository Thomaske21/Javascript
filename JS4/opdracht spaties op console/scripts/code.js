const setup = () => {
    let button = document.getElementById("button");
    button.addEventListener("click", log);

}
const log = () => {
    let tekst = document.getElementById("tekst").value;
    let nieuwetekst = '';
    let tekstzonderspace= tekst.replace(/ /g,'');
    for (let i = 0; i < tekstzonderspace.length; i++) {
        nieuwetekst += tekstzonderspace.charAt(i)+' ';
    }
    console.log(nieuwetekst);
}
window.addEventListener("load", setup);