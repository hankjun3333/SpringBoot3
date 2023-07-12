$(function(){
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
});
