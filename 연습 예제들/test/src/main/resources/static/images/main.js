/*-------------------------------------------------
Author : SY, CHO
Create date : 2019. 08. 07.
-------------------------------------------------*/
$(document).ready(function(){
	
	var visualList = null;
	
	var original = $("#visualList > li > a"); //수정
	
	$(window).bind('load resize', function(){
		$('#visualList > li').removeClass('MD');
		visualList = $('#visualList').bxSlider({
			speed: 1000,
			pause: 5000,
			auto: true,
			autoControls: true,
			autoControlsCombine: true,
			controls: true,
			pager: true,
			ariaLive: false,
			onSliderLoad: function(currentIndex){
				
				$('#visualList > li').eq(currentIndex+1).addClass('active');
				$("#visualList > li > a").prop("tabIndex","-1");	//수정
				$('#visual .bx-pager-item a').on('keydown', function( e ){
					 var no = $('#visual .bx-pager-item a').index(this);
					 if( e.keyCode == 13 ){
						  window.open(original.eq(no).attr('href')); //수정
					 }
				});
				
				initPagerFocusEvent();
				
			},
			onSlideAfter: function($slideElement, oldIndex, newIndex){
				$('#visualList > li').removeClass('active');
				$('#visualList > li').eq(newIndex+1).addClass('active');
				
				$("#visualList").children("li").each(function(){
					if($(this).attr("aria-hidden") == "false"){
						$(this).find("a").attr("tabIndex","0");

					}else{
						$(this).find("a").attr("tabIndex","-1");

					}

				});
			}
		});
	});
	
	function initPagerFocusEvent() {
		var $pagers = $('#visual .bx-pager').find('a');
		
		$('#visual .bx-pager').on('focus', 'a', function () {
			var idx = $pagers.index(this);
			
			visualList.goToSlide(idx);
		});
	}
	
	$('#visualList a').focusin(function () {

		visualList.stopAuto();

	});
/** 
// 메인비주얼
	var visualList = $('#visualList').bxSlider({
		speed: 1000,
		pause: 5000,
		auto: true,
		autoControls: true,
		autoControlsCombine: true,
		controls: true,
		pager: true,
		ariaLive: false,
		onSliderLoad: function(currentIndex){
			$('#visualList > li').eq(currentIndex+1).addClass('active');
		},
		onSlideAfter: function($slideElement, oldIndex, newIndex){
			$('#visualList > li').removeClass('active');
			$('#visualList > li').eq(newIndex+1).addClass('active');
		}
	});

	$(window).bind('load resize',function(){
		visualList.reloadSlider({
			speed: 1000,
			pause: 5000,
			auto: true,
			autoControls: true,
			autoControlsCombine: true,
			controls: true,
			pager: true,
			touchEnabled: false,
			ariaLive: false,
			onSliderLoad: function(currentIndex){
				$('#visualList > li').eq(currentIndex+1).addClass('active');
			},
			onSlideAfter: function($slideElement, oldIndex, newIndex){
				$('#visualList > li').removeClass('active');
				$('#visualList > li').eq(newIndex+1).addClass('active');
			}
		});
	});
	
$(document).ready(function(){
   // 메인비주얼
   var bxOptions = {
      speed: 1000,
      pause: 5000,
      auto: true,
      autoControls: true,
      autoControlsCombine: true,
      controls: true,
      //infiniteLoop: false,
      pager: true,
      ariaLive: false,
      onSliderLoad: addSliderFocusEventListener
   }
   
   var visualList = window.vl = $('#visualList').bxSlider(bxOptions);

   var isInit = false
   
   function addSliderFocusEventListener() {
	   if (isInit) {
		   return
	   }
	   
	   isInit = true
	   
	   var isAnim = false
	   
	   var $siblings = $('#visualList > li > a');

	   $siblings.on('keydown', function (e) {
		   if (isAnim && (e.key === 'Tab' || e.code === 'Tab')) {
			   e.preventDefault()
		   }
		   
	   })
	   
	   $siblings.on('focusin', function (e) {
		   if (isAnim) {
			   // tab 키 누를때 막기
			   
			   e.preventDefault()
			   return
		   }
		   
		   var $parent = $(this).parent()
		   
		   if ($parent.hasClass('bx-clone')) {
			   $parent.siblings('[aria-hidden=false]')[0].focus()
			   return
		   }
		   
		   isAnim = true
		   
		   visualList.stopAuto()
		   visualList.goToNextSlide()
		   
		   setTimeout(function () {
			   
			   isAnim = false
		   }, 1050)
	   })
   }
   
   
   $(window).bind('resize', function () {
	  visualList.reloadSlider(bxOptions)
   })
   */


   // 탭메뉴
   $('.tab > li > a', $("#container")).on('focusin mouseenter click', function(event){
      $(this).parent().addClass('active').siblings().removeClass('active');
      event.preventDefault();
   });
   
   // 소셜미디어
   var snsSlider = $('.tabList').bxSlider({
      speed: 1000,
      pause: 5000,
      slideMargin: 30,
      slideWidth: 250,
      maxSlides: 3,
      minSlides: 3,
      moveSlides: 1,
      controls: true,
      auto: false,
      autoControls: false,
      autoControlsCombine: false,
      pager: false,
      autoHover: true,
      ariaLive: false,
      touchEnabled: false,
      onSliderLoad: function(){
         $(".bx-clone").find("a").prop("tabIndex","-1");
      },
      onSlideAfter: function(){
         $('.tabList').children("li").each(function(){
            if($(this).attr("aria-hidden") == "false"){
               $(this).find("a").attr("tabIndex","0");
            }
         });
      }
   });
   /*
   $('.tabList a').focusin(function(){
      snsSlider.stopAuto();
   });
   */

   // 팝업존
   var original2 = $(".popupList > li > a"); 
   var popupList = $('.popupList').bxSlider({
      speed: 1000,
      pause: 5000,
      auto: true,
      autoControls: true,
      autoControlsCombine: true,
      controls: true,
      pager: false,
      //pagerType: 'short',
      //pagerShortSeparator: '<em>/</em>',
      ariaLive: false,
      autoHover: true,
      touchEnabled: false,
      onSliderLoad: function(currentIndex){
			$('.popupList > li').eq(currentIndex+1).addClass('active');
			$(".popupList > li > a").prop("tabIndex","-1");	//수정
			$('.popupWrap .bx-pager-item a').on('keydown', function( e ){
				 var no2 = $('.popupWrap .bx-pager-item a').index(this);
				 if( e.keyCode == 13 ){
					  window.open(original2.eq(no2).attr('href')); //수정
					  console.log(no2);
				 }
			});
			
			initPagerFocusEvent2();
			$('.slide-counter .current').text(currentIndex + 1); //슬라이드 갯수 출력
			
		},
		onSlideBefore: function ($slideElement, oldIndex, newIndex){ //슬라이드 갯수 출력
			$('.slide-counter .current').text(newIndex + 1); //슬라이드 갯수 출력
		}, //슬라이드 갯수 출력
		onSlideAfter: function($slideElement, oldIndex, newIndex){
			$('.popupList > li').removeClass('active');
			$('.popupList > li').eq(newIndex+1).addClass('active');
			$(".popupList").children("li").each(function(){

				if($(this).attr("aria-hidden") == "false"){

					$(this).find("a").attr("tabIndex","0");

				}else{

					$(this).find("a").attr("tabIndex","-1");

				}

			});
		}
   });
   
   $('.slide-counter .total').text(popupList.getSlideCount()); //슬라이드 갯수 출력
   
   function initPagerFocusEvent2() {
		var $pagers = $('.popupWrap .bx-pager').find('a');
		
		$('.popupWrap .bx-pager').on('focus', 'a', function () {
			var idx = $pagers.index(this);
			
			popupList.goToSlide(idx);
		});
	}
   
   $('.popupList a').focusin(function () {

      popupList.stopAuto();

   });

   // 배너슬라이드
   var _bannerSlide = $("#bannerSlide").slick({
      infinite: true,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: 5,
      slidesToScroll: 1,
      //accessibility: false,
      variableWidth: true,
      focusOnSelect: true,
      //centerMode: true,
      appendArrows : $('.bannerSlide-navigation'),
      responsive: [{
         breakpoint: 480,
         settings: {
            slidesToShow: 1,
            centerPadding: '0 50px',
            centerMode: true
         }
      }]
   });

   $('.slick-pause').on('click', function() {
      $("#bannerSlide").slick('slickPause');
      $('.slick-pause').hide();
      $('.slick-play').show();
   });
   $('.slick-play').on('click', function() {
      $("#bannerSlide").slick('slickPlay');
      $('.slick-pause').show();
      $('.slick-play').hide();
   });

   /* 20200115 SY,CHo 웹접근성 인증 작업 추가 */
   // [메뉴] 레이어 마지막 요소에서 포커스 아웃시 열린 메뉴 닫기
   /*$('#head_menu .sub07 .sublast').on('focusout', function(event){
      $('#header').removeClass('mainMenuOpen');
      $('#head_menu').find('.on').removeClass('on');
   });*/

   /* 20200217 SY,CHo 웹접근성 인증 작업 추가 */
   $('#bannerSlide').find('.slick-list').removeAttr('aria-live');
});