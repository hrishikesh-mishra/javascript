/**
 * 
 * Issue with constructor index of array 
 * constructor count will not increase 
 * 
 */

word_count= [];

function bump_count(word) { 
    if (word_count[word]) {
        word_count[word] +=1 ;
    } else{ 
        word_count[word] =1; 
    }
}
var word = "hrishi"; 
bump_count(word);
word = "kumar"; 
bump_count(word);
word = "hrishi"; 
bump_count(word);
word = "hello"; 
bump_count(word);
word = "constructor"; 
bump_count(word);

word = "function"; 
bump_count(word);

console.log(bump_count);
