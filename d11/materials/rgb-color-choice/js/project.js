//Define the actions when the user clicks the change the color button
console.log("Color Prompt");

$("a#color-button").on("click", function() {
  var red = $("input#red").val();
  console.log(red);
  var green = $("input#green").val();
  console.log(green);
  var blue = $("input#blue").val();
  console.log(blue);

  var rgb = "rgb(" + red + "," + green + "," + blue + ")";
  console.log(rgb);

$("#wrapper").css(background-color", rgb);
$("p#colorful-text").text(rgb);
});

//make sure that the bottom rgb reflects the updated data values
//inputted by the user.