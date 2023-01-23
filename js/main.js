$('.slider__inner').slick({
	dots: true,
	arrows: false,
	autoplay: true,
	fade: true,
	speed: 300,
})

$('.about__slider').slick({
	dots: true,
	arrows: false,
	autoplay: true,
	fade: true,
	speed: 300,
})

var animateLeft = $('.about__left')
var animateRight = $('.about__right')
var scrollChange = 800
$(window).scroll(function () {
	var scroll = $(window).scrollTop()

	if (scroll >= scrollChange) {
		animateLeft.addClass('about__left-animation')
		animateRight.addClass('about__right-animation')
	}
})

const tMenu = document.querySelector('.togglemenu>a')
const navBar = document.querySelector('.list')
tMenu.addEventListener('click', function () {
	navBar.classList.toggle('active')
	tMenu.classList.toggle('active')
})
