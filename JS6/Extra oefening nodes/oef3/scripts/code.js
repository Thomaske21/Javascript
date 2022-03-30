const setup = () => {
    let button = document.getElementById("button");
    window.addEventListener("click",pToevoegen);
}
const pToevoegen = () => {
    let div = document.querySelector("div");
    let p = document.createElement("p");
    let text = window.prompt();
    let ptext = document.createTextNode(text);
    p.append(ptext);
    div.append(p);
}
window.addEventListener("load", setup);