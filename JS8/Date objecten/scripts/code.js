const setup = () => {
    let d1 = new Date(2003,8,5);
    let d2 = new Date();

    let d3 = d2-d1;
    let days = d3/1000/3600/24;
    console.log(days + " dagen");

}
window.addEventListener("load", setup);