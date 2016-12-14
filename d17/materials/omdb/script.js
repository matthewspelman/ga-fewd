console.log("is this working?");

$("button").on("click", function () {
	var movie = $("input").val();
	$.getJSON("http://www.omdbapi.com/?t=" + movie, function(data) {
		//console.log(data);
		$("h1").text(data["Title"] + " ("+ data["Rated"] + ")");
		$("h4").text(data["Year"]);
		$("img.poster").attr("src", data["Poster"]);
		$("p").text(data["Plot"]);
	});
})