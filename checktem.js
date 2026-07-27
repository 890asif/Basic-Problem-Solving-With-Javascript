// Checked Temparature
function checkTemparature(tem){
    let temp = tem;
    if(temp >= 35){
        return "Hot"
    }
 else if(temp <= 15){
        return "Cold"
    }
    else{
        return "Normal"
    }
}
console.log(checkTemparature(35))
console.log(checkTemparature(10))
console.log(checkTemparature(20))