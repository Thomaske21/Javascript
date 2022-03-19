const setup = () => {
    let tekst = document.getElementById("tekst").textContent.toLowerCase();
    let i = 0;
    let counter = 0;
    let counter2 = 0;
    while (i >= 0) {
        if (tekst.indexOf("an", i) >= 0) {
            counter++;
            i = (tekst.indexOf("an", i) + 1);
        } else {
            i = -1;
        }
    }
    console.log('an komt ' + counter+' keer voor');
    /* Dit is met lastIndexof*/
    let j = tekst.length;
    while (j >= 0) {
        if(tekst.lastIndexOf("an",j)>= 0){
            counter2++;
            j = tekst.lastIndexOf("an",j)-1;
        } else {
            j = -1;
        }
    }
    console.log('an komt '+counter2+' keer voor');

}
window.addEventListener("load", setup);
