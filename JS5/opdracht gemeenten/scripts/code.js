const setup = () => {
    let gestopt = false;
    let input = "";
    while (!gestopt) {
        let invoer = window.prompt("Geef een gemeente", "stop");
        if (invoer !== "stop") {
            input += invoer + " ";
        } else {
            gestopt = true;
        }
    }
    input = input.split(" ");
    input = input.sort();

    for (let i = 1; i < input.length; i++) {
        let optionMaken = '<option value="' + input[i] + '">' + input[i] + '</option> <br>';
        console.log(optionMaken);
        document.getElementById("keuzelijst").innerHTML += optionMaken;
    }
}
window.addEventListener("load", setup);