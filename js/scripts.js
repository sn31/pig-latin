var vowels = ["a","e","i","o","u"];

var vowelChecker = function(input){
  var resultWord = input;
  if(vowels.includes(input.charAt(0))) {
    resultWord += "way";
  }
  return resultWord;
}

$(document).ready(function(){
  $("#input").submit(function(event){
    event.preventDefault();

    var inputStr = $("#inputStr").val();
    $("#result").append(vowelChecker(inputStr));
  });
});
