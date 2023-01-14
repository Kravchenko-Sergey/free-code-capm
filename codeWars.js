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