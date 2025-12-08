//conditional statements

let age = 23
if (age>=18){
    console.log("You are eligible to vote")
    if (age>=60){
        console.log("You are old voter")
    }
    else if (age<=25){
        console.log("you are beginner in voting")
    }
}
else{
    console.log("You can't vote child")
}


//switch cas3

let day = 3
switch (day){
    case 1:
        console.log("sunday")
        break
    case 2:
        console.log("Monday")
        break
    case 3:
        console.log("Tuesday")
        break
    default:
        console.log("enter a correct day")
}


