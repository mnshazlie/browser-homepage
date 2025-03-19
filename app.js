const clock = document.getElementById("clock");
const searchInput = document.getElementById("search");
const daysCounter = document.getElementById("daysCounter");

window.setInterval(() => {
	let time = new Date();
	clock.innerText =
		time.getHours() + ":" + String(time.getMinutes()).padStart(2, "0");
}, 100);

function initDate() {
	let todayDate = new Date();
	let examDate = new Date("2025-06-21");
	let differenceInTime = examDate.getTime() - todayDate.getTime();
	daysCounter.innerText = `${Math.floor(
		differenceInTime / (1000 * 3600 * 24)
	)} Days`;
}

function search() {
	window.location = "https://www.google.com/search?q=" + searchInput.value;
}

initDate();

searchInput.addEventListener("keypress", (e) => {
	if (e.key == "Enter") {
		search();
	}
});

window.setInterval(() => {
	initDate();
}, 1000 * 60);
