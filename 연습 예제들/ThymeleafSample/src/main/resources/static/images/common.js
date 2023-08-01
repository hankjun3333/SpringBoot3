/*-------------------------------------------------
Author : SY, CHO
Create date : 2019. 08. 07.
-------------------------------------------------*/
$(function(){
	/* 최상단 통합검색 레이어 OPEN
	$('#inpSch1, #btnSch1').on('focusin click', function(e){
		$('#searchLayer').slideDown(100, function(){
			$("#topSearchQuery").css("IME-MODE", "active").focus();
		});
		e.preventDefault();
	});
	 */
	
	// HASH 버튼
	$('.hash').on('click', function(e){
		$(this.hash).slideDown(100);
		e.preventDefault();
	});
	$('.hashClose').on('click', function(e){
		$(this.hash).slideUp(100);
		e.preventDefault();
	});

	// HASH TOGGLE 버튼
	$('.hashToggle').on('click', function(e){
		if($(this).hasClass('share') == true){
			$(this).toggleClass('active');
		}
		if($(this).hasClass('mobileSearchBtn') == true){
			$(this).toggleClass('active');
		}
		$(this.hash).slideToggle();
		e.preventDefault();
	});

	// HASH TOGGLE Class버튼
	$('.hashToggleClass').on('click', function(e){
		$(this.hash).toggleClass('active');
		e.preventDefault();
	});
	
	/* 통합검색 탭 선택 변경
	$("#searchLayer .tab > li").on("click", function(){
		$(this).siblings().removeClass("active");
		$(this).addClass("active");
		 
		$("#topSearchQuery").css("IME-MODE", "active").focus();
	});*/
	
	
	$("#topSearchQuery").on("keypress", function(event){
		//console.log(event.keyCode);
		if(event.keyCode == "13"){
			fn_top_search();
		}
	});
	
	$(".topSearchList > li").on("click", function(){
		$('#topSearchWrap .hashToggleClass').html($(this).html()).trigger("click");
	});
	$(".topSearchList > li").on("keypress", function(){
		if(event.keyCode == "13"){
			$(this).click();
		}
	});
	
	/* 20200131 SY,CHo 웹접근성 인증 작업 추가 */
	// 통합검색 title 문구 토글
	$("#topSearchWrap .hashToggleClass").on('click', function(){
		//console.log($(this).attr('title'));
		($(this).attr('title') == '검색구분 선택 열기') ? $(this).attr('title', '검색구분 선택 닫기') : $(this).attr('title', '검색구분 선택 열기');
	});
	$(".mobileSearchBtn").on('click', function(){
		//console.log($(this).find('.sr-only').text());
		($(this).find('.sr-only').text() == '모바일검색창 열기') ? $(this).find('.sr-only').text('모바일검색창 닫기') : $(this).find('.sr-only').text('모바일검색창 열기');
	});
});

		
function fn_top_search()
{
	if($("#topSearchQuery").val() == "")
	{
		alert("검색어를 입력해주십시오 ");
		$("#topSearchQuery").focus();
		return;
	}
	
	if($("#topSearchQuery").val() == "")
	{
		alert("검색어를 입력해주십시오 ");
		$("#topSearchQuery").focus();
		return;
	}
	
	var id = $('#topSearchWrap .hashToggleClass').html();
	var form = document.topsrchForm;

	// 현행법령검색
	if(id == "현행법령")
	{
		var url = "http://www.law.go.kr/lsSc.do?menuId=1&subMenuId=15&query=" + encodeURIComponent($("#topSearchQuery").val())+"&dt=20201211";
	}
	// 별표서식검색
	else if(id == "별표서식")
	{
		var url = "http://www.law.go.kr/lsBylSc.do?menuId=9&query=" + encodeURIComponent($("#topSearchQuery").val())+"&dt=20201211";
	}
	// 통합검색
	else if(id == "통합검색")
	{
//		var url = "http://search.moleg.go.kr/cgi-bin/Search_MO.cgi?query=" + encodeURIComponent(form.topSearchQuery.value);
		var url = "https://search.moleg.go.kr/cgi-bin/Search_SE.cgi?query=" + encodeURIComponent($("#topSearchQuery").val());
	} 
	
	//openWin("http://www.law.go.kr/LSW/html/serverCheckPop.html", 'pop', '430', '510', 'yes');
	window.open(url);
	
}

//20201209 만족도 조사 팝업
function mainPopupNewPopup(link){

	var myCookie = getCookie("homeSurveyDone");
	var myCookie2 = getCookie("mainPopup");
    window.open(link, 'mainPopup', "top=50, left=10, width=650, height=600, scrollbars=yes, toolbar=no,location=no,directories=no,status=no,menubar=no,resizable=no");         
}