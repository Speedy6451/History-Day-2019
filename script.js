function loadImgs() {
	for (i in document.getElementsByClassName("open")) {
		//i.
	}
}
function clik(elem) {
	console.log("l");
	elem.classList.toggle("open");
}
function answer(txt){
	document.getElementsByClassName("test-output")[0].innerHTML = txt;
	console.log("log")
}
console.log("log");
