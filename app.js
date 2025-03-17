const clock = document.getElementById("clock");
const searchInput = document.getElementById("search");

window.setInterval(() => {
	let time = new Date();
	clock.innerText =
		time.getHours() + ":" + String(time.getMinutes()).padStart(2, "0");
}, 100);

function search() {
	window.location = "https://www.google.com/search?q=" + searchInput.value;
}

searchInput.addEventListener("keypress", (e) => {
	if (e.key == "Enter") {
		search();
	}
});
