//input fields from the form
const cowInput = document.getElementById("cow");
const pigInput = document.getElementById("pig");
const mooseInput = document.getElementById("moose");
const animalSelect = document.getElementById("animalSelect");

//validate buttons
const validatePig = document.getElementById("evaluatePig");
const validateAll = document.getElementById("evaluateForm");
let animalDescription = document.getElementById("animalDescription");

//eventListeners
cowInput.addEventListener("keyup", evaluateCow);
validatePig.addEventListener("click", evaluatePig);
validateAll.addEventListener("click", evaluateAll);

//-----------------functions---------------------->
function evaluateCow() {
	if (cowInput.value == "ko") {
		console.log("weeeeee ko");
		cowInput.style.backgroundColor = "green";
	} else {
		console.log("ikke ko!");
		cowInput.style.backgroundColor = "red";
	}
}

function evaluatePig() {
	if (pigInput.value == "gris") {
		console.log("weeeeee gris");
		pigInput.style.backgroundColor = "green";
	} else {
		console.log("ikke gris!");
		pigInput.style.backgroundColor = "red";
	}
}




function evaluateAll() {
	if (cowInput.value == "ko") {
		console.log("weeeeee ko");
		cowInput.style.backgroundColor = "green";
	} else {
		console.log("ikke ko!");
		cowInput.style.backgroundColor = "red";
	}
	if (pigInput.value == "gris") {
		console.log("weeeeee gris");
		pigInput.style.backgroundColor = "green";
	} else {
		console.log("ikke gris!");
		pigInput.style.backgroundColor = "red";
	}
	if (mooseInput.value == "elg") {
		console.log("weeeeee moose");
		mooseInput.style.backgroundColor = "green";
	} else {
		console.log("ikke moose!");
		mooseInput.style.backgroundColor = "red";
	}
	switch (animalSelect.value) {
		case "Fugl":
			animalDescription.innerHTML = "You have chosen " + animalSelect.value + " a warm-blooded vertebrate of the class Aves, having a body covered with feathers"
			break;
		case "Fisk":
			animalDescription.innerHTML = "You have chosen " + animalSelect.value + " an aquatic, craniate, gill-bearing animal that lacks limbs with digits."
			break;
		case "Reptil":
			animalDescription.innerHTML = "You have chosen " + animalSelect.value + " an animal in the class Reptilia, a paraphyletic grouping comprising all sauropsid amniotes except Aves (birds)."
			break;
		case "Insekt":
			animalDescription.innerHTML = "You have chosen " + animalSelect.value + " a pancrustacean hexapod invertebrate of the class Insecta. They are the largest group within the arthropod phylum."
			break;
		case "Pattedyr":
			animalDescription.innerHTML = "You have chosen " + animalSelect.value + " a vertebrate animal constituting the class Mammalia characterized by the presence of mammary glands."
			break;
		default:
			animalDescription.innerHTML = "Please choose an option"


	}

}

//---------------------------------functions------------------------<

