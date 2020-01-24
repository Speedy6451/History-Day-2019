function click(elem) {
  console.log("l")
	elem.classList.toggle("open");
}
function answer(txt){
	document.getElementsByClassName("test-output")[0].innerHTML = txt;
}

