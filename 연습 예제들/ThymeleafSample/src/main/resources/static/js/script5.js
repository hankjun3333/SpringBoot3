
$(function(){
	

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
	});