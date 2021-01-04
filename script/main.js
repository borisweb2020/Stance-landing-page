$(function(){

	// === Works Slider with Scroll Bar Swiper

const $workSlider = $('#workSlider');
const $rangeSlider = $('#rangeSlider');

$workSlider.on('init reInit', function(event, slick){
	let amountOfSliders = slick.slideCount;
	$rangeSlider.attr('max', amountOfSliders);
});

$workSlider.on('afterChange', function(event, slick, currentSlide){
	$rangeSlider.val(currentSlide + 1);
});

$rangeSlider.on('input change', function(){
	$workSlider.slick('slickGoTo', this.value - 1);
});


$workSlider.slick({
	infinite: true,
	slidesToShow: 4,
	slidesToScroll: 1,
	variableWidth: true,
	arrows: false,
	dots: false,
	responsive: [
		{
			breakpoint: 1441,
			settings: {
				slidesToShow: 3,
				variableWidth: false,
			}
		},

		{
			breakpoint: 1201,
			settings: {
				slidesToShow: 2,
				variableWidth: false,
			}
		},

		{
			breakpoint: 769,
			settings: {
				slidesToShow: 1,
				variableWidth: false,
				vertical: true,
			}
		}
	]
	
});

	// == Installing worksWrapper Left Position

function leftPosition(){

	const widthWindow    = $(window).width();
	const widthContainer = $('.container').width();
	const worksWrapper   = $workSlider.parent();

	let leftValue = (widthWindow - widthContainer) / 2

	worksWrapper.offset({left: leftValue});

	if(widthWindow < 769){
		worksWrapper.offset({left: 0});
	}	
}

leftPosition();

$(window).on('resize', function(){
	leftPosition();
});


	// == Smooth Scroll

const $advantages = $('#advantages');

$('#introScroll').on('click', function(){

	let elementPos    = $advantages.offset().top;
	
	$('html, body').animate({
		scrollTop: elementPos
	}, 800, 'linear');
});


	// == Toogling Lang Shift Menu

const $langShift    = $('#langShift');
const $langShiftBtn = $('#langShiftBtn');

$langShiftBtn.on('click', function(){

	$langShift.toggleClass('show');
	$(this).toggleClass('rotate');
});


	// == Toogling Nav Menu

const $headerNav = $('#headerNav');
const $burger    = $('#burger');

$burger.on('click', function(){

	$headerNav.toggleClass('active');
});


});


	
