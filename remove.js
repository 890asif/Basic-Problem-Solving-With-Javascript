//Remove first and last char
function removeChar(str){
    let result = str.slice(1, -1)
    return result;
}
console.log(removeChar("Bangladesh"))