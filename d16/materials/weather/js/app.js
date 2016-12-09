
$("button").on("click", function() {
	$("text").data();
	$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=New%20York,NY&units=imperial&apikey=dfa6d8e9deab2a0cb7d4f15dc45b971d", function(data) {
	+ "city" + "state" + "&";
	  console.log(data);
});