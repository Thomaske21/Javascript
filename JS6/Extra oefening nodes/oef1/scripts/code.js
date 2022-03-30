const setup = () => {
    let p = document.querySelector('p');
    let textp = p.firstChild;
    let nieuwtext= document.createTextNode("Good job!");
    p.removeChild(textp);
    p.appendChild(nieuwtext);
}
window.addEventListener("load", setup);