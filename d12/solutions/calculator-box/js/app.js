var count = 0;

$("#a10").on("click", function() {
  count = count + 10;
  $("#out").text(count);
});

$("#a20").on("click", function() {
  count = count + 20;
  $("#out").text(count);
});

$("#a30").on("click", function() {
  count = count + 30;
  $("#out").text(count);
});

$("#n10").on("click", function() {
  count = count - 10;
  $("#out").text(count);
});

$("#n20").on("click", function() {
  count = count - 20;
  $("#out").text(count);
});

$("#n30").on("click", function() {
  count = count - 30;
  $("#out").text(count);
});

$("#red").on("click", function() {
  $("#out").css("background-color", "red");
});

$("#blue").on("click", function() {
  $("#out").css("background-color", "blue");
});

$("#out").on("click", function() {
  count = 0;
  $("#out").text(0);
  $("#out").css("background-color", "#fff");
});