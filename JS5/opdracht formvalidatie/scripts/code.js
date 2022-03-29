const setup = () => {
	let btnValideer=document.getElementById("btnValideer");
	btnValideer.addEventListener("click", valideer);

};

const valideer = () => {
	valideerVoornaam();
	valideerFamilienaam();
	valideerGeboorteDatum();
	valideerEmail();
	valideerKinderen();
};

const valideerVoornaam = () => {
	let txtVoornaam = document.getElementById("txtVoornaam");
	let voornaam = txtVoornaam.value.trim();
	if (voornaam.length > 30) {
		reportError(txtVoornaam,"max. 30 karakters");
		return false;

	} else {
		clearError(txtVoornaam);
		return true;
	}
}

const valideerFamilienaam = () => {
  let txtFamilienaam = document.getElementById("txtFamilienaam");
  let familienaam = txtFamilienaam.value.trim();
  if (familienaam === ''){
	  reportError(txtFamilienaam,"verplicht veld");
	  return false;
  } else if (familienaam.length > 50) {
	  reportError(txtFamilienaam,"max 50 karakters");
	  return false;
  }  else {
	 clearError(txtFamilienaam);
	 return true;
  }
}

const valideerGeboorteDatum = () => {
  let txtGeboorteDatum = document.getElementById("txtGeboorteDatum");
  let datum = txtGeboorteDatum.value.trim();
	let jaar = datum.substring(0, 4);
	let maand = datum.substring(5, 7);
	let dag = datum.substring(8, 10);
	
	if (datum === ''){
		reportError(txtGeboorteDatum,"verplicht veld");
		return false;
	} else if (!isGetal(jaar) || !isGetal(maand) || !isGetal(dag) || datum.charAt(4) !== "-" || datum.charAt(7) !== "-"){
		reportError(txtGeboorteDatum,"format is niet jjjj-mm-dd");
		return false;
	} else {
		clearError(txtGeboorteDatum);
		return true;
	}
}

const valideerEmail = () => {
  let txtEmail = document.getElementById("txtEmail");
  let email = txtEmail.value.trim();

  if (email === '') {
	  reportError(txtEmail,"verplicht veld");
	  return false;
  } else if (email.indexOf('@') === -1 || email.indexOf('@') === 0 || email.indexOf('@') === email.length - 1) {
	  reportError(txtEmail,"geen geldig email adres");
	  return false;
  } else {
	  clearError(txtEmail);
	  return true;
  }
}
const valideerKinderen = () => {
	let txtKinderen = document.getElementById('txtKinderen');
	let kinderen = txtKinderen.value.trim();
	if (!isGetal(kinderen) || kinderen < 0 ){
		reportError(txtKinderen,"is geen positief getal");
	} else if (kinderen > 99){
		reportError(txtKinderen,"is te vruchtbaar");
	} else {
		clearError(txtKinderen);
	}
}

const reportError = (element, message) => {
	// als je deze gebruikt, behoeft het error element natuurlijk geen id attribuute
	element.className="invalid";
	element.nextElementSibling.innerHTML = message; // LET OP : nextSibling zou niet werken, die geeft een text node (d.i. immers de next sibling)
}

const clearError = (element) => {
	// als je deze gebruikt, behoeft het error element natuurlijk geen id attribuute
	element.className="";
	element.nextElementSibling.innerHTML = "";
}
const isGetal = (tekst) => {
	return !isNaN(tekst);
}

window.addEventListener("load", setup);