const htmlTag = document.querySelector("html");
const loader = document.querySelector(".loader");
const btnScrollTop = document.querySelector(".btn-scroll-to-top");
const animateElements = document.querySelectorAll(".animate");

const navWrapper = document.querySelector(".nav-wrapper");
const nav = navWrapper.querySelector("nav");

const menuBtn = document.querySelector(".menu-btn");
const menuIcon = menuBtn.querySelector("i");

const header = document.querySelector("header");
const headerH1 = header.querySelector("h1");
const headerH2 = header.querySelector("h2");
const headerH3 = header.querySelectorAll("h3");
const headerBtn = header.querySelector("a");

const photo = document.querySelector(".photo");
const photoImg = photo.querySelectorAll(".photo__gallery a");
const imgIcon = photo.querySelectorAll("i");

const photoLightbox = document.querySelector(".photo__lightbox");
const photoLightboxImg = photoLightbox.querySelector("img");
const lightboxBtn = photoLightbox.querySelector("button");

window.addEventListener("load", () => {
	loader.style.display = "none";
	setTimeout(() => {
		loader.style.zIndex = -999;
	}, 5000);
	animateElements.forEach((ele) => {
		ele.style.animationPlayState = "running";
	});
});

window.addEventListener("scroll", () => {
	nav.classList.toggle(
		"sticky",
		window.scrollY >= navWrapper.offsetHeight - nav.offsetHeight
	);
	if (nav.classList.contains("sticky")) {
		btnScrollTop.style.display = "block";
		htmlTag.style.scrollBehavior = "smooth";
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

photoImg.forEach((img, i) => {
	img.style.gridArea = "img-" + (i + 1);
	img.style.background =
		'url("' + img.dataset.href + '") center / cover no-repeat';
});

imgIcon.forEach((icon, i) => {
	icon.addEventListener("click", () => {
		photoLightbox.classList.add("open");
		photoLightbox.querySelector("img").src = photoImg[i - 1].dataset.href;

		lightboxBtn.addEventListener("click", () => {
			photoLightbox.classList.remove("open");
		});
	});
});
