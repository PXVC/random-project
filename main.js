const loader = document.querySelector(".loader");
const btnScrollTop = document.querySelector(".btn-scroll-to-top");

const navWrapper = document.querySelector(".nav-wrapper");
const nav = navWrapper.querySelector("nav");

const menuBtn = document.querySelector(".menu-btn");
const menuIcon = menuBtn.querySelector("i");

const header = document.querySelector("header");
const headerH1 = header.querySelector("h1");
const headerH2 = header.querySelector("h2");
const headerH3 = header.querySelectorAll("h3");
const headerBtn = header.querySelector("a");

window.addEventListener("beforeunload", () => {
	window.scrollTo(0, 0);
});

window.addEventListener("load", () => {
	loader.style.opacity = 0;
	setTimeout(() => {
		loader.style.zIndex = -999;
	}, 5000);
	headerH1.classList.remove("disable");
	headerH2.classList.remove("disable");
	headerH3.forEach((h3) => {
		h3.classList.remove("disable");
	});
	headerBtn.classList.remove("disable");
});

window.addEventListener("scroll", () => {
	nav.classList.toggle(
		"sticky",
		window.scrollY >= navWrapper.offsetHeight - nav.offsetHeight
	);
	if (nav.classList.contains("sticky")) {
		btnScrollTop.style.display = "block";
	} else {
		btnScrollTop.style.display = "none";
	}
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

btnScrollTop.addEventListener("click", () => {
	document.documentElement.scrollTop = 0;
});

let currentImgIndex = 1;

setInterval(() => {
	header.style.backgroundImage = `url(\"http://cityhostel.axiomthemes.com/wp-content/uploads/2017/01/slide${currentImgIndex}.jpg\")`;

	switch (currentImgIndex) {
		case 1:
			headerH1.innerHTML = "Book your stay";
			headerH2.innerHTML = "$10";
			headerH3[1].innerHTML = "per night";
			break;

		case 2:
			headerH1.innerHTML = "Plan trips ahead";
			headerH2.innerHTML = "$20";
			headerH3[1].innerHTML = "a day";
			break;

		case 3:
			headerH1.innerHTML = "Save cash for fun";
			headerH2.innerHTML = "$30";
			break;

		case 4:
			headerH1.innerHTML = "Only for you";
			headerH2.innerHTML = "$10";
			headerH3[1].innerHTML = "per night";
	}
	currentImgIndex += currentImgIndex < 4 ? 1 : -3;
}, 10000);
