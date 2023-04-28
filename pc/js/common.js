$(document).ready(function(){
  /* contents size */
	$('.content').css('height', $(window).height() - $('.mySwiper').height() - 144 + 'px'); //content padding + slide margin top(20px)
	if ($('.wrap').hasClass('white_board')){
		$('html').css('overflow', 'hidden');
	};
	var onResize = function(target) {
		$(document).ready(function(){
			$(target).css('height', $(window).height());
		});
	}
	onResize('.wrap');
	onResize('.wrap_content');
	onResize('.lnb_area');
	onResize('.snb_area');

	/* resize */
  $(window).on('resize', function(){
		$('.content').css('height', $(window).height() - $('.mySwiper').height() - 144 + 'px'); //content padding + slide margin top(20px)
		if ($('.wrap').hasClass('white_board')){
			$('html').css('overflow', 'hidden');
		};
		var onResize = function(target) {
			$(document).ready(function(){
				$(target).css('height', $(window).height());
			});
		}
		onResize('.wrap');
		onResize('.wrap_content');
		onResize('.lnb_area');
		onResize('.snb_area');
  });

	/* input text focus */
	var inputTextFocus = function(inp){
		var $inp = $(inp).find('input');
		$inp.focus(function(){
			$(this).parent(inp).addClass('inp_focus');
		});
		$inp.blur(function(){
			$(this).parent(inp).removeClass('inp_focus');
		});
	};
	inputTextFocus('.inp_area');
	/* snb */

	$('.snb_area .btn_toggle').click(function(){
		$('.snb_area').removeClass('m_defult').toggleClass('m_type2');
	});

	/* 초대코드 복사 */
	$('.lnb_area .menu3 .m1').click(function(e){
		e.preventDefault();
		$('.pop_msg').fadeIn(400).delay(1000).fadeOut(400); //fade out after 4 seconds
	});

	$('.disable').click(function(){
		preventDefault();
	});

	/* selectbox */
	$('select:not(.ignore)').niceSelect();

	/* 기능 사용 여부 토글 */
	var toggleBtn = function(btn){
		$(btn).click(function(e){
			e.stopPropagation();
			$(this).toggleClass('on');
		});
	};
	toggleBtn('.member_list .mic');
	toggleBtn('.member_list .camera');
	toggleBtn('.menu2 li');	

	/* btn */
	var onChange = function(btn){
		$(btn).click(function(e){
			e.stopPropagation();
			$(this).addClass('on').siblings().removeClass('on');
		});
	};
	onChange('.menu1 li');

	/* 화면 선택 */
	$('.mySwiper .inner_box').click(function(e){
		e.stopPropagation();
		$(this).toggleClass('on').parents().siblings().find('.inner_box').removeClass('on');
		//토글 아닐 경우
		//$('.mySwiper .inner_box').removeClass('on');
		//$(this).addClass('on');
	});

	/* 탭메뉴 */
	var tabNav = $('.wrap_snb .tab_menu li');
	$(tabNav).click(function(){
		var tabView = $(tabNav).index(this);
		$('.wrap_snb .tab_menu li').removeClass('on');
		$(this).addClass('on');
		$('.wrap_snb .tab_cont>div').hide();
		$('.wrap_snb .tab_cont>div').eq(tabView).show();
	});

	var tabNav2 = $('.modal .tab_menu li');
	$(tabNav2).click(function(){
		var tabView = $(tabNav2).index(this);
		$('.modal .tab_menu li').removeClass('on');
		$(this).addClass('on');
		$('.modal .tab_cont>div').hide();
		$('.modal .tab_cont>div').eq(tabView).show();
	});
	
});

/* 팝업 열기 */
var modalOpen = function(modal, posi){
	var $modal = $(modal);
	$('body').addClass('modal_show');
	$modal.fadeIn(100, function(){
		$(this).addClass('on');
	});
	modalPosi(modal, posi);
	$(window).bind('orientationchange resize', function(){
		if ($modal.hasClass('on')){
			modalPosi(modal, posi);
		};
	});
	/* $modal.find('.modal_backdrop').click(function(){
		modalClose(modal);
	}); */
	$modal.find('.btn_close').click(function(){
		modalClose(modal);
	});
	$modal.find('.btn_gray').click(function(){
		modalClose(modal);
	});
};

/* 팝업 위치 */
var modalPosi = function(modal, posi) {
	var $modal = $(modal);
	var $dialog = $modal.find('.modal_dialog');
	var $backdrop = $modal.find('.modal_backdrop');
	var topGap = 0;
	if (posi === 'bottom'){
		topGap = $modal.outerHeight() - $dialog.outerHeight();		
	} else if (posi === 'middle') {
		topGap = ($modal.outerHeight() / 2 ) - ($dialog.outerHeight() / 2);
	} else {
		topGap = 0;
	};
	topGap >= 0 ? $dialog.css('top', topGap) : $dialog.css('top', 'auto');
	var winH = $(window).height();
	var dialogH = $dialog.outerHeight();
	dialogH > winH ? $backdrop.css('height', dialogH) : $backdrop.css('height', winH);
};

/* 팝업 닫기 */
var modalClose = function(modal){
	var $modal = $(modal);
	$('body').removeClass('modal_show');
	$modal.removeClass('on').fadeOut(300, function(){
		$(this).find('.modal_backdrop').css('height', '').next('.modal_dialog').css('top','');
	});
};