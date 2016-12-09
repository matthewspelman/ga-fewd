console.log("is this working?");

$("button#ct").on("click", function() {
	$("h1").text(ct["name"]);
	$("span.capital")

})


	var ct = {
	  name: "Connecticut",
	  capital: "Hartford",
	  governor: "Dannel Malloy",
	  usSenators: ["Richard Blumenthal", "Christopher S. Murphy"]
	};
	console.log(ct["capital"]["governor"]);

})


var ny = {
	  name: "New York",
	  capital: "Albany",
	  governor: "Andrew Cuomo",
	  usSenators: ["Chuck Schumer", "Kirsten Gillibrand"]
	};
