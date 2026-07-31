function averageOfArray(numbers){
    if(!Array.isArray(numbers) || numbers === 0){
        return "Invalid";
    }
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        sum += numbers[i]
    }
    return sum / numbers.length;
}
console.log(averageOfArray([2, 4, 6]))