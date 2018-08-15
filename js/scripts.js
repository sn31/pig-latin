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
  else if (!vowels.includes(input.charAt(0))) {
    var index = 0;
    var startOfVowel = 0;
    while (index < input.length) {
      if (vowels.includes(input.charAt(index))) {
        startOfVowel = index;
        break;
      }
      else {
        index++;
      }
    }
    var consonantSubStr = input.substring(0,startOfVowel);
    resultWord = input.substring(startOfVowel,input.length) + consonantSubStr +"ay";
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
  

});
