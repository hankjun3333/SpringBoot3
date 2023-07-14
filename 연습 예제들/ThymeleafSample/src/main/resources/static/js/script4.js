jQuery(document).ready(function(){
	// alert('a');
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
});





































