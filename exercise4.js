            //Guess the number game
let rndNumber
let getNumber
let n = 3 // number of attempts
function guessNumber(n) {

    getNumber = prompt(`Enter number from 1 to 10, you have ${n} attempts`);
    console.log("Your number is: " + getNumber); 
    
    if (getNumber <= 0 || getNumber != Number(getNumber)){
        alert("Enter correct number")
        return guessNumber(n)
    };

    rndNumber = Math.floor(Math.random() * 10) + 1;
    console.log("RND number is: "+ rndNumber);

    if (getNumber < rndNumber){alert("Your number is less")};
    if (getNumber > rndNumber){alert("Your number is higher")};
    
    if (getNumber == rndNumber){
        return console.warn("We have a Winner!");
    } else if (n == 1){
        console.log("No attempts left");
    } else {
        return guessNumber(n - 1);
    };
  };

guessNumber(n);