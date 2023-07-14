//1차메뉴 슬라이딩
$(function() {
	// ul class 명 지정
	$("#left_menu_top > li > ul").each(function(){
		var cls = $(this).attr("class");
		$(this).removeClass("depth02");
		$(this).addClass("depth02");
	});
	
	//대메뉴 2depth 메뉴를 첫번째 3depth 메뉴로 설정
	//var _loc_2dp_target = $("div#content .location > ul > li:eq(2) > a");
	var _loc_2dp_target = $("div#content .location > span:eq(2) > a");
	$(".lnb-detail").each(function(){
		
		var _3dp_first = $(this).find("li:first > a");
		var _2dp_obj = $(this).parent().parent();
		var _2dp_target = _2dp_obj.find("a:first"); 

		var _2dp_id = _2dp_target.attr("href");
		_2dp_id = _2dp_id.replace(/\/menu.es\?mid=a1/gi, "");
		
		// 자체 메뉴를 가지고 있는 2depth 메뉴 제외
		if(_2dp_id == "" || ("0108000000".indexOf(_2dp_id) < 0))
		{
			_2dp_target.attr("href", _3dp_first.attr("href"));
			if(_3dp_first.attr("target") == "_blank")
				_2dp_target.attr("target", "_blank").attr("title", "새창으로 이동");
			else
				_2dp_target.attr("target", "");

		}
		
		
		//if($("nav.location").length > 0)
		if($("p.location").length > 0)
		{
			// 메뉴로케이션 처리 추가 
			// 2019.11-26 bhhan
			// 위의 처리에서 하위 첫메뉴로 링크가 바뀐 대메뉴와 location메뉴에 걸려있는 메뉴의 mid를 비교해서
			// 앞 6자리가 같은 것을 찾아  location메뉴의 링크를 변경한다.
			var navhref = _loc_2dp_target.attr("href");
			navhref = navhref.substr(navhref.indexOf("mid=") + 4, 6);
			
			var cpyhref = _2dp_target.attr("href");
			cpyhref = cpyhref.substr(cpyhref.indexOf("mid=") + 4, 6);
			
			//console.log(navhref + " " + cpyhref);
			if(navhref == cpyhref)
				_loc_2dp_target.attr("href", _3dp_first.attr("href"));
		}
	});
	
	//대메뉴 1depth 메뉴를 첫번째 2depth 메뉴로 설정
	var _loc_1dp_target = $("div#content .location > span:eq(1) > a");
	$(".submenu").each(function(){
		
		var _2dp_first = $(this).find("li:first > a");
		var _1dp_obj = $(this).parent();
		var _1dp_target = _1dp_obj.find("a:first"); 
		
		_1dp_target.attr("href", _2dp_first.attr("href"));
		
		if(_2dp_first.attr("target") == "_blank")
			_1dp_target.attr("target", "_blank").attr("title", "새창으로 이동");
		else
			_1dp_target.attr("target", "");

		//if($("nav.location").length > 0)
		if($("p.location").length > 0)
		{
			// 메뉴로케이션 처리 추가 
			// 2019.11-26 bhhan
			// 위의 처리에서 하위 첫메뉴로 링크가 바뀐 대메뉴와 location메뉴에 걸려있는 메뉴의 mid를 비교해서
			// 앞 4자리가 같은 것을 찾아  location메뉴의 링크를 변경한다.
			var navhref = _loc_1dp_target.attr("href");
			navhref = navhref.substr(navhref.indexOf("mid=") + 4, 4);
			
			var cpyhref = _1dp_target.attr("href");
			cpyhref = cpyhref.substr(cpyhref.indexOf("mid=") + 4, 4);
			
			if(navhref == cpyhref)
				_loc_1dp_target.attr("href", _2dp_first.attr("href"));
		}
	});
	
	//사이드메뉴 2depth 메뉴를 첫번째 3depth 메뉴로 설정
	$("ul", $("#left_menu_top")).each(function(){
		
		var _3dp_first = $(this).find("li:first > a");
		var _2dp_obj = $(this).parent();
		var _2dp_target = _2dp_obj.find("a:first");
		
		var _2dp_id = _2dp_obj.attr("id");

		// 자체 메뉴를 가지고 있는 2depth 메뉴 제외
		if("li0108000000".indexOf(_2dp_id) < 0)
		{
			_2dp_target.attr("href", _3dp_first.attr("href"));
			
			if(_3dp_first.attr("target") == "_blank")
				_2dp_target.attr("target", "_blank").attr("title", "새창으로 이동");
			else
				_2dp_target.attr("target", "");
		}
		
		// 주요기능과 사업 / 업무보고 제외
		if("li0702000000|li0703000000".indexOf(_2dp_id) < 0)
			_2dp_obj.addClass("child");
	});

	// 2차 메뉴 새창 아이콘 표시
	$("ul.depth01 > li > a, .submenu > ul > li > a", $("#snb, #head_menu")).each(function(){
		if($(this).attr("target") == "_blank")
		{
			$(this).append("<i class=\"xi-external-link\"></i>");
		}
		else
			$(this).find("i").remove();

	});

	// 3차 메뉴 새창 아이콘 표시
	//$("ul.depth02 > li > a, ul.lnb-detail > li > a", $("#snb, #head_menu")).each(function(){
	$("ul.depth02 > li > a", $("#snb")).each(function(){
		if($(this).attr("target") == "_blank")
		{
			$(this).append("<i class=\"xi-external-link\"></i>");
		}
		else
			$(this).find("i").remove();
			
	});
	
	/////////////////////////////////////////////
	// 연도별 업무보고 관련 내용 추가
	// 2019.10.30 bhhan
	// 업무보고 하위 메뉴 감추기
	$("ul[class^='ul0703000000']").hide();
	var top_ul = $("a[href*='a10703']", $("#head_menu")).parent();
	top_ul.find("ul").hide();
	
	// 업무보고 하위 메뉴 감추기
	var mid = $("input[name='mid_tmp']").val();
	if(mid != null && mid.indexOf("a10703") >= 0)
	{
		$("ul[class^='ul0703000000'] > li > a").each(function(){
			$("#sel_move_report").append("<option value='" + $(this).attr("href") + "'>" + $(this).html() + "</option>");
		});
		
		var opt = $("#sel_move_report > option[value*='" + mid + "']");
		opt.prop("selected", true);
		optval = opt.html();
		optval = optval.replace(/년 업무보고/gi, "");
		$("#emReportYr").html(optval);
		
		$("nav.location > ul > li:last > a, .content_info > h3.title").html("업무보고");

	}
	/////////////////////////////////////////////
	
	/////////////////////////////////////////////
	// 주요기능과 사업
	// 2019.10.30 bhhan
	// 탭메뉴 생성
	$("ul[class^='ul0702000000']").hide();
	var top_ul = $("a[href*='a10702']", $("#head_menu")).parent();
	top_ul.find("ul").hide();
	
	// 업무보고 하위 메뉴 감추기
	var mid = $("input[name='mid']").val();
	if(mid != null && mid.indexOf("a10702") >= 0)
	{
		var pTabmenu = "<div class=\"cont_tab col4 row3\">"; 
			pTabmenu += "<ul id=\"depth4_menu_ul\" class=\"tab-ul\">";
		
		var cCnt = 1;
		$("ul[class^='ul0702000000'] > li > a").each(function(){
			//$("#sel_move_report").append("<option value='" + $(this).attr("href") + "'>" + $(this).html() + "</option>");
			//console.log($(this).attr("href"));
			var liobj = "";
			if(location.href.indexOf($(this).attr("href")) >= 0)
				liobj = "<li class=\"t"+ (cCnt++)+ " on\"><a href=\"" + $(this).attr("href") + "\"><span>" + $(this).html() + "</span></a></li>";
			else
				liobj = "<li class=\"t"+ (cCnt++)+ "\"><a href=\"" + $(this).attr("href") + "\"><span>" + $(this).html() + "</span></a></li>";
			
			pTabmenu += liobj;
			
		});
		pTabmenu += "</ul></div><br/><br/>";

		//$("#content_detail").prepend(pTabmenu);
		
	}
	/////////////////////////////////////////////
	
	
	//$("#satisfy-wrap").show();

	// 윈도우 감지 (구간별 메뉴 초기화)
	$(window).on('load resize', function()
	{
		if ( $(window).width() > 1025 )
		{
			setTimeout(function()
			{
				// 전체메뉴는 열려있고 서브메뉴는 닫혀있고
				if ($('#header').hasClass('fullMenuOpen') && $('#gnb').find('.submenu').css('display') == 'none')				
				{
					$('#header').removeClass('fullMenuOpen');

					$('#gnb').find('li').removeClass('on');
					$('#gnb').find('a').removeClass('on');
					$('#gnb').find('.submenu').hide();
				}

				// 서브메뉴만 열려있는
				if ( $('#gnb').find('a.active.on').length > 0 )
				{
					$('#gnb').find('a').removeClass('on');
					$('#gnb').find('.submenu').hide();
				}

			}, 100);
		}
		else
		{
			if ( ! isMobile.apple.phone && ! isMobile.android.phone) {
				setTimeout(function()
				{
					// 전체메뉴 열린 채로 모바일로 변경될 때
					$('#gnb').find('.submenu').each(function() {
						if($(this).css('display') == 'block' && $('#header').hasClass('fullMenuOpen')) {
							$('#header').removeClass('fullMenuOpen');	
						}
					});
				}, 100);
			}
		}
	});

	// 주메뉴 활성화
	$('#gnb #head_menu').find('a').on
	({
		mouseenter	: function()
		{
			gnbPC($(this));
		},
		focusin		: function()
		{
			gnbPC($(this));
		},
		click		: function()
		{
			// 모바일
			if ( $(window).width() < 1025 )
			{
				// 서브메뉴 있을 때
				if ( $(this).next('.submenu').length > 0 )
				{
					// 활성화
					if ( $(this).hasClass('on') == false )
					{
						$(this).addClass('on');
						$(this).parent('li').siblings('li').find('a').removeClass('on');

						$(this).next('.submenu').slideDown();
						$(this).parent('li').siblings('li').find('.submenu').slideUp();
					}
					// 닫기
					else
					{
						$(this).removeClass('on');
						$(this).next('.submenu').slideUp();
					}

					return false;
				}
			}
		}
	});	

	// 주메뉴 비활성화
	$('#gnb').on('mouseleave', function()
	{
		if ( $(window).width() > 1025 )
		{
			// 전체메뉴가 아닐 때
			if ( $('#header').hasClass('fullMenuOpen') == false )
			{
				$('#header').removeClass('mainMenuOpen');
		
				$(this).find('li').removeClass('on');
				$(this).find('.submenu').slideUp();
			}
		}
	});
	

	//텝메뉴 focus 처리
/*	function winClose(a,b,c){ //(닫을창,removeClass명,이동할 위치)
		$(a).hide();
		$(b).removeClass("on");
		$(c).focus();
	}

	$('#gnb').bind({
        focusin: function(d) {
            try {
                clearTimeout(b)
            } catch (d) {}
        },
        focusout: function(d) {
            b = setTimeout(function() {	
                $('#header').removeClass('mainMenuOpen');
		
				$('#gnb').find('li').removeClass('on');
				$('#gnb').find('.submenu').slideUp();
                c = true
            }, 20)
        }
    });	*/

	// 전체메뉴
	var closeToggle = false;
	$('#header').find('.Allmn-close').on('click', function()
	{
		if(closeToggle == false){
			$('#gnb').find('.sr-only').text('전체메뉴 닫기');
			closeToggle = true;
			$('#container').attr('aria-hidden', 'true');
			$('#footer').attr('aria-hidden', 'true');
		}else{
			$('#gnb').find('.sr-only').text('전체메뉴 열기');
			closeToggle = false;
			$('#container').attr('aria-hidden', 'false');
			$('#footer').attr('aria-hidden', 'false');
		}
		// PC에서 오버할 때 쓰는 클래스 삭제
		$('#header').removeClass('mainMenuOpen');

		if ( $('#header').hasClass('fullMenuOpen') == false )
		{
			$('#header').addClass('fullMenuOpen');

			if ( $(window).width() > 1025 )
			{
				$('#gnb').find('.submenu').show();
			}
			else
			{
				$('#gnb').find('a').removeClass('on');
				$('#gnb').find('.submenu').hide();
			}
		}
		else
		{
			$('#header').removeClass('fullMenuOpen');
			$('#gnb').find('.submenu').hide();
		}

		return false;
	});
	



	/* 20200204 SY,CHo 모바일접근성 인증 작업 추가 */
	// [모바일 전체메뉴] 1뎁스 메뉴 클릭[터치]시 2뎁스 열림/닫힘 표시[권고]
	$('#head_menu > li > a').on('click', function(event){
		if($(window).width() < 1024){
			($(this).hasClass('on') == true) ? $(this).attr('title', '펼침') : $(this).attr('title', '접힘')
		}
	});

	/**
	 * 22년 정보공개 설문조사 팝업
	 * 2022년 12월 21일 이후에는 삭제
	 */
	var mid = $("input[name='mid_tmp']").val(); 
	if(mid != null && mid.length > 0 && mid.indexOf("0104020000") >= 0)
	{

		var myCookie = getCookie("eventPopup");
		if (myCookie == "done") {
			  return;
		}	
		
		var sdate= new Date("2022/12/01 00:00:00");
		var edate= new Date("2022/12/21 23:59:59");
		if(Date.now() >= sdate && Date.now() <= edate){
			window.open("/html/a1/01/popup.jsp", "_blank", "toolbar=no,scrollbars=yes,resizable=no,top=500,left=500,width=600,height=450");
		}
	}
	
	
	//상단메뉴 focus 처리
	function winClose(a,b,c){ //(닫을창,removeClass명,이동할 위치)
		$(a).hide();
		$(b).removeClass("on");
		$(c).focus();
	}

	$('#gnb').bind({
        focusin: function(d) {
            try {
                clearTimeout(b)
            } catch (d) {}
        },
        focusout: function(d) {
            b = setTimeout(function() {	
                if ( $('#header').hasClass('mainMenuOpen') == true ) //대메뉴 포거스 아웃 시 실행
					{
						$('#header').removeClass('mainMenuOpen');
						$('#gnb').find('li').removeClass('on');
						$('#gnb').find('.submenu').slideUp();
					}
					else if ( $('#header').hasClass('fullMenuOpen') == true ) //전체메뉴 포거스 아웃 시 실행
					{
						$('#gnb').find('.sr-only').text('전체메뉴 열기');
						closeToggle = false;
						$('#header').removeClass('fullMenuOpen');
						$('#gnb').find('.submenu').hide();

					}
                c = true
            }, 20)
        }
    });


});




