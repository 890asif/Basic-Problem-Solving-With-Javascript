//Reverse Number
function reverseNumber(num){
 let  numbers = num.toString();
   let reverse = numbers.split('').reverse().join('');
    return reverse;
}
console.log(reverseNumber(1234))
console.log(reverseNumber(2345))