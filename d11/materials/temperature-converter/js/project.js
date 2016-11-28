console.log("is this working?");

$("button").on("click", function() {
	var x = $("input#temperature").val();
	console.log(x);

$("#converted").text(x * 1.8 + 32);
	console.log(converted);
});