function gnbPC($this)
{
	if ( $(window).width() > 1025 )
	{
		// 전체메뉴가 아닐 때
		if ( $('#header').hasClass('fullMenuOpen') == false )
		{
			$('#header').addClass('mainMenuOpen');

			// 대메뉴 활성화 아닐 때
			if ( $this.parent('li').hasClass('on') == false )
			{
				$this.parent('li').addClass('on');
				$this.parent('li').siblings('li').removeClass('on');

				// 서브메뉴 있을 때
				if ( $this.next('.submenu').length > 0 )
				{
					$this.next('.submenu').slideDown();
					$this.parent('li').siblings('li').find('.submenu').slideUp();
				}
			}
		}
	}
}

function fn_move_yrreport()
{
	var href = $("#sel_move_report").val();
	if(href == "")
	{
		alert("연도를 선택해주십시오.");
	}
	else {
		location.href = href;
	}
}



//웹접근성을 위한 사이트맵 새로 제작 
$(function() {
	$('.siteBtn').click(function(){
		$('.siteArea').css('display', 'block').attr('tabindex','0').focus();
		$('.gnb').css('display', 'none');
		$('#wrap').css('height', $('.siteMenu').height()+260);
	});

	$('.siteCloseBtn').click(function(){
		$('.siteArea').css('display', 'none').removeAttr('tabindex');
		$('.siteBtn').focus();
		$('.gnb').css('display', 'block');
		$('#wrap').css('height', 'auto');
	});

	//$('.siteBtn').focusin(function(){
		//$('.siteArea').css('display', 'block');
		//$('.gnb').css('display', 'none');
		//$('#wrap').css('height', $('.siteArea').height()+120);
	//});

	$('.siteCloseBtn').focusout(function() {
	  $('.siteArea').css('display', 'none');
	  $('.gnb').css('display', 'block');
	  $('#wrap').css('height', 'auto');
	  
	});
	

	$( window ).resize(function() {
	  if ( $('#wrap').width() < 1024)
		{
			$('.siteArea').css('display', 'none');
			$('.gnb').css('display', 'block');
		}
	});
	
});