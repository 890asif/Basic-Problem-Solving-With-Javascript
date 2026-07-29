//Find the second smallest number an array.

function secondSmallest(numbers){
    let smallest = Infinity;
    let secondSmallest = Infinity;
    for(let i = 0; i < numbers.length; i++ ){
        if(numbers[i] < smallest){
            secondSmallest = smallest;
            smallest = numbers[i];
        }
        else if(numbers[i] < secondSmallest && numbers[i] !== smallest){
            secondSmallest = numbers[i];
        }    
    }
    return secondSmallest;
}
console.log(secondSmallest([10, 5, 8, 20, 15]))