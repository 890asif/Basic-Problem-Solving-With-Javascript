function listKeys(obj){
    let keys = [];
    for(let key in obj)
        keys.push(key);

    return keys;
}
console.log(listKeys({ name: "Asif", age: 21, city: "Dhaka" }))