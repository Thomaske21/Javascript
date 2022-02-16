const setup = () => {
    const familieNamen = ['Frank','Axelle','Alex','Nick','Evelyne','Regine'];
    console.log(familieNamen.length);
    console.log(familieNamen[0],familieNamen[2],familieNamen[4]);
    function voegNaamToe(){
        familieNamen.push(prompt());
    }
    voegNaamToe();
    console.log(familieNamen);

    console.log(familieNamen.join(', '));
}
window.addEventListener("load", setup);