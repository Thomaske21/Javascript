    let saved = [];
const setup = () => {
    let plusknop = document.getElementById("new");
    let opslaanknop = document.getElementById("save");
    let annuleerknop = document.getElementById("cancel");
    let removeallesknop = document.getElementById("clearAll");
    let verbergknop = document.getElementById("hideExpired");
    let sorteerknop = document.getElementById("orderByDate");
    plusknop.addEventListener("click", nieuw);
    opslaanknop.addEventListener("click", opslaan);
    annuleerknop.addEventListener("click", cancel);
    removeallesknop.addEventListener("click", deletealles);
    verbergknop.addEventListener("click",verberg);
    localload();
}
const nieuw = () => {
    let plusknop = document.getElementById("new");
    let form = document.getElementsByClassName("form")[0];
    plusknop.classList.add("hidden");
    form.classList.remove("hidden");
}
const opslaan = () => {
    let titel = document.getElementById("title");
    let einddatum = document.getElementById("endDate");
    let notities = document.getElementById("notes");
    if (titel.value === '') {
        titel.classList.add("invalid");
    }
    if (einddatum.value === '') {
        einddatum.classList.add("invalid");
    }
    if (titel.value !== '' && einddatum.value !== '') {
        createTaak(titel.value, new Date(einddatum.value), notities.value);
        let taak = {
            titel: titel.value,
            einddatum: new Date(einddatum.value),
            notities: notities.value
        }
        saved.push(taak);
        localsave();
        let plusknop = document.getElementById("new");
        let form = document.getElementsByClassName("form")[0];
        plusknop.classList.remove("hidden");
        form.classList.add("hidden");
        titel.value = '';
        einddatum.value = '';
        notities.value = '';
    }
}
const cancel = () => {
    let titel = document.getElementById("title");
    titel.className = '';
    let einddatum = document.getElementById("endDate");
    einddatum.className = '';
    let notities = document.getElementById("notes");
    let plusknop = document.getElementById("new");
    let form = document.getElementsByClassName("form")[0];
    plusknop.classList.remove("hidden");
    form.classList.add("hidden");
    titel.value = '';
    einddatum.value = '';
    notities.value = '';
}
const createTaak = (titel, einddatum, notities) => {
    let todos = document.getElementById("todos");
    let taak = document.createElement("div");
    taak.className = "todo";
    let titelTaak = document.createElement("h2");
    titelTaak.append(titel);
    let einddatumTaak = document.createElement("h3");
    let date = new Date(einddatum);
    let dag = date.getDate();
    let maand = date.getMonth();
    console.log(einddatumTaak)
    einddatumTaak.append(dag + " " + maand);
    if (date < Date.now()) {
        taak.classList.add("expired");
    }
    let notitiesTaak = document.createElement("p");
    if (notities !== '') {
        notitiesTaak.append(notities);
    } else {
        notitiesTaak.append("-");
    }
    let markeerAlsAfgerondKnop = document.createElement("button");
    markeerAlsAfgerondKnop.append("Markeer als afgerond");
    markeerAlsAfgerondKnop.addEventListener("click", removetaak);
    taak.append(titelTaak);
    taak.append(einddatumTaak);
    taak.append(notitiesTaak);
    taak.append(markeerAlsAfgerondKnop);
    todos.append(taak);

}
const localsave = () => {
    let savedtaken = JSON.stringify(saved);
    localStorage.setItem("saved", savedtaken);
}
const localload = () => {
    let mytaken = localStorage.getItem("saved");
    if (mytaken != null) {
        saved = JSON.parse(mytaken);
        for (let i = 0; i < saved.length; i++) {
            createTaak(saved[i].titel, saved[i].einddatum, saved[i].notities);
        }
    }
}
const removetaak = (event) => {
    let taak = event.target.parentElement;
    let titel = taak.childNodes[0].firstChild.textContent;
    taak.remove();
    for (let i = 0; i < saved.length; i++) {
        if (saved[i].titel === titel) {
            saved.splice(i, 1);
        }
    }
    localsave();
}
const deletealles = () => {
    let confirm = window.confirm("Ben je zeker dat je alle taken wil wissen");
    if (confirm){
        let taken = document.getElementsByClassName("todo");
        while (taken.length !==0){
            taken.item(0).remove();
        }
        saved = [];
        localsave();
    }

}
const verberg = () => {

}
window.addEventListener("load", setup);