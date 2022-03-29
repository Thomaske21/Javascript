const setup = () => {
    let button = document.getElementById("button");
    button.addEventListener("click", bereken)
}
const bereken = () => {
let isRoker = document.getElementById("roker");
let nl = document.getElementById("Nl");
let fr = document.getElementById("Fr");
let en = document.getElementById("En");
let buurlanden = document.getElementById("buurland").value;
let bestelling = document.getElementById("bestelling").options;

let output = "";
if (isRoker.checked){
    output += "is een roker \n";
} else {
    output += "is geen roker \n";
}
output += "moedertaal is "  ;
if (nl.checked){
    output += nl.value + "\n";
} else if (fr.checked){
    output += fr.value + "\n";
} else if (en.checked) {
    output += en.value + "\n"
} else {
    output += undefined + "\n";
}
output += "favoriete buurland is " + buurlanden + "\n";
output += "bestelling bestaat uit ";
    for (let i = 0; i < bestelling.length; i++) {
        let optie = bestelling[i]
        if (optie.selected) {
            output += optie.value + " ";
        }
    }

console.log(output);
}
window.addEventListener("load", setup);