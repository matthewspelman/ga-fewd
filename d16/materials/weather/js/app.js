
$("button").on("click", function() {
	var city = $("input").val();
	$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&apikey=dfa6d8e9deab2a0cb7d4f15dc45b971d", function(data) {
		$("h4 .temperature").text(data["main"]["temp"]);
		$("img.icon").attr("src", "http://openweathermap.org/img/w/" + data["weather"][0]["icon"] +".png");
	});
});