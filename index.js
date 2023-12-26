// Get the button:
let topbutton = document.getElementById("topBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
	scrollFunction();
};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		topbutton.style.display = "block";
	} else {
		topbutton.style.display = "none";
	}
}

// When the user clicks on the button, scroll to the top of the document
function backTop() {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
	console.log("button");
}

var pull = document.getElementById("pull-chain");
pull.addEventListener(
	"click",
	function () {
		pull.classList.toggle("pulled");
	},
	false
);

function toggleFunction() {
	const body = document.body;
	body.classList.toggle("dark-theme");

	// Check if dark theme is applied
	const isDarkMode = body.classList.contains("dark-theme");

	// Save the user's preference to localStorage
	localStorage.setItem("theme", isDarkMode ? "dark" : "light");
}

// Check localStorage for user preference and set theme on page load
document.addEventListener("DOMContentLoaded", function () {
	const savedTheme = localStorage.getItem("theme");

	if (savedTheme === "dark") {
		document.body.classList.add("dark-theme");
	} else {
		document.body.classList.remove("dark-theme");
	}
});


