const setup = () => {
    let colorDemos = document.getElementsByClassName("colorDemo");
    let sliders = document.getElementsByClassName("slider");

    sliders[0].addEventListener("input", update);
    sliders[1].addEventListener("input",update);
    sliders[2].addEventListener("input",update);


}
const update = () => {
    let colorDemos = document.getElementsByClassName("colorDemo");
    let sliderRed = document.getElementById("red");
    let sliderGreen = document.getElementById("green");
    let sliderBlue = document.getElementById("blue");
    let RedNumber = document.getElementById("rvalue");
    let GreenNumber = document.getElementById("gvalue");
    let BlueNumber = document.getElementById("bvalue");
    let valueRed = sliderRed.value;
    let valueGreen = sliderGreen.value;
    let valueBlue = sliderBlue.value;
    let color = 'rgb(' + valueRed +','+ valueGreen +','+ valueBlue + ')';
    RedNumber.innerHTML= valueRed;
    GreenNumber.innerHTML = valueGreen;
    BlueNumber.innerHTML = valueBlue;
    colorDemos[0].style.backgroundColor = color;

}
window.addEventListener("load", setup);
window.addEventListener("load",update);