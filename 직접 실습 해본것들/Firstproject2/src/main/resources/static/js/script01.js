$(function(){
	//form태그 클릭하면 placeholder 기능 사라졌다가 생기는 것
	$('.guide_text').each(function(){
		var guideText = this.defaultValue;
		/* 가이드 텍스트에 input 이름을 입력해주세요를 넣는당ㅋ */
		var element = $(this);
		
		element.focus(function(){
			if(element.val()===guideText){
				element.val(''); /* 얘는 비워라 */
				element.removeClass('guide');
			}; 
		});
		element.blur(function(){
			if(element.val()===''){
				element.val(guideText);
				element.addClass('guide');
			};
		});
		if(element.val()===guideText){
			element.addClass('guide');
		};
	});
		//탭메뉴 부분
		$('.left_box2').each(function(){
		var topDiv = $(this);
		var anchors = topDiv.find('ul.title li a');
		var panelDivs = topDiv.find('.left_text_box');
		var lastAnchor; //이게 포인트
		var lastPanel;
		anchors.show();
		lastAnchor = anchors.filter('.on');
		lastPanel = $(lastAnchor.attr('href'));
		panelDivs.hide(); //처음에 감추고 해당하는것만 보이게
		
		lastPanel.show();
		
		anchors.hover(function(event){
			event.preventDefault(); //e = event를 의미하고 클릭하는놈을 prevent 저지한닷! html 디폴트 이벤트를 저지함
			var currentAnchor = $(this); //앵커중에서 클릭한놈
			var currentPanel = $(currentAnchor.attr('href'));
			
			lastAnchor.removeClass('on');
			currentAnchor.addClass('on');
			lastPanel.hide();
			currentPanel.show();
			lastAnchor = currentAnchor;
			lastPanel = currentPanel; 
			
		});
	});
	
	//이미지 스위칭 기능
	var interval = 1000;
    $('.slideshow').each(function(){
		var container = $(this);
		function switchImg(){
			var imgs = container.find('img');
			var first = imgs.eq(0);
			var second = imgs.eq(1);
			first.fadeOut().appendTo(container);
			second.fadeIn();
		}
		setInterval(switchImg, interval);
	});
	
	// 말풍선효과 마우스 올렸을때 따라다니는 말풍선
	
	var balloon = $('<div class="balloon"></div>').appendTo('body');
	function updateBalloonPosition(x, y) {
		balloon.css({left: x+15, top: y+15});
	}
	$('.showBalloon').each(function(){
		var element = $(this);
		var text = element.attr('title');
		element.attr('title','');
		////안에 문자열로받아서 text는 아직 제이커리객체ㄴㄴ
		element.hover(
			function(event){
				balloon.text(text);
				updateBalloonPosition(event.pageX, event.pageY);
				balloon.show();
			},
			function(){
				balloon.hide();
				
			}
		);
		element.mousemove(function(event){ //1px이라도 마우스 움직엿을때
			updateBalloonPosition(event.pageX, event.pageY);
		}); // 호버와 같은 이벤트메소드 펑션너야겟지 ㅋ 좌표가 필요하겟지 ㅋ
	});	

	//날씨 json
$.getJSON('http://api.openweathermap.org/data/2.5/weather?id=1835848&appid=df14f781bdb3b050057c448b596cbaac&units=metric',function(data){
			
			//alert(data.list[0].main.temp_min);
			var $minTemp = data.main.temp_min +' 도 ';
			var $maxTemp = data.main.temp_max +' 도 ';
			var $cTemp = data.main.temp +' 도 ';
			var $now = new Date(Date.now());
			var month = $now.getMonth()+1;
			var $cDate = $now.getFullYear() + '년' + month + '월' + $now.getDate()+'일'+$now.getHours()+'시 ' + $now.getMinutes() + '분';
			var $wIcon = data.weather[0].icon;
			
			$('.clowtemp').append($minTemp);
			$('.chightemp').append($maxTemp);
			$('.cTemp').append($cTemp);
			$('h2').prepend($cDate);
			$('.cicon').append('<img src="http://openweathermap.org/img/wn/'+$wIcon+'.png"/>');
		});	
	
	// 이미지 슬라이더 기능
	var panel_width = $('.left_box1>img').width();
	var panel_height = $('.left_box1>img').height();
	var size = $('.control_button').size();
	$('.slider_text').css('left',-300).each(function(index){
		$(this).attr('data-index',index);
	});
	$('.control_button').each(function(index){
		$(this).attr('data-index',index);
	}).click(function(){
		var index = $(this).attr('data-index');
		//alert(index);
		moveSlider(index);
	});
	
	function moveSlider(index){
		randomNumber = index;
		var willMoveLeft;
		var willMoveTop;
		 if(index==0){
			willMoveLeft = -(0*544);
			
		}else if(index==1){
			willMoveLeft = -(1*544);
						
		}else if(index==2){
			willMoveLeft = -(2*544);
			
		}else if(index==3){
			willMoveLeft = -(3*544);
					
		} else if(index==4){
			willMoveLeft = -(4*544);
		} else {
			willMoveLeft = -(5*544);
		};
		
		
		$('.img_panel').animate({left:willMoveLeft},'4000');
		$('.img_panel').animate({top:willMoveTop},'4000');
		$('.control_button[data-index='+index+']').addClass('active');
		$('.control_button[data-index!='+index+']').removeClass('active');
		$('.slider_text[data-index='+index+']').show().animate({left:20},500);
		$('.slider_text[data-index!='+index+']').hide().animate({left:-300},500);
	};
	var randomNumber = Math.round(Math.random()*(size-1));
	moveSlider(randomNumber);
	
	var setIntervalId; //알리야스 변수 명 지으라는뜻
	function timer(){
		setIntervalId = setInterval(function(){ //이름없는 형식
			randomNumber++; // size는 갯수 6이면 0으로 초기화시켜야지
			if(randomNumber==size){randomNumber=0;}
			//moveSlider(randomNumber); 이것도되고
			$('.control_button').eq(randomNumber).trigger('click');
			
		},3000);
	}
	timer();
	$('.left_box1').hover(
		function(){
				clearInterval(setIntervalId);
		},
		function(){
			timer();
		}
	);
	$('.left').click(function(){
		
		randomNumber--;
		if(randomNumber<0){randomNumber=size-1};
		$('.control_button').eq(randomNumber).trigger('click');
		
	});
	$('.right').click(function(){
		
		randomNumber++;
		if(randomNumber==size){randomNumber=0};
		$('.control_button').eq(randomNumber).trigger('click');
		
	});
		
});
