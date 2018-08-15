var vowels = ["a","e","i","o","u"];

var letterChecker = function (inputStr) {
  if (inputStr.match(/^[a-zA-Z\s]+$/)) {
    return true;
  }
  else {
    return false;
  }
}
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
    if (!letterChecker(inputStr)) { alert ("Please enter a valid sentence!")}
    var input = inputStr.split(" ");
    for (var i=0; i<input.length;i++) {
      $("#result").append(" "+vowelChecker(input[i]));
    }

  });
  console.log(letterChecker("hi my name is sss"));

});
