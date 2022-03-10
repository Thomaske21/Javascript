const setup = () => {
    let button = document.getElementById("bereken");

    button.addEventListener("click",calculate);

// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
}
const calculate = () => {
    let prijzen = document.getElementsByClassName("prijs");
    let aantallen = document.getElementsByClassName("aantal");
    let btwPercentages = document.getElementsByClassName("btwPercentage");
    let subtotalen = document.getElementsByClassName("subtotaal");
    let totaal = document.getElementsByClassName("totaal");

    let prijs1 = parseFloat(prijzen[1].textContent).toFixed(2);
    let prijs2 = parseFloat(prijzen[2].textContent).toFixed(2);
    let prijs3 = parseFloat(prijzen[3].textContent).toFixed(2);

    let aantal1 = aantallen[1].value;
    let aantal2 = aantallen[2].value;
    let aantal3 = aantallen[3].value;

    let btwPercentage1 = parseInt(btwPercentages[1].textContent,0);
    let btwPercentage2 = parseInt(btwPercentages[2].textContent,0);
    let btwPercentage3 = parseInt(btwPercentages[3].textContent,0);

    let subtotaal1 = prijs1* aantal1 + (btwPercentage1/100 *prijs1 * aantal1);
    let subtotaal2 = prijs2* aantal2 + (btwPercentage2/100 *prijs2 * aantal2);
    let subtotaal3 = prijs3* aantal3 + (btwPercentage3/100 *prijs3 * aantal3);
    subtotalen[1].innerHTML = subtotaal1.toFixed(2) + ' Eur';
    subtotalen[2].innerHTML = subtotaal2.toFixed(2) + ' Eur';
    subtotalen[3].innerHTML = subtotaal3.toFixed(2) + ' Eur';

    let totaalPrijs = subtotaal1+subtotaal2+subtotaal3;
    totaal[0].innerHTML = totaalPrijs.toFixed(2) + ' Eur';

}
    window.addEventListener("load", setup);