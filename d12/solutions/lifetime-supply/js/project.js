$("button").on("click", function() {
  var currentAge = $("#age").val();
  var endAge = $("#max-age").val();
  var favItems = $("#item").val();
  var numPerDay = $("#num-per-day").val();

  var yearsTillEnd = endAge - currentAge;
  var daysTillEnd = yearsTillEnd * 365;
  var drinksTillEnd = daysTillEnd * numPerDay;

  $("#solution").text(drinksTillEnd);
  $("#drink").text(favItems);
});