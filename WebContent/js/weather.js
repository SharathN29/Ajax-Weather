var jQueryScript = document.createElement('script');
jQueryScript.setAttribute('src',
		'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js');
document.head.appendChild(jQueryScript);


function getWeather() {
	console.log("Testing!");

	var zipcode = document.getElementById("zip").value;

	if(zipcode != '') {
		$.ajax({
			url: 'https://api.openweathermap.org/data/2.5/weather?zip=' + zipcode +',us&appid=7730d133653739fa949dec8ac025885b',
			type: "GET",
			dataType: "json",
			success: function(data) {
					$("#content").empty();
					$("#content").html('City Name : ' + data.name +'<br>Min temp : ' + data.main.temp_min +'<br>Max temp : ' + data.main.temp_max +'<br>');		
			},
			error: function(x) {
				var error_message =JSON.parse(x.responseText);
				$("#content").html(error_message.message);
			}
		
		});
	}
}