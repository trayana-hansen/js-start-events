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
	console.log("cow");
}

function evaluatePig() {
	console.log("pig");

}

function evaluateAll() {
	console.log("all");

}

//---------------------------------functions----------<
