const convertCtoF = celsius => celsius * 9/5 + 32

convertCtoF(30)

////////////////////////////////////////////////////////////////////////////////////////////////////

const reverseString = str => [...str].reverse().join('')

reverseString("hello")

////////////////////////////////////////////////////////////////////////////////////////////////////

const factorialize = num => {
    let res = 1
    for(let i = 2; i <= num; i++) {
        res = res * i
    }
    return res
}

factorialize(5)

/////////////////////////////////////////////////////////////////////////////////////////////////////

function findLongestWordLength(str) {
    let res = 0
    const arr = str.split(' ')
    arr.forEach((word) => {
        if(word.length > res) res = word.length
    })
    return res
}

findLongestWordLength("The quick brown fox jumped over the lazy dog")

/////////////////////////////////////////////////////////////////////////////////////////////////////

const largestOfFour = arr => {
    const res = []
    for(let i = 0; i < arr.length; i++) {
        res.push(Math.max(...arr[i]))
    }
    return res
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])

//////////////////////////////////////////////////////////////////////////////////////////////////////

const confirmEnding = (str, target) => {
    const res = str.slice(str.length - target.length, str.length)
    return res === target ? true : false
}

confirmEnding("Bastian", "n")

//////////////////////////////////////////////////////////////////////////////////////////////////////