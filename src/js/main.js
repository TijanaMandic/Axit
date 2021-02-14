function navigation() {
	var $navBtn = $('.js-toggle');
	var $nav = $('.js-nav');
	var $navLink = $('.js-link');
	var navBtnOpen = 'nav-toggle-open';
	var navOpen = 'nav-open';

	$navBtn.on('click', function() {
		$(this).toggleClass(navBtnOpen);
		$nav.toggleClass(navOpen);
	});

	$navLink.on('click', function() {
		$navBtn.removeClass(navBtnOpen);
		$nav.removeClass(navOpen);
	});
}

function tabs() {
	var $tabBtn = $('.js-tab-btn');
	var $tabContent = $('.js-tab-content');
	var tabOpen = 'tabs-btn-open';
	var loaded = false;

	$tabBtn.on('click', function() {
		var tabIndex = $(this).index();
		$tabBtn.removeClass(tabOpen);
		$(this).addClass(tabOpen);
		$tabContent.stop().hide();
		$(this).closest('.tabs').find($tabContent).eq(tabIndex).stop().show();
	});

	$(window).on('load', function() {
		if(loaded === false) {
			$tabBtn.first().click();
			loaded = true;
		}
	});	
}

navigation();
tabs();