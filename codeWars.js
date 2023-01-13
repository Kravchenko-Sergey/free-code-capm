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

////////////////////////////////////////////////////////////////////////////////////////

const myString = "Hello, World!"
const myRegex = /Hello/
const result = myRegex.test(myString)

////////////////////////////////////////////////////////////////////////////////////////

let waldoIsHiding = "Somewhere Waldo is hiding in this text."
let waldoRegex = /Waldo/
let result = waldoRegex.test(waldoIsHiding)

////////////////////////////////////////////////////////////////////////////////////////

const petString = "James has a pet cat."
const petRegex = /dog|cat|bird|fish/
const result = petRegex.test(petString)

////////////////////////////////////////////////////////////////////////////////////////

const myString = "freeCodeCamp"
const fccRegex = /freeCodeCamp/i
const result = fccRegex.test(myString)

////////////////////////////////////////////////////////////////////////////////////////