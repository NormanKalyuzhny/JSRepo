let x = 1;
let y = 0;
function numberCount(count){
    if(x % 3 !== 0){
        y = y + x; 
    }
    
    if(count == 99){
        console.log("Sum of numbers not divisible by 3 is: " + y)
    } else {
        x++;  
        return numberCount(count+1);
    }
}
numberCount(0)