//input fields from the form
const cowInput = document.getElementById("cow");
const pigInput = document.getElementById("pig");
const mooseInput = document.getElementById("moose");

//validate buttons
const validatePig = document.getElementById("evaluatePig");
const validateAll = document.getElementById("evaluateForm");

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

}

//---------------------------------functions----------<
