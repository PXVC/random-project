// const body = document.querySelector("body");
const navWrapper = document.querySelector(".nav-wrapper");
const nav = navWrapper.querySelector("nav");

const menuBtn = document.querySelector(".menu-btn");
const menuIcon = menuBtn.querySelector("i");

const header = document.querySelector("header");
const headerH1 = header.querySelector("h1");
const headerH2 = header.querySelector("h2");
const headerH3 = header.querySelectorAll("h3");
const headerBtn = header.querySelector("a");

window.addEventListener("scroll", () => {
	nav.classList.toggle(
		"sticky",
		window.scrollY >= navWrapper.offsetHeight - nav.offsetHeight
	);
});

menuBtn.addEventListener("click", () => {
	if (menuIcon.classList.contains("fa-bars")) {
		menuIcon.classList.remove("fa-bars");
		menuIcon.classList.add("fa-x");
	} else {
		menuIcon.classList.remove("fa-x");
		menuIcon.classList.add("fa-bars");
	}
});

let currentImgIndex = 1;

setInterval(() => {
	header.style.backgroundImage = `url(\"http://cityhostel.axiomthemes.com/wp-content/uploads/2017/01/slide${currentImgIndex}.jpg\")`;
	currentImgIndex += currentImgIndex < 4 ? 1 : -3;
}, 5000);
