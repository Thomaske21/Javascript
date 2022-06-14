let global={
    activeId : 0
}

const setup = () => {
    //kleine fototjes
    let thumbnails = document.getElementById("thumbnails");
    let divcounter = document.createElement("div")
    divcounter.id = 'counter'
    let divthumbs = document.createElement("div")
    //grote foto
    let divgrotefoto = document.getElementsByClassName("image-navigator")[0]
    //title en description
    let sectionTitleEnDisc = document.getElementsByClassName("image-data")[0]
    let title = document.createElement("p")
    title.id = "copyright"
    let description = document.createElement("p")
    description.id = "description"

    //pijlen
    let pijlRechts = document.getElementById("image-nav-right")
    let pijlLinks = document.getElementById("image-nav-left")
    let imggroot = document.createElement("img")
    for(let i = 0; galleryData.length; i++){
        console.log(i)
        let img = document.createElement("img")

        img.src = galleryData[i].urlThumb
        img.className = "thumbnail"
        img.id = i+""
        img.setAttribute("smallimage-id", i+"")
        if(i === 0){
            img.className = "thumbnail activeThumbnail"
            imggroot.src = galleryData[0].urlFull
            imggroot.id = "mainPhoto"
            title.innerHTML = "<strong>Photos: </strong>"+galleryData[0].copyright
            description.innerHTML = galleryData[0].description
        }

        img.addEventListener("click", laden)
        pijlRechts.addEventListener("click", rechts)
        pijlLinks.addEventListener("click", links)

        divcounter.innerHTML = 1 +" of "+(galleryData.length)
        thumbnails.append(divcounter)
        divthumbs.append(img)
        thumbnails.append(divthumbs)
        divgrotefoto.append(imggroot)
        sectionTitleEnDisc.append(title)
        sectionTitleEnDisc.append(description)
    }

};
const laden = (event) => {
    let target = event.currentTarget
    global.activeId = target.getAttribute("smallimage-id")
    let nummer = parseInt(global.activeId) +1;
    let huidigefoto = document.getElementsByClassName("activeThumbnail")[0]
    huidigefoto.classList.remove("activeThumbnail")
    let img = document.getElementById(global.activeId)
    img.className = "thumbnail activeThumbnail"
    document.getElementById("counter").removeChild(document.getElementById("counter").childNodes[0])
    document.getElementById("counter").append(nummer +" of "+ galleryData.length )
    document.getElementById("mainPhoto").src = galleryData[global.activeId].urlFull
    document.getElementById("copyright").innerHTML = "<strong>Photos: </strong>"+galleryData[global.activeId].copyright
    document.getElementById("description").innerHTML = galleryData[global.activeId].description
}
const rechts = () => {
    let huidigefoto = document.getElementsByClassName("activeThumbnail")[0]
    let index = parseInt(global.activeId) + 1
    if(index !== galleryData.length) {
        global.activeId = index
    } else {
        global.activeId = 0
    }
    let nummer = parseInt(global.activeId) + 1
    huidigefoto.classList.remove("activeThumbnail")
    let img = document.getElementById(global.activeId )
    img.className = "thumbnail activeThumbnail"
    document.getElementById("counter").innerHTML = nummer+" of "+(galleryData.length)
    document.getElementById("mainPhoto").src = galleryData[global.activeId].urlFull
    document.getElementById("copyright").innerHTML = "<strong>Photos: </strong>" + galleryData[global.activeId].copyright
    document.getElementById("description").innerHTML = galleryData[global.activeId].description
}
const links = () => {
    let huidigefoto = document.getElementsByClassName("activeThumbnail")[0]
    let index = parseInt(global.activeId) -1
    if(index !== -1) {
        global.activeId = index
    } else {
        global.activeId = galleryData.length-1
    }
    let nummer = parseInt(global.activeId) + 1
    huidigefoto.classList.remove("activeThumbnail")
    let img = document.getElementById(global.activeId)
    img.className = "thumbnail activeThumbnail"
    document.getElementById("counter").innerHTML = nummer+" of "+(galleryData.length)
    document.getElementById("mainPhoto").src = galleryData[global.activeId].urlFull
    document.getElementById("copyright").innerHTML = "<strong>Photos: </strong>" + galleryData[global.activeId].copyright
    document.getElementById("description").innerHTML = galleryData[global.activeId].description
}
window.addEventListener("load", setup);