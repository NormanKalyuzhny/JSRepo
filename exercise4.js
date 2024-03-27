function sumIntegersInString(string){
    let storeInt = "";
    let storeResult = 0;
for(let i = 0; i < string.length; i++){
    if (!isNaN(parseInt(string[i])) || string[i] === "-"){
        storeInt += string[i];
    } else if (storeInt !== ""){
        storeResult += Number(storeInt);
        storeInt = "";      
    }
}
if (storeInt !== ""){
    storeResult += Number(storeInt)
}
console.log("Sum in string is: " + storeResult)
}

sumIntegersInString("123.45px-67 8.9") // input string here