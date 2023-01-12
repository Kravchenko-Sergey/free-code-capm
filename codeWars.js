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