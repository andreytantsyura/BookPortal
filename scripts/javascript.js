function setLightTheme() {
	var root = document.querySelector(':root');
	root.style.setProperty('--navbar-color', '#5d65db');
	root.style.setProperty('--navbar-text-color', '#f5efef');

	root.style.setProperty('--navbar-search-img', '../images/search_light.jpg');
	root.style.setProperty('--navbar-search-back-color', '#5d65db');

	root.style.setProperty('--main-text-color', '#f5efef');

	root.style.setProperty('--background-img', 'url("../images/mountains_blue.jpg")');
	root.style.setProperty('--compilation-background-color', '#9d9ab850');

}

function setDarkTheme() {
	var root = document.querySelector(':root');
	root.style.setProperty('--navbar-color', '#242424');
	root.style.setProperty('--navbar-text-color', '#d69e26');

	root.style.setProperty('--navbar-search-img', '../images/search_dark.jpg');
	root.style.setProperty('--navbar-search-back-color', '#919191');

	root.style.setProperty('--main-text-color', '#d69e26');

	root.style.setProperty('--background-img', 'url("../images/mountains_2_gray.jpg")');
	root.style.setProperty('--compilation-background-color', '#2424248e');
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