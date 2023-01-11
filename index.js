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

const repeatStringNumTimes = (str, num) => {
    const res = []
    for(let i = 0; i < num; i++) {
        res.push(str)
    }
    return res.join('')
}

repeatStringNumTimes("abc", 3)

///////////////////////////////////////////////////////////////////////////////////////////////////////

const truncateString = (str, num) => {
    if(str.length > num) {
        const str2 = str.slice(0, num)
        return `${str2}...`
    }
    return str
}

truncateString("A-tisket a-tasket A green and yellow basket", 8)

///////////////////////////////////////////////////////////////////////////////////////////////////////

const findElement = (arr, func) => {
    const res = []
    arr.forEach(num => {
        if(func(num)) res.push(num)
    })
    return res[0]
}

findElement([1, 2, 3, 4], num => num % 2 === 0)

///////////////////////////////////////////////////////////////////////////////////////////////////////

const booWho = bool => bool === true || bool === false ? true : false

booWho(null)

///////////////////////////////////////////////////////////////////////////////////////////////////////

const titleCase = str => {
    return str.split(' ').map(word => {
        return `${word.slice(0, 1).toUpperCase()}${word.slice(1).toLowerCase()}`
    }).join(' ')
}

titleCase("I'm a little tea pot")

///////////////////////////////////////////////////////////////////////////////////////////////////////

const frankenSplice = (arr1, arr2, n) => {
    const arr1Copy = JSON.parse(JSON.stringify(arr1))
    const arr2Copy = JSON.parse(JSON.stringify(arr2))
    arr2Copy.splice(n, 0, ...arr1Copy)
    return arr2Copy
}

frankenSplice([1, 2, 3], [4, 5, 6], 1)

////////////////////////////////////////////////////////////////////////////////////////////////////////

const bouncer = arr => arr.filter(el =>  el ? true : false)

bouncer([7, "ate", "", false, 9])

////////////////////////////////////////////////////////////////////////////////////////////////////////

const getIndexToIns = (arr, num) => {
    arr.push(num)
    arr.sort((a, b) => a - b)
    return arr.findIndex(el => el === num)
}

getIndexToIns([40, 60], 50)

/////////////////////////////////////////////////////////////////////////////////////////////////////////