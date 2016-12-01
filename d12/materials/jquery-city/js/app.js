// 1. Create .click() handlers for each of the thumbnails: #first, #second, #third, #fourth

console.log("is this working?");

$("img#first.thumb").on("click", function() {
  console.log("first clicked!");
});

$("img#second.thumb").on("click", function() {
  console.log("second clicked!");
});

$("img#third.thumb").on("click", function() {
  console.log("third clicked!");
});

$("img#fourth.thumb").on("click", function() {
  console.log("fourth clicked!");
});

.attr();
console.log();


// 2. Use .attr() to change the `src` attribute of #bigimage to correspond to image that was clicked
