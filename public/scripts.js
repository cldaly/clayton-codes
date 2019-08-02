var techBtn = document.getElementById("techListBtn");
var content = document.getElementById("techListContent");

techBtn.addEventListener("click", function(){
	this.classList.toggle("active");
	if (content.style.maxHeight) {
		content.style.maxHeight = null;
	} else {
		content.style.maxHeight = content.scrollHeight + "px";
	}
});