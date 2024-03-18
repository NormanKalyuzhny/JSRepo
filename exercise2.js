            //Day of the week
function getDayOfWeek(){
    dayNumber = prompt('Enter the day of the week number');
    if (dayNumber == 1){
        alert("It's Monday");
        return dayNumber;
    }
    if (dayNumber == 2){
        alert("It's Thuesday");
        return dayNumber;
    }
    if (dayNumber == 3){
        alert("It's Wednesday my dudes!");
        return dayNumber;
    }
    if (dayNumber == 4){
        alert("It's Thursday");
        return dayNumber;
    }
    if (dayNumber == 5){
        alert("It's Friday");
        return dayNumber;
    }
    if (dayNumber == 6){
        alert("It's Saturday");
        return dayNumber;
    }
    if (dayNumber == 7){
        alert("It's Sunday");
        return dayNumber;
    }
    if (dayNumber <= 0 || dayNumber > 7 || dayNumber == String(dayNumber)){
        alert("Wrong day number");
        return getDayOfWeek();
    }
}