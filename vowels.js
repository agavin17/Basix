//use tdd to write a javascript function to count the vowels in a string.

var countVowels = function(string){
    return string.match(/[aeiou]/gi).length;
        }
    
module.exports = countVowels;
