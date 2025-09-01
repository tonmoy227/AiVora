/* -----------------------------------------------------------------------------



File:           JS Core
Version:        1.0
Last change:    00/00/00 
-------------------------------------------------------------------------------- */
;(function($) {

	"use strict";
	gsap.config({
		nullTargetWarn: false,
	});

// lenis-smooth-scroll
	const lenis = new Lenis({
		duration: .8, 
		easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
		direction: 'vertical', 
		smooth: true, 
		smoothTouch: false, 
	});

	function raf(time) {
		lenis.raf(time);
		requestAnimationFrame(raf);
	}
	requestAnimationFrame(raf);


	function TXTheaderSticky() {
		var $window = $(window);
		var lastScrollTop = 0;
		var $header = $('.txa_sticky_header');
		var headerHeight = $header.outerHeight() + 30;

		$window.scroll(function () {
			var windowTop = $window.scrollTop();

			if (windowTop >= headerHeight) {
				$header.addClass('txa_sticky');
			} else {
				$header.removeClass('txa_sticky');
				$header.removeClass('txa_sticky_show');
			}

			if ($header.hasClass('txa_sticky')) {
				if (windowTop < lastScrollTop) {
					$header.addClass('txa_sticky_show');
				} else {
					$header.removeClass('txa_sticky_show');
				}
			}

			lastScrollTop = windowTop;
		});
	}
	TXTheaderSticky();
	jQuery(window).on('scroll', function() {
		if (jQuery(window).scrollTop() > 250) {
			jQuery('.ag-header-section.header_style_three, .ag-header-section.header_style_four').addClass('sticky-on')
		} else {
			jQuery('.ag-header-section.header_style_three, .ag-header-section.header_style_four').removeClass('sticky-on')
		}
	});
	$('.open_mobile_menu').on("click", function() {
		$('.mobile_menu_wrap').toggleClass("mobile_menu_on");
	});
	$('.open_mobile_menu').on('click', function () {
		$('body').toggleClass('mobile_menu_overlay_on');
	});
	jQuery(".mobile-main-navigation li.dropdown").append('<span class="dropdown-btn"><i class="fas fa-angle-down"></i></span>'),
	jQuery(".mobile-main-navigation li .dropdown-btn").on("click", function () {
		jQuery(this).hasClass("active")
		? (jQuery(this).closest("ul").find(".dropdown-btn.active").toggleClass("active"), jQuery(this).closest("ul").find(".dropdown-menu.active").toggleClass("active").slideToggle())
		: (jQuery(this).closest("ul").find(".dropdown-btn.active").toggleClass("active"),
			jQuery(this).closest("ul").find(".dropdown-menu.active").toggleClass("active").slideToggle(),
			jQuery(this).toggleClass("active"),
			jQuery(this).parent().find("> .dropdown-menu").toggleClass("active"),
			jQuery(this).parent().find("> .dropdown-menu").slideToggle());
	});
	// Background Image
	$('[data-background]').each(function() {
		$(this).css('background-image', 'url('+ $(this).attr('data-background') + ')');
	});

	$('.marquee-left').marquee({
		gap: 0,
		speed: 40,
		delayBeforeStart: 0,
		direction: 'left',
		duplicated: true,
		pauseOnHover: true,
		startVisible:true,
	});
	$('.marquee-right').marquee({
		gap: 28,
		speed: 40,
		delayBeforeStart: 0,
		direction: 'right',
		duplicated: true,
		pauseOnHover: true,
		startVisible:true,
	});
	
	gsap.registerPlugin(ScrollTrigger);
	
	// Animation
	if($('.wow').length){
		var wow = new WOW(
		{
			boxClass:     'wow',
			animateClass: 'animated',
			offset:       0,
			mobile:       true,
			live:         true
		}
		);
		wow.init();
	};
	jQuery('.video_box').magnificPopup({
		disableOn: 200,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false,
	});
	if($('.tx-split-text').length) {
		var st = jQuery(".tx-split-text");
		if(st.length == 0) return;
		gsap.registerPlugin(SplitText);
		st.each(function(index, el) {
			el.split = new SplitText(el, { 
				type: "lines",
				linesClass: "split-line"
			});
			gsap.set(el, { perspective: 400 });
			if( jQuery(el).hasClass('split-in-up') ){
				gsap.set(el.split.lines, {
					opacity: 0,
					y: 50,
					rotateX: "50deg",
					ease: "back.out",
					transformOrigin: "50% 0%"
				});
			}
			el.anim = gsap.to(el.split.lines, {
				scrollTrigger: {
					trigger: el,
					start: "top 90%",
				},
				x: "0",
				y: "0",
				rotateX: "0",
				yPercent: 0,
				rotationX: "0",
				color: 'inherit',
				webkitTextStroke: "0px white",
				scale: 1,
				opacity: 1,
				duration: .5, 
				stagger: 0.3,
			});
		});
	};
	if($('.av-slider-title').length) {
		var txtSplit = $('.av-slider-title');
		if(txtSplit.length == 0) return; gsap.registerPlugin(SplitText); txtSplit.each(function(index, el) {
			el.split = new SplitText(el, { 
				type: "lines",
				linesClass: "split-line"
			});
		});
	}
	$('.counter').counterUp({
		delay: 20,
		time: 5000
	});
	// windows-loaded-before-functions
	document.addEventListener("DOMContentLoaded", function () {
		window.addEventListener('load', function(){


			let preloader = document.querySelector("#preloader");
			if (preloader) {
				preloader.classList.add("preloaded");
				setTimeout(function () {
					preloader.remove();
				}, 1000 ) ;

			}

			setTimeout(function() {
				if ($('.av-hero1-slider').length > 0 ) {
					var slider = new Swiper('.av-hero1-slider', {
						spaceBetween: 0,
						slidesPerView: 1,
						loop: true,
						speed: 1000,
						effect: "fade",
						autoplay: {
							enabled: true,
							delay: 6000
						},
						pagination: {
							el: ".av-hr1-pagi",
							clickable: true,
						},

					});
				};

				const AIHERO1 = gsap.timeline();
				AIHERO1
				.from(".av-hero1-client", { opacity:0, rotate: 0,  scale: 1.5, duration: 1, transformOrigin: "center",  ease: "power1.out" })
				.from(".av-hr1-count-item", { opacity:0, rotate: 0,  scale: 1.5, duration: 1, transformOrigin: "center",  ease: "power1.out" },"< ")
				
			}, 700);
		})		
	});
	

	if ($('.av-spon1-slider').length > 0 ) {
		var slider = new Swiper('.av-spon1-slider', {
			spaceBetween: 72,
			slidesPerView: 6,
			loop: true,
			autoplay: {
				enabled: true,
				delay: 6000
			},
			speed: 400,
			breakpoints: {
				'1600': {
					slidesPerView: 6,
				},
				'1200': {
					slidesPerView: 5,
					spaceBetween: 40,
				},
				'992': {
					slidesPerView: 4,
					spaceBetween: 20,
				},
				'768': {
					slidesPerView: 4,
					spaceBetween: 20,
				},
				'576': {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				'480': {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				'0': {
					slidesPerView: 2,
					spaceBetween: 20,
				},
			},
		});
	};

	$('.av-item-active').each(function () {
		var $wrap = $(this);
		var $items = $wrap.find('.av-feat1-wrap');

		$items.on('mouseover', function () {
			$items.removeClass('active');
			$(this).addClass('active');
		});
	});

	if (window.matchMedia("(min-width: 992px)").matches) {
		let proSroll = gsap.timeline();
		let otherSections_2 = document.querySelectorAll('.av-pro1-item')
		otherSections_2.forEach((section, index, i) => {
			gsap.set(otherSections_2, {
				scale: 1 
			});
			proSroll.to(section, {
				scrollTrigger: {
					trigger: section,
					pin: section,
					scrub: 1,
					start: "top 5%",
					end: "bottom 64%",
					ease: "none",
					endTrigger: '.av-pro1-content',
					pinSpacing: false,
					markers: false,
				},
			})
		});
	}


	if ($('.av-testi1-slider').length > 0 ) {
		var slider = new Swiper('.av-testi1-slider', {
			slidesPerView: 3,
			loop: true,
			spaceBetween: 32,
			speed: 1000,
			navigation: {
				nextEl: ".av-testi1-next",
				prevEl: ".av-testi1-prev",
			},
			autoplay: {
				enabled: true,
				delay: 6000
			},
			breakpoints: {
				'1600': {
					slidesPerView: 3,
				},
				'1400': {
					slidesPerView: 3,
				},
				'992': {
					slidesPerView: 2,
				},
				'768': {
					slidesPerView: 1,
				},
				'576': {
					slidesPerView: 1,
				},
				'0': {
					slidesPerView: 1,
				},
			},
		});
	};


	gsap.utils.toArray(' .left_view').forEach((el, index) => { 
		let tlcta = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 1.5,
				start: "top 70%",
				end: "top -5%",
				toggleActions: "play none none reverse",
				markers: false
			}
		})

		tlcta
		.set(el, {transformOrigin: 'center center'})
		.from(el, { opacity: 0, scale: 1, x: "-300"}, {opacity: 1, y: 0, duration: 1, immediateRender: false})
	});
	gsap.utils.toArray(' .right_view').forEach((el, index) => { 
		let tlcta = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 1.5,
				start: "top 70%",
				end: "top -5%",
				toggleActions: "play none none reverse",
				markers: false
			}
		})

		tlcta
		.set(el, {transformOrigin: 'center center'})
		.from(el, { opacity: 0, scale: 1, x: "300"}, {opacity: 1, y: 0, duration: 1, immediateRender: false})
	});
})(jQuery);