//product of digit
function productOfDigit(num){
    let str = num.toString();
    let total = 1;
    for(let i = 0; i < str.length; i++ ){
    let digit = parseInt(str[i])
    total = total * digit;
}
return total
}
console.log(productOfDigit(4040))