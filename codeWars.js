const createArray = number => {
    const newArray = []
    for(let counter = 1; counter <= number; counter++){
        newArray.push(counter)
    }
    return newArray
}

//////////////////////////////////////////////////////////////////////////////////////

const laLigaGoals = 43
const championsLeagueGoals = 10
const copaDelReyGoals = 5

const totalGoals = laLigaGoals + championsLeagueGoals + copaDelReyGoals

///////////////////////////////////////////////////////////////////////////////////////

const reverse = string => string.split(' ').reverse().join(' ')

///////////////////////////////////////////////////////////////////////////////////////

const checkExam = (array1, array2) => {
    let res = 0
    for(let i = 0; i < array1.length; i++) {
        if(array1[i] === array2[i]) res += 4
        if(array1[i] !== array2[i] && array2[i] !== '') res -= 1
        if(array1[i] !== array2[i] && array2[i] === '') res += 0
    }
    return res < 0 ? 0 : res
}

//get character from ASCII Value

const getChar = c => String.fromCharCode(c)

//Grasshopper - Grade book

const getGrade = (s1, s2, s3) => {
    const res = (s1 + s2 + s3) / 3
    if(res >= 90 && res <= 100) return 'A'
    if(res >= 80 && res <= 90) return 'B'
    if(res >= 70 && res <= 80) return 'C'
    if(res >= 60 && res <= 70) return 'D'
    if(res >= 0 && res <= 60) return 'F'
}

//Lario and Muigi Pipe Problem

const pipeFix = numbers => {
    const res = []
    const sortNumbers = numbers.sort((a, b) => a - b)
    for(let i = sortNumbers[0]; i <= sortNumbers[sortNumbers.length - 1]; i++) {
        res.push(i)
    }
    return res
}

//Calculate BMI

const bmi = (weight, height) => {
    const bmi = weight / height ** 2
    if(bmi <= 18.5) return 'Underweight'
    if(bmi > 18.5 && bmi <= 25) return 'Normal'
    if(bmi > 25 && bmi <= 30) return 'Overweight'
    return 'Obese'
}

//Exclamation marks series #1: Remove an exclamation mark from the end of string

const remove = str => str.at(-1) === '!' ? str.slice(0, -1) : str

//Return the day

const whatday = num => {
    if(num === 1) return 'Sunday'
    if(num === 2) return 'Monday'
    if(num === 3) return 'Tuesday'
    if(num === 4) return 'Wednesday'
    if(num === 5) return 'Thursday'
    if(num === 6) return 'Friday'
    if(num === 7) return 'Saturday'
    return 'Wrong, please enter a number between 1 and 7'
}

//Is integer safe to use?

export function SafeInteger(n) {
    return Number.isSafeInteger(n)
}

//isReallyNaN

export function isReallyNaN (val) {
    return Number.isNaN(val)
}

//How many stairs will Suzuki climb in 20 years?

export function stairsIn20(stairs) {
    let oneYearTotal = 0

    stairs.forEach((day) => {
        const dayTotal = day.reduce((acc, curr) => acc + curr, 0)
        oneYearTotal += dayTotal
    })

    const twentyYearEstimate = oneYearTotal * 20

    return twentyYearEstimate
}

//L1: Bartender, drinks!

export function getDrinkByProfession(profession){
    profession = profession.toLowerCase();
    let drink = "";

    const switchObj = {
        jabroni: "Patron Tequila",
        "school counselor": "Anything with Alcohol",
        programmer: "Hipster Craft Beer",
        "bike gang member": "Moonshine",
        politician: "Your tax dollars",
        rapper: "Cristal",
    };

    const defaultDrink = "Beer";

    drink = switchObj[profession] || defaultDrink;

    return drink;
}

//Expressions Matter

export function expressionsMatter(a, b, c) {
    const expressions = [
        a + b + c,
        a * b * c,
        (a + b) * c,
        a * (b + c),
        a + b * c,
        a * b + c
    ];

    return Math.max(...expressions);
}

//Deodorant Evaporator

export function evaporator(content, evapPerDay, threshold) {
    let days = 0;
    let gas_left = 1.0;

    while (gas_left > threshold / 100) {
        gas_left -= gas_left * (evapPerDay / 100);
        days++;
    }

    return days;
}

// What's my golf score?

export function golfScoreCalculator(parList, scoreList) {
    let totalScore = 0;

    for (let i = 0; i < parList.length; i++) {
        const holePar = parseInt(parList[i]);
        const holeScore = parseInt(scoreList[i]);

        totalScore += holeScore - holePar;
    }

    return totalScore;
}

// Equal Sides Of An Array

export function findEvenIndex(arr)
{
    for (let i = 0; i < arr.length; i++) {
        const leftSum = arr.slice(0, i).reduce((sum, num) => sum + num, 0);
        const rightSum = arr.slice(i + 1).reduce((sum, num) => sum + num, 0);

        if (leftSum === rightSum) {
            return i;
        }
    }

    return -1;
}

// Build a pile of Cubes

export function findNb(m) {
    let n = 1;
    let volume = 0;

    while (volume < m) {
        volume += Math.pow(n, 3);
        n += 1;
    }

    if (volume === m) {
        return n - 1;
    } else {
        return -1;
    }
}