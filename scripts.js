function open_bar () {
	let slider = document.getElementById("dark_slider");
	slider.style.display = 'block';
}

function close_bar () {
	document.getElementById("dark_slider").style.display = "none";
}

function change () {
	let body = document.body;
	body.classList.toggle("dark");
}