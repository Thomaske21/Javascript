const setup = () => {
    let btnsubstring = document.getElementById("btnsubstring");

    btnsubstring.addEventListener("click",substring);
}
const substring = () => {
    let txtInput = document.getElementById("text");
    let txtOutput=document.getElementById("txtOutput");
    let nrlinks = document.getElementById("nrfirst");
    let nrrechts = document.getElementById("nrlast");

    let resultaat = txtInput.value.substring(nrlinks.value,nrrechts.value);
    txtOutput.innerHTML = resultaat;

}
window.addEventListener("load", setup);