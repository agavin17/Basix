
//make the code work below by writing a function called logLetters that console logs each letter in the word "hogwaller"
var word = "hogwaller";
function logLetters() {
  console.log(word.split(""));
    var wordArray = word.split("");
         for (i = 0; i < wordArray.length; i++){
            console.log(wordArray[i]);
         }
}
logLetters('hogwaller')



