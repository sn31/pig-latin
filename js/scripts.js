var vowels;

var yChecker = function (input) {
  if (input.charAt(0) === "y" || input.charAt(0) === "Y") {
    vowels = ["a","e","i","o","u", "A", "E", "I", "O", "U"];
  }
  else {
    vowels = ["a","e","i","o","u", "y", "A", "E", "I", "O", "U", "Y"];
  }
}
var letterChecker = function (inputStr) {
  if (inputStr.match(/^[a-zA-Z\s]+$/)) {
    return true;
  }
  else {
    return false;
  }
}

var moveConsonants = function (input) {
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
  consonantSubStr = input.substring(0, startOfVowel);
  resultWord = input.substring(startOfVowel, input.length) + consonantSubStr + "ay";
  return resultWord;
}

var vowelChecker = function (input) {
  var resultWord = input;
  var consonantSubStr = "";
  yChecker(input);
  
  if (vowels.includes(input.charAt(0))) {
    resultWord += "way";
  }
  
  else if (input.substring(0,2) ===  "qu" || input.substring(0,2) ===  "QU" || input.substring(0,2) ===  "Qu" || input.substring(0,2) ===  "qU") {
    consonantSubStr = input.substring(0, 2);
    resultWord = input.substring(2, input.length) + consonantSubStr + "ay";
  }

  else if (!vowels.includes(input.charAt(0))) {
    return moveConsonants(input);
  }
  return resultWord;
}

$(document).ready(function () {
  $("#input").submit(function (event) {
    event.preventDefault();
    $("#result").empty();
    var inputStr = $("#inputStr").val().trim();
    if (!letterChecker(inputStr)) { alert("Please enter a valid sentence!") }
    var input = inputStr.split(" ");
    for (var i = 0; i < input.length; i++) {
      $("#result").append(" " + vowelChecker(input[i]));
      
    }
    
  });


});
