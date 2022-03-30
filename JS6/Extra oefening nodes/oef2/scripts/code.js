const setup = () => {
    let body = document.querySelector("body");
    let li = document.querySelectorAll("li");
    for (let i = 0; i < li.length; i++) {
        li[i].classList="listitem";
    }
    let img = document.createElement("img");
    body.appendChild(img);
    img.setAttribute("src","img/persoon.png")


}
window.addEventListener("load", setup);