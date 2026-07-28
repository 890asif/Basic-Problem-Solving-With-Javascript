//Find the shorted word a sentence
function findShortWord(sentence){
    let word = sentence.split(" ");
    let sortest = word[0];
    for(i = 1; i < word.length; i++){
        if(word[i].length < sortest.length)
        sortest = word[i];
    }
    return sortest;
}
console.log(findShortWord("Javascript is a fun language"))
console.log(findShortWord("Bangladesh is beautyfull country"))