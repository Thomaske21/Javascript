let Saved = [];
let Counter = 0;
const setup = () => {
    let sliders = document.getElementsByClassName("slider");
    let button = document.getElementById("save");
    let button1 = document.getElementById("wipe");

    sliders[0].addEventListener("input", update);
    sliders[1].addEventListener("input", update);
    sliders[2].addEventListener("input", update);
    button.addEventListener("click", save);
    button1.addEventListener("click", clear);
    Inladen();
}
const clear = () => {
    localStorage.clear();
}
const updateWithColor = (valueRed, valueGreen, valueBlue) => {
    let colorDemos = document.getElementById("kleur");
    let RedNumber = document.getElementById("rvalue");
    let GreenNumber = document.getElementById("gvalue");
    let BlueNumber = document.getElementById("bvalue");
    RedNumber.innerHTML = valueRed;
    GreenNumber.innerHTML = valueGreen;
    BlueNumber.innerHTML = valueBlue;
    let sliderRed = document.getElementById("red");
    let sliderGreen = document.getElementById("green");
    let sliderBlue = document.getElementById("blue");
    sliderRed.value = valueRed;
    sliderGreen.value = valueGreen;
    sliderBlue.value = valueBlue;

    let color = 'rgb(' + valueRed + ', ' + valueGreen + ', ' + valueBlue + ')';
    colorDemos.style.backgroundColor = color;
    let setting = {
        valueRed: valueRed,
        valueGreen: valueGreen,
        valueBlue: valueBlue
    }
    let json = JSON.stringify(setting);
    localStorage.setItem("sliders", json);
}
const update = () => {
    let sliderRed = document.getElementById("red");
    let sliderGreen = document.getElementById("green");
    let sliderBlue = document.getElementById("blue");
    let valueRed = sliderRed.value;
    let valueGreen = sliderGreen.value;
    let valueBlue = sliderBlue.value;
    updateWithColor(valueRed, valueGreen, valueBlue);
}
const saveMetKleur = (valueRed, valueGreen, valueBlue) => {
    let section = document.getElementById("saved");
    let color = document.createElement("div");
    color.className = "colorDemo";
    color.addEventListener("click", load);
    let verwijder = document.createElement("button");
    verwijder.className = "delet";
    let x = document.createTextNode("x");
    verwijder.append(x);
    verwijder.addEventListener("click", delet);
    let rgbvalue = 'rgb(' + valueRed + ',' + valueGreen + ',' + valueBlue + ')';
    color.style.backgroundColor = rgbvalue;
    color.append(verwijder);
    section.append(color);
    return verwijder;
}
const save = () => {

    let valueRed = document.getElementById("red").value;
    let valueGreen = document.getElementById("green").value;
    let valueBlue = document.getElementById("blue").value;
    let verwijder = saveMetKleur(valueRed, valueGreen, valueBlue);
    let setting = {
        id: Counter,
        valueRed: valueRed,
        valueGreen: valueGreen,
        valueBlue: valueBlue
    };
    verwijder.setAttribute("id", Counter);
    Saved.push(setting);
    let json = JSON.stringify(Saved);
    Counter++;
    localStorage.setItem("Saveds", json);
    localStorage.setItem("Counter", Counter.toString());
}
const delet = (event) => {
    let section = document.getElementById("saved");
    let button = event.target;
    let idVierkant = button.getAttribute('id');
    let div = button.parentElement;
    for (let i = 0; i < Saved.length; i++) {
        if (parseInt(idVierkant) === Saved[i].id) {
            section.removeChild(div);
            Saved.splice(i, 1);
            let json = JSON.stringify(Saved);
            localStorage.setItem("Saveds", json);
        }
    }
    event.stopPropagation();
}

const load = (event) => {
    let div = event.target;
    let kleurcode = div.getAttribute("style");
    let rgbvalue = kleurcode.split("(")[1].split(")")[0].split(", ");
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
const Inladen = () => {
    if (localStorage.getItem("Counter") !== null) {
        Counter = parseInt(localStorage.getItem("Counter"));
    }
    let SavedKleuren = JSON.parse(localStorage.getItem("Saveds"));
    if (SavedKleuren !== null) {
        Saved = SavedKleuren;
    }
    for (let i = 0; i < Saved.length; i++) {
        let setting = Saved[i];
        let verwijder = saveMetKleur(setting.valueRed, setting.valueGreen, setting.valueBlue);
        verwijder.setAttribute("id", setting.id);
    }
    if (localStorage.getItem("sliders") !== null){
        let setting = JSON.parse(localStorage.getItem("sliders"))
        updateWithColor(setting.valueRed,setting.valueGreen,setting.valueBlue);
    } else {
        update();
    }
}

window.addEventListener("load", setup);