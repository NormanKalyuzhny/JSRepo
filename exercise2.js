let numberAmount=0;
let evenAmount = 0;
let oddAmount = 0;

function checkProbabilityTheory(count){
    let minRange = 100;
    let maxRange = 1000;
    numberAmount++;

    rndNumber = Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange;

    if (rndNumber%2 == 0){
        evenAmount++;
        console.log("RND number is: "+ rndNumber + " even")
    } else {
        oddAmount++;
        console.log("RND number is: "+ rndNumber + " not even")
    }

    if (count == 1) {
        console.log("The End" + '\n')
    } else {
        return checkProbabilityTheory(count - 1)
    }  

    console.log("Amount of numbers is: " + numberAmount)
    console.log("Amount of even is: " + evenAmount)
    console.log("Amount of odd is: " + oddAmount + '\n')
    console.log("Percent of even numbers is: " + (evenAmount*100/numberAmount).toFixed(2) + "%")
    console.log("Percent of odd numbers is: " + (oddAmount*100/numberAmount).toFixed(2) + "%")
    console.log("Percent of even to odd numbers is: " + ((evenAmount / oddAmount )*100).toFixed(2) + "%")   
}

checkProbabilityTheory(132) // count of RND numbers