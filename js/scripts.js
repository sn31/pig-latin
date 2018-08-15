var vowels = ["a","e","i","o","u","y"];

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
  var consonantSubStr ="";
  if (input.charAt(0) === "y" || "Y") {
    vowels = ["a","e","i","o","u"];
  }
  if(vowels.includes(input.charAt(0))) {
    resultWord += "way";
  }
  else if (input.substring(0,2) ===  "qu" || "QU" || "Qu" || "qU") {
    consonantSubStr = input.substring(0,2);
    resultWord = input.substring(2,input.length) +consonantSubStr+"ay";
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
    console.log(startOfVowel); //1
    consonantSubStr = input.substring(0,startOfVowel);
    resultWord = input.substring(startOfVowel,input.length) + consonantSubStr +"ay";
    console.log(resultWord); //esyay
  }

  return resultWord;
}

$(document).ready(function(){
  $("#input").submit(function(event){
    event.preventDefault();

    $("#result").empty();
    var inputStr = $("#inputStr").val().trim();
    if (!letterChecker(inputStr)) { alert ("Please enter a valid sentence!")}
    var input = inputStr.split(" ");
    for (var i=0; i<input.length;i++) {
      $("#result").append(" "+vowelChecker(input[i]));
    }

  });


});
