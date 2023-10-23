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

// Buying a car

export function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth) {
    let months = 0;
    let savings = 0;

    while (startPriceOld + savings < startPriceNew) {
        months += 1;
        if (months % 2 === 0) {
            percentLossByMonth += 0.5;
        }
        startPriceOld *= 1 - percentLossByMonth / 100;
        startPriceNew *= 1 - percentLossByMonth / 100;
        savings += savingperMonth;
    }

    return [months, Math.round(startPriceOld + savings - startPriceNew)];
}

// Array.diff

const arrayDiff = (a, b) => a.filter(value => !b.includes(value));

// Search for letters

export function change(string){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';

    for (let char of alphabet) {
        if (string.toLowerCase().includes(char)) {
            result += '1';
        } else {
            result += '0';
        }
    }

    return result;
}

// Tail Swap

export function tailSwap(arr) {

    let [firstStart, firstEnd] = arr[0].split(':');
    let [secondStart, secondEnd] = arr[1].split(':');

    return [`${firstStart}:${secondEnd}`, `${secondStart}:${firstEnd}`];
}

// Evens and Odds

export const evensAndOdds = n => n % 2 === 0 ? n.toString(2) : n.toString(16);

// Area of a Circle

export const circleArea = radius => {
    if (radius <= 0) {
        throw new Error("Radius must be positive!");
    }

    const area = Math.PI * Math.pow(radius, 2);
    return parseFloat(area.toFixed(2));
    return 0;
}

// Computer problem series #1: Fill the Hard Disk Drive

export function save(sizes, hd) {
    let totalSize = 0;
    let count = 0;

    for (let size of sizes) {
        if (totalSize + size <= hd) {
            totalSize += size;
            count++;
        } else {
            break;
        }
    }

    return count;
}

// Reverse or rotate?

export function revRot(s, sz) {
    if (sz <= 0 || s.length === 0 || sz > s.length) {
        return "";
    }

    const chunkCount = Math.floor(s.length / sz);
    let result = "";

    for (let i = 0; i < chunkCount; i++) {
        const chunk = s.slice(i * sz, (i + 1) * sz);

        if (isSumOfCubesDivisibleBy2(chunk)) {
            result += reverseString(chunk);
        } else {
            result += rotateLeft(chunk);
        }
    }

    return result;
}

function isSumOfCubesDivisibleBy2(str) {
    let sum = 0;
    for (const digit of str) {
        const num = parseInt(digit);
        sum += num * num * num;
    }
    return sum % 2 === 0;
}

function reverseString(str) {
    return str.split("").reverse().join("");
}

function rotateLeft(str) {
    return str.slice(1) + str[0];
}

// Incrementer

export function incrementer(nums) {
    if (nums.length === 0) {
        return [];
    }

    const result = [];

    for (let i = 0; i < nums.length; i++) {
        const incrementedDigit = (nums[i] + i + 1) % 10;
        result.push(incrementedDigit);
    }

    return result;
}

// A Rule of Divisibility by 7

export function seven(m) {
    let steps = 0;

    while (m >= 100) {
        const y = m % 10;
        const x = Math.floor(m / 10);
        m = x - 2 * y;
        steps++;
    }

    return [m, steps];
}

// Beginner Series #3 Sum of Numbers

export function getSum(a, b) {
    if (a > b) {
        [a, b] = [b, a];
    }

    const numberOfTerms = b - a + 1;
    const sum = (numberOfTerms * (a + b)) / 2;

    return sum;
}

// PI approximation

export function iterPi(epsilon) {
    let approximation = 0;
    let iterations = 0;
    let sign = 1;
    let divisor = 1;

    while (Math.abs(approximation * 4 - Math.PI) >= epsilon) {
        approximation += sign * (1 / divisor);
        sign *= -1;
        divisor += 2;
        iterations++;
    }

    return [iterations, parseFloat((approximation * 4).toFixed(10))];
}

// Summing a number's digits

export function sumDigits(n) {
    n = Math.abs(n);
    const numStr = n.toString();
    let digitSum = 0;
    for (let i = 0; i < numStr.length; i++) {
        digitSum += parseInt(numStr[i]);
    }

    return digitSum;
}

// Are they the "same"?

export function comp(a1, a2) {
    if (a1 === null || a2 === null) {
        return false;
    }

    const counts = {};

    for (const num of a1) {
        counts[num] = (counts[num] || 0) + 1;
    }

    for (const num of a2) {
        const sqrtNum = Math.sqrt(num);

        if (!Number.isInteger(sqrtNum) || !counts[sqrtNum]) {
            return false;
        }

        counts[sqrtNum]--;
    }

    return true;
}

// Prize Draw

export function rank(st, we, n) {
    if (st === "") {
        return "No participants";
    }

    const names = st.split(",");

    if (n > names.length) {
        return "Not enough participants";
    }

    const calculateWinningNumber = (name) => {
        const charCodeA = 'A'.charCodeAt(0);
        const nameUpperCase = name.toUpperCase();
        const nameLength = name.length;
        const charSum = nameUpperCase.split('').reduce((sum, char) => sum + char.charCodeAt(0) - charCodeA + 1, 0);
        return (charSum + nameLength) * we[names.indexOf(name)];
    };

    const sortedNames = names.sort((a, b) => {
        const diff = calculateWinningNumber(b) - calculateWinningNumber(a);
        if (diff !== 0) {
            return diff;
        } else {
            return a.localeCompare(b);
        }
    });

    return sortedNames[n - 1];
}

// Help Bob count letters and digits.

export function countLettersAndDigits(input) {
    let count = 0;
    for (const char of input) {
        if (/^[0-9a-zA-Z]+$/.test(char)) {
            count++;
        }
    }
    return count;
}

// Help the bookseller !

export const stockList = (listOfArt, listOfCat) => {
    if (listOfArt.length === 0 || listOfCat.length === 0) {
        return "";
    }

    const categoryTotals = {};

    for (const code of listOfArt) {
        const [codeStr, quantityStr] = code.split(" ");
        const category = codeStr[0];
        const quantity = parseInt(quantityStr, 10);

        if (categoryTotals[category]) {
            categoryTotals[category] += quantity;
        } else {
            categoryTotals[category] = quantity;
        }
    }

    const result = listOfCat.map((category) => {
        const total = categoryTotals[category] || 0;
        return `(${category} : ${total})`;
    });

    return result.join(" - ");
}

// Split The Bill

export function splitTheBill(x) {
    let totalSpent = 0;
    for (const person in x) {
        totalSpent += x[person];
    }
    const fairShare = totalSpent / Object.keys(x).length;
    const result = {};
    for (const person in x) {
        const amountOwed = x[person] - fairShare;
        result[person] = Math.round(amountOwed * 100) / 100;
    }
    return result;
}

// isReallyNaN

export function isReallyNaN (val) {
    return typeof val === 'number' && isNaN(val);
}