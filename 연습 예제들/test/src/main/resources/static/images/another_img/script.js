$(function(){

	// secT 탭 메뉴

	var tab = $('.sectionTButtons > div');
	var content = $('.tabContent > div');
	content.hide().eq(0).show();
	tab.click(function(){

		var tg = $(this);
		var i = tg.index();

		tab.removeClass('active');
		tg.addClass('active');

		content.css('display','none');
		content.eq(i).css('display','block');

		return false;

	});

	// secM 탭 메뉴

	var tabM = $('.sectionMButtons > ul > li');
	var contentM = $('.sectionMTabContent > div');
	contentM.hide().eq(0).show();
	tabM.click(function(){
		
		var tgM = $(this);
		var iM = tgM.index();
		
		tabM.removeClass('activeM');
		tgM.addClass('activeM');
		
		contentM.css('display','none');
		contentM.eq(iM).css('display','block');
		
		return false;
		
	});
	
	// 투뎁스 메뉴
	$('.menuTit').on('mouseenter',function(){
		$(this).find('.twoInner').stop(true,true).slideDown()
	});
	$('.menuTit').on('mouseleave',function(){
		$(this).find('.twoInner').stop(false,false).slideUp()
	});

	// 메인 슬라이드
	
	var banner = $('.sectionTMIImageSlide > ul > li');
	var current = 0;
	
	function ImgSlide(){
		setIntervalId = setInterval(function(){
			var prev = banner.eq(current);
			move(prev,'0%','-100%',1,0);
			current++
			if(current>=banner.size()){current=0;}
			var next = banner.eq(current);
			move(next,'100%','0%',0,1);
		},3000);
	};
	
	ImgSlide();
		
	function move(moveTG,start,end,op1,op2){
		moveTG.css({left: start,opacity: op1}).stop().animate({left:end,opacity:op2},1000);
	};
	
	// 메인 슬라이드 이미지 한장씩 넘기기
	
	$('.left').click(function(){
		var prev = banner.eq(current);
		move(prev,'0%','100%',1,0);
		current--
		if(current<0){current=2;}
		var next = banner.eq(current);
		move(next,'-100%','0%',0,1);
	});
	$('.right').click(function(){
		var prev = banner.eq(current);
		move(prev,'0%','-100%',1,0);
		current++
		if(current>2){current=0;}
		var next = banner.eq(current);
		move(next,'100%','0%',0,1);
	});
	
	// 메인 슬라이드 호버시 멈추기
	
	$('.sectionTMIImageSlide').hover(
		function(){
			clearInterval(setIntervalId);
		},
		function(){
			ImgSlide();
		}
	);
		
	//----------------------- 이런 방식도 존재 -----------------------
	/* $('.left').click(function(){
		randomNumber--;
		if(randomNumber<0){randomNumber=$('.control_button').size()-1}
		moveSlider(randomNumber);
		//$('.control_button').eq(randomNumber).trigger('click');
	});
	$('.right').click(function(){
		randomNumber++;
		if(randomNumber==$('.control_button').size()){randomNumber=0}
		$('.control_button').eq(randomNumber).trigger('click');
	}); */
	//------------------------------------------------------------
	
	// popup 메뉴

	$('.pCloseBtn').click(function(){

		$('.pop').fadeOut(500);

	});

	//배너 이미지 

	var interval = 2000;
	$('.sectionBCHBslideShow').each(function(){
		var timer;
		var container = $(this);
		function switchImg(){
			
			var anchors = container.find('a');
			var first = anchors.eq(0);
			var second = anchors.eq(1);
			first.fadeOut().appendTo(container);
			second.fadeIn();
		};
		function startTimer(){
			timer = setInterval(switchImg, interval);
		};
		function stopTimer(){
			clearInterval(timer);
		};

		container.find('a').hover(stopTimer,startTimer);
		startTimer();
	});
	
	//호버 이미지

	$('.rollOver').each(function(){
		var a = $(this);
		var img = a.find('img');

		var src_off = img.attr('src');
		var src_on = src_off.replace('ico','yco');

		$('<img />').attr('src', src_on);

		a.bind('mouseenter',function(){
			img.attr('src',src_on);
		});

		a.bind('mouseleave',function(){
			img.attr('src',src_off);
		});
	});
	
	// 툴팁
	
	var toolTipMessage = $('<div class="toolTipMessage"></div>').appendTo('body');
	
	function updatetoolTipMessagePosition (x,y){
		toolTipMessage.css({left: x+30, top: y+20});
	};
	
	function showtoolTipMessage(){
		toolTipMessage.stop().css('opacity',0).show().animate({opacity: 1}, 800);
	};
	function hidetoolTipMessage(){
		toolTipMessage.stop().animate({opacity: 0},300,function(){toolTipMessage.hide()});
	};

	$('.toolTip').each(function(){
		var element = $(this);
		var text = element.attr('title');
		element.attr('title','');
		
		element.hover(
		function(event){
			toolTipMessage.text(text);
			updatetoolTipMessagePosition(event.pageX,event.pageY);
			showtoolTipMessage();
		},
		function(){
			hidetoolTipMessage();
		}
	);
	
		element.mousemove(function(event){
			updatetoolTipMessagePosition(event.pageX,event.pageY);
		});
	
	});
	
	// 퀵메뉴
	
	sidebar = true;
	$('.quickToggle').click(function(){
		if(sidebar){
			$(this).addClass('quickOpen');
			$(this).stop(true,true).animate({'margin-right':'-146px'},400);
			$('.quickMenu').stop(true,true).animate({'margin-right':'-146px'},400,function(){sidebar=false;});
		}else{
			$(this).removeClass('quickOpen');
			$(this).stop(true,true).animate({'margin-right':'0px'},400);
			$('.quickMenu').stop(true,true).animate({'margin-right':'0px'},400,function(){sidebar=true;});
		};
	});
	
	//날씨

	$.getJSON(
		'http://api.openweathermap.org/data/2.5/weather?id=1835848&APPID=5dc852d32e75acabc67d95456445f6f7&units=metric'
		,function(data){
			var $minTemp = data.main.temp_min;
			var $maxTemp = data.main.temp_max;
			var $cTemp = data.main.temp;
			var $humidity = data.main.humidity;
			var $now = new Date(Date.now());
			var month = $now.getMonth()+1;
			var $cDate = $now.getFullYear() + '년 ' + month + '월 ' + $now.getDate()+'일 '+$now.getHours()+'시 '+ $now.getMinutes()+'분 ';
			var $wIcon = data.weather[0].icon;
			
			$('.clowtemp').append($minTemp);
			$('.ctemp').append($cTemp);
			$('.chightemp').append($maxTemp);
			$('.cweather').append($cDate);
			$('.humidity').append($humidity);
			$('.cicon').append('<img src="http://openweathermap.org/img/wn/'+$wIcon+'.png"/>')
	});
	
});