jQuery(document).ready(function(){
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






















