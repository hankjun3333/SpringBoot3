 $(function(){
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
 }); 