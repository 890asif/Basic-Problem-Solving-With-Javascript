function keepEvenNumbers(numbers){
    let result = [];
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] % 2 === 0){
            result.push(numbers[i]);
        }    
    }
    return result;
}
console.log(keepEvenNumbers([3, -5, 8, -1, 0]))