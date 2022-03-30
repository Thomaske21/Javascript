const setup = () => {
    let p = document.querySelector("#abc");
    let nodes = p.childNodes;
    console.log(nodes[0].textContent);
    console.log(nodes[1].textContent);
    console.log(nodes[2].textContent);
}
window.addEventListener("load", setup);