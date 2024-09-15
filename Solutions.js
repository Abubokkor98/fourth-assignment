// PROBLEM 1
function calculateTax(income, expenses){

    const difference = income - expenses;
    const incomeTax = difference * .20;

    if(income <0 || expenses <0 || income < expenses){
        return "Invalid Input";
    }
    
    if( income >= expenses){
        return incomeTax;
    }
}

// PROBLEM 2
function sendNotification(email) {
    if (!email.includes("@")){
        return "Invalid Email"
    }

    const names = email.split("@");
    const userName = names[0];
    const domainName = names[1];
    const notification =  userName + " sent you an email from "+domainName;

    return notification;
}

// PROBLEM 3
function checkDigitsInName(name) {
    
    if (typeof name !=="string"){
        return "Invalid Input";
    }
    
    let digitCheck = name[0];
 for (let i = 0; i < name.length; i++){
    if (!isNaN(name[i])){
        return true;
    }
 }

 if (typeof name ==="string"){
    return false;
 }
}

// PROBLEM 4
function calculateFinalScore(obj) {

    if(typeof obj !== "object"){
        return 'Invalid Input'
    }

    let finalScore = obj.testScore + obj.schoolGrade;
    if (obj.isFFamily){
        finalScore = obj.testScore + obj.schoolGrade + 20;
    }

    if (obj.isFFamily && finalScore >= 80){
        return true;
    }
    else  if (!obj.isFFamily && finalScore >= 80){
        return true;
    }
    else  if (obj.isFFamily && finalScore < 80){
        return false;
    }
    else {
        return false;
    }
}

// PROBLEM 5
function  waitingTime(waitingTimes, serialNumber) {

    if (!Array.isArray(waitingTimes) || typeof serialNumber !== "number"){
        return "Invalid Input";
    }
    
    let sum = 0;
    for (let i = 0; i < waitingTimes.length; i++){
        sum = sum + waitingTimes[i];
    }
    
    const avgTime = sum / waitingTimes.length;
    const roundedAvgTime = Math.round(avgTime);
    const remainingPerson = serialNumber - waitingTimes.length -1;
    const myWaitingTime = roundedAvgTime * remainingPerson;

    return myWaitingTime;
}
