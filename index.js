// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

saturdayFun();

function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

mondayWork();

function wrapAdjective(flair = "*") {
    return function (noun = "special") {
        return `You are ${flair}${noun}${flair}!`
    }
}

wrapAdjective('*')("a dedicated programmer");
wrapAdjective('||')("a dedicated programmer");