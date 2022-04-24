let global ={
    AANTAL_HORIZONTAAL: 4,
    AANTAL_VERTICAAL: 3,
    AANTAL_KAARTEN: 6
};

const setup = () => {

}

const kaartenLeggen = () => {
    var kaarten= []
    kaarten[0] = "kaart1.png";
    kaarten[1] = "kaart2.png";
    kaarten[2] = "kaart3.png";
    kaarten[3] = "kaart4.png";
    kaarten[4] = "kaart5.png";
    kaarten[5] = "kaart6.png";
    kaarten[6] = "kaart1.png";
    kaarten[7] = "kaart2.png";
    kaarten[8] = "kaart3.png";
    kaarten[9] = "kaart4.png";
    kaarten[10] = "kaart5.png";
    kaarten[11] = "kaart6.png";
    for (let i = 0; i < global.AANTAL_KAARTEN*2; i++) {
        var tag1 = document.createElement("div");
        tag1.classList.add('kaart')
        tag1.classList.add('deKaart')
        var value="deKaart"+i;
        tag1.setAttribute("id",value)
        var tag2 = document.createElement("div");
        tag2.classList.add('voorkant')
        var tag3 = document.createElement("div");
        tag3.classList.add('achterkant')
        var tag4 = document.createElement("img");
        var gekozenKaart = Math.floor(Math.random()*kaarten.length)
        tag4.src = 'images/' + kaarten[gekozenKaart];
        kaarten.splice(gekozenKaart,1);
        var value1= "foto"+i
        tag4.setAttribute("id", value1)
        var tag5 = document.createElement("img");
        tag5.src='images/achterkant.png'
        tag2.appendChild(tag5)
        tag3.appendChild(tag4)
        tag1.appendChild(tag2)
        tag1.appendChild(tag3)
        var element= document.getElementById('speelveld');
        element.appendChild(tag1)
        document.getElementById("speelveld")
    }
}
kaartenLeggen();
const card0 = document.getElementById('deKaart0')
card0.addEventListener("click", flipcard0);
const card1 = document.getElementById('deKaart1')
card1.addEventListener("click", flipcard1);
const card2 = document.getElementById('deKaart2')
card2.addEventListener("click", flipcard2);
const card3 = document.getElementById('deKaart3')
card3.addEventListener("click", flipcard3);
const card4 = document.getElementById('deKaart4')
card4.addEventListener("click", flipcard4);
const card5 = document.getElementById('deKaart5')
card5.addEventListener("click", flipcard5);
const card6 = document.getElementById('deKaart6')
card6.addEventListener("click", flipcard6);
const card7 = document.getElementById('deKaart7')
card7.addEventListener("click", flipcard7);
const card8 = document.getElementById('deKaart8')
card8.addEventListener("click", flipcard8);
const card9 = document.getElementById('deKaart9')
card9.addEventListener("click", flipcard9);
const card10 = document.getElementById('deKaart10')
card10.addEventListener("click", flipcard10);
const card11 = document.getElementById('deKaart11')
card11.addEventListener("click", flipcard11);
var amount = 0;
var gedraaideKaarten =[];
var gedraaideKaartenlink =[];
function flipcard0() {
    if(amount < 2&&(gedraaideKaartenlink[0]!==card0)){
    card0.classList.toggle("flipCard")

    if(amount === 0){
        gedraaideKaarten[0] = (document.getElementById("foto0").src.substr(-10))
        gedraaideKaartenlink[0] = card0;
    }else{
    gedraaideKaarten[1] = (document.getElementById("foto0").src.substr(-10))
        gedraaideKaartenlink[1] = card0;
    }
    amount++;
    setTimeout(check,2000);
    }
}
function flipcard1() {
    if(amount < 2&&(gedraaideKaartenlink[0]!==card1)) {
        card1.classList.toggle("flipCard")

        if (amount === 0) {
            gedraaideKaarten[0] = (document.getElementById("foto1").src.substr(-10))
            gedraaideKaartenlink[0] = card1;
        } else {
            gedraaideKaarten[1] = (document.getElementById("foto1").src.substr(-10))
            gedraaideKaartenlink[1] = card1;
        }
        amount++;
        setTimeout(check, 2000);
    }
}
function flipcard2() {
    if(amount < 2&&(gedraaideKaartenlink[0]!==card2)){
    card2.classList.toggle("flipCard")

    if(amount === 0){
        gedraaideKaarten[0] = (document.getElementById("foto2").src.substr(-10))
        gedraaideKaartenlink[0] = card2;
    }else{
        gedraaideKaarten[1] = (document.getElementById("foto2").src.substr(-10))
        gedraaideKaartenlink[1] = card2;
    }
    amount++;
    setTimeout(check,2000);}
}
function flipcard3() {
    if(amount < 2&&(gedraaideKaartenlink[0]!==card3)){
    card3.classList.toggle("flipCard")

    if(amount === 0){
        gedraaideKaarten[0] = (document.getElementById("foto3").src.substr(-10))
        gedraaideKaartenlink[0] = card3;
    }else{
        gedraaideKaarten[1] = (document.getElementById("foto3").src.substr(-10))
        gedraaideKaartenlink[1] = card3;
    }
    amount++;
    setTimeout(check,2000);}
}
function flipcard4() {
    if(amount < 2&&(gedraaideKaartenlink[0]!==card4)){
    card4.classList.toggle("flipCard")

    if(amount === 0){
        gedraaideKaarten[0] = (document.getElementById("foto4").src.substr(-10))
        gedraaideKaartenlink[0] = card4;
    }else{
        gedraaideKaarten[1] = (document.getElementById("foto4").src.substr(-10))
        gedraaideKaartenlink[1] = card4;}
    amount++;
    setTimeout(check,2000);}
}
function flipcard5() {
    if(amount < 2&&(gedraaideKaartenlink[0]!==card5)){
    card5.classList.toggle("flipCard")

    if(amount === 0){
        gedraaideKaarten[0] = (document.getElementById("foto5").src.substr(-10))
        gedraaideKaartenlink[0] = card5;
    }else{
        gedraaideKaarten[1] = (document.getElementById("foto5").src.substr(-10))
        gedraaideKaartenlink[1] = card5;
    }
    amount++;
    setTimeout(check,2000);}
    }
function flipcard6() {
    if(amount < 2&&(gedraaideKaartenlink[0]!==card6)){
    card6.classList.toggle("flipCard")

    if(amount === 0){
        gedraaideKaarten[0] = (document.getElementById("foto6").src.substr(-10))
        gedraaideKaartenlink[0] = card6;
    }else{
        gedraaideKaarten[1] = (document.getElementById("foto6").src.substr(-10))
        gedraaideKaartenlink[1] = card6;
    }
    amount++;
    setTimeout(check,2000);}
}
function flipcard7() {
    if(amount < 2&&(gedraaideKaartenlink[0]!==card7)){
    card7.classList.toggle("flipCard")

    if(amount === 0){
        gedraaideKaarten[0] = (document.getElementById("foto7").src.substr(-10))
        gedraaideKaartenlink[0] = card7;
    }else{
        gedraaideKaarten[1] = (document.getElementById("foto7").src.substr(-10))
        gedraaideKaartenlink[1] = card7;
    }
    amount++;
    setTimeout(check,2000);}
}
function flipcard8() {
    if(amount < 2&&(gedraaideKaartenlink[0]!==card8)){
    card8.classList.toggle("flipCard")

    if(amount === 0){
        gedraaideKaarten[0] = (document.getElementById("foto8").src.substr(-10))
        gedraaideKaartenlink[0] = card8;
    }else{
        gedraaideKaarten[1] = (document.getElementById("foto8").src.substr(-10))
        gedraaideKaartenlink[1] = card8;
    }
    amount++;
    setTimeout(check,2000);}
}
function flipcard9() {
    if(amount < 2){
    card9.classList.toggle("flipCard")

    if(amount === 0&&(gedraaideKaartenlink[0]!==card9)){
        gedraaideKaarten[0] = (document.getElementById("foto9").src.substr(-10))
        gedraaideKaartenlink[0] = card9;
    }else{
        gedraaideKaarten[1] = (document.getElementById("foto9").src.substr(-10))
        gedraaideKaartenlink[1] = card9;
    }
    amount++;
    setTimeout(check,2000);}
}
function flipcard10() {
    if(amount < 2&&(gedraaideKaartenlink[0]!==card10)){
    card10.classList.toggle("flipCard")

    if(amount === 0){
        gedraaideKaarten[0] = (document.getElementById("foto10").src.substr(-10))
        gedraaideKaartenlink[0] = card10;
    }else{
        gedraaideKaarten[1] = (document.getElementById("foto10").src.substr(-10))
        gedraaideKaartenlink[1] = card10;
    }
    amount++;
    setTimeout(check,2000);}
}
function flipcard11() {
    if(amount < 2&&(gedraaideKaartenlink[0]!==card11)){
    card11.classList.toggle("flipCard")

    if(amount === 0){
        gedraaideKaarten[0] = (document.getElementById("foto11").src.substr(-10))
        gedraaideKaartenlink[0] = card11;
    }else{
        gedraaideKaarten[1] = (document.getElementById("foto11").src.substr(-10))
        gedraaideKaartenlink[1] = card11;
    }
    amount++;
   setTimeout(check,2000);}
}
console.log(gedraaideKaarten)

function check(){
    console.log(amount)
if(amount===2){

    if(gedraaideKaarten[0]===gedraaideKaarten[1])
    {
        gedraaideKaartenlink[0].classList.toggle("gevonden")
        gedraaideKaartenlink[1].classList.toggle("gevonden")
        console.log("huts!")
        gedraaideKaarten.pop();
        gedraaideKaarten.pop();
        gedraaideKaartenlink.pop();
        gedraaideKaartenlink.pop();
        amount = 0;

    }
    else{
        gedraaideKaartenlink[0].classList.toggle("flipCard")
        gedraaideKaartenlink[1].classList.toggle("flipCard")
        gedraaideKaarten.pop();
        gedraaideKaarten.pop();
        gedraaideKaartenlink.pop();
        gedraaideKaartenlink.pop();
        amount = 0;
    }
}
}

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate=Date.now();
    }while(currentDate-date <milliseconds);
}








        window.addEventListener("load", setup);