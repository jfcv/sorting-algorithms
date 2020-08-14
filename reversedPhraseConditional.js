/* 
Write a function that takes in a string of one or more words,
and returns the same string, but with all five or more letter words reversed 
*/

let phrase = "lora is beautiful & she is amazin"
let reversedPhrase = "";

phraseSplit = phrase.split(" ");

phraseSplit.forEach(word => {
    if(word.length >= 5) {
        for(let i=word.length - 1;i>=0;i--) {
            reversedPhrase += word[i];
        }        
    } else {
        for(let i=0;i<word.length;i++) {
            reversedPhrase += word[i];
        }          
    }
    reversedPhrase += " ";
});

console.log(phrase);
console.log('-------------------');
console.log(reversedPhrase);