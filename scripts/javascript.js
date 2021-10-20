function setLightTheme() {
	var root = document.querySelector(':root');
	root.style.setProperty('--navbar-color', '#5d65db');
	root.style.setProperty('--navbar-text-color', '#f5efef');
	root.style.setProperty('--background-img', 'url("../images/mountains_blue.jpg")');
}

function setDarkTheme() {
	var root = document.querySelector(':root');
	root.style.setProperty('--navbar-color', '#242424');
	root.style.setProperty('--navbar-text-color', '#d69e26');
	root.style.setProperty('--background-img', 'url("../images/mountains_gray.jpg")');
}

function toggleTheme() {
	checkbox = document.getElementById('theme-switcher');

	if (checkbox.checked != true) {
		setLightTheme();
	}
	else {
		setDarkTheme();
	}
}