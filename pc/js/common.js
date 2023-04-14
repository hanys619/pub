$(document).ready(function(){
  /* contents size */
	$('.content').css('height', $(window).height() - $('.mySwiper').height() - 144 + 'px'); //content padding + slide margin top(20px)
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
	var tabNav = $('.tab_menu li');
	$(tabNav).click(function(){
		var tabView = $(tabNav).index(this);
		$('.tab_menu li').removeClass('on');
		$(this).addClass('on');
		$('.tab_cont>div').hide();
		$('.tab_cont>div').eq(tabView).show();
	});
});