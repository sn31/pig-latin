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
    $("#result").empty();
    var inputStr = $("#inputStr").val();
    var input = inputStr.split(" ");
    for (var i=0; i<input.length;i++) {
      $("#result").append(" "+vowelChecker(input[i]));
    }

  });
});
