//Odds Number up to N
function getOddNumner(number){
    let odds = [];
    for(let i = 1; i <= number; i++){
        if(i % 2 !== 0){
            odds.push(i);
        }
    }
    return odds;
}
console.log("Odds Number Is:",getOddNumner(10))