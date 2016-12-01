console.log("is this working?");

$("button").on("click", function() {
	var CurrentAge = $("input#age").val();
	console.log(CurrentAge);
	var MaxAge = $("input#max-age").val();
	console.log(MaxAge);
	var FavDrink = $("select#item").val();
	console.log(FavDrink);
	var Calculate = (MaxAge - CurrentAge) * 365;
	console.log(Calculate);
	var number = Calculate.toLocaleString();
	console.log(number);
	$("#solution").text(number);
	$("#drink").text(FavDrink);
});

//input number for current age
//input number for how long you plan to live until
//user dropdown selection & store record in console
//input # then upon clicking on button activate function
//(death age - current age) * 365//