const setup = () => {
    let sliders = document.getElementsByClassName("slider");
    let button = document.getElementById("save");

    sliders[0].addEventListener("input", update);
    sliders[1].addEventListener("input", update);
    sliders[2].addEventListener("input", update);
    button.addEventListener("click", save);



}
const update = () => {
    let colorDemos = document.getElementById("kleur");
    let sliderRed = document.getElementById("red");
    let sliderGreen = document.getElementById("green");
    let sliderBlue = document.getElementById("blue");
    let RedNumber = document.getElementById("rvalue");
    let GreenNumber = document.getElementById("gvalue");
    let BlueNumber = document.getElementById("bvalue");
    let valueRed = sliderRed.value;
    let valueGreen = sliderGreen.value;
    let valueBlue = sliderBlue.value;
    let color = 'rgb(' + valueRed + ', ' + valueGreen + ', ' + valueBlue + ')';
    RedNumber.innerHTML = valueRed;
    GreenNumber.innerHTML = valueGreen;
    BlueNumber.innerHTML = valueBlue;
    colorDemos.style.backgroundColor = color;

}
const save = () => {
    let section = document.getElementById("saved");
    let color = document.createElement("div");
    color.className = "colorDemo";
    color.addEventListener("click",load);
    let verwijder = document.createElement("button");
    verwijder.className = "delet";
    let x = document.createTextNode("x");
    verwijder.append(x);
    verwijder.addEventListener("click",delet);
    let valueRed = document.getElementById("red").value;
    let valueGreen = document.getElementById("green").value;
    let valueBlue = document.getElementById("blue").value;
    let rgbvalue = 'rgb(' + valueRed +',' + valueGreen+',' + valueBlue + ')';
    color.style.backgroundColor = rgbvalue;
    color.append(verwijder);
    section.append(color);

}
const delet = (event) => {
    let section = document.getElementById("saved");
    let button = event.target;
    let div = button.parentElement;
    section.removeChild(div);
    event.stopPropagation();
}

const load = (event) => {
    let div = event.target;
    let kleurcode = div.getAttribute("style");
    let rgbvalue =kleurcode.split("(")[1].split(")")[0].split(", ");
    let rValue = rgbvalue[0];
    let gValue = rgbvalue[1];
    let bValue = rgbvalue[2];
    let rSlider = document.getElementById("red");
    rSlider.value = rValue;
    let gSlider = document.getElementById("green");
    gSlider.value = gValue;
    let bSlider = document.getElementById("blue");
    bSlider.value = bValue;
    update();
}

window.addEventListener("load", setup);
window.addEventListener("load", update);