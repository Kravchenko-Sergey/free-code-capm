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

const mutation = arr => {
    const el1 = arr[0].toLowerCase().split('')
    const el2 = arr[1].toLowerCase().split('')
    const res = []
    for(let i = 0; i < el1.length; i++) {
        for(let j = 0; j <= el1.length; j++) {
            if(el1[i] === el2[j]) res.push(el1[i])
        }
    }
    res.sort((a, b) => {
        if(a > b) return 1
        if(a < b) return -1
        return 0
    })
    el2.sort((a, b) => {
        if(a > b) return 1
        if(a < b) return -1
        return 0
    })
    const resSet = new Set(res)
    const el2Set = new Set(el2)
    return [...resSet].join('') === [...el2Set].join('') ? true : false
}

mutation(["Mary", "Aarmy"])

///////////////////////////////////////////////////////////////////////////////////////////////////////

const chunkArrayInGroups = (arr, size) => {
    const res = [];
    for (let i = 0; i < arr.length; i += size) {
        const chunk = arr.slice(i, i + size)
        res.push(chunk)
    }
    return res
}

chunkArrayInGroups(["a", "b", "c", "d"], 2)

////////////////////////////////////////////////////////////////////////////////////////////////////////

let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
}

const checkInventory = scannedItem => foods[scannedItem]

console.log(checkInventory("apples"))

/////////////////////////////////////////////////////////////////////////////////////////////////////////

let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
}

delete foods.oranges
delete foods.plums
delete foods.strawberries

console.log(foods)

/////////////////////////////////////////////////////////////////////////////////////////////////////////

let users = {
    Alan: {
        age: 27,
        online: true
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: true
    },
    Ryan: {
        age: 19,
        online: true
    }
}

const isEveryoneHere = userObj => {
    if('Alan' in userObj
        && 'Jeff' in userObj
        && 'Sarah' in userObj
        && 'Ryan' in userObj) {
        return true
    }
    return false
}

console.log(isEveryoneHere(users))

////////////////////////////////////////////////////////////////////////////////////////////////////

const users = {
    Alan: {
        online: false
    },
    Jeff: {
        online: true
    },
    Sarah: {
        online: false
    }
}

const countOnline = usersObj => {
    let countUsers = 0
    for(let user in usersObj) {
        if(usersObj[user].online === true) countUsers += 1
    }
    return countUsers
}

console.log(countOnline(users))

/////////////////////////////////////////////////////////////////////////////////////////////////////

let users = {
    Alan: {
        age: 27,
        online: false
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: false
    },
    Ryan: {
        age: 19,
        online: true
    }
}

const getArrayOfUsers = obj => Object.keys(obj)

console.log(getArrayOfUsers(users))

/////////////////////////////////////////////////////////////////////////////////////////////////////

let user = {
    name: 'Kenneth',
    age: 28,
    data: {
        username: 'kennethCodesAllDay',
        joinDate: 'March 26, 2016',
        organization: 'freeCodeCamp',
        friends: [
            'Sam',
            'Kira',
            'Tomo'
        ],
        location: {
            city: 'San Francisco',
            state: 'CA',
            country: 'USA'
        }
    }
}

const addFriend = (userObj, friend) => {
    userObj.data.friends.push(friend)
    return userObj.data.friends
}

console.log(addFriend(user, 'Pete'))

///////////////////////////////////////////////////////////////////////////////////////////////////

let myNestedArray = [
    [['unshift', false, 1, 2, 3, 'complex', 'nested'],['deep',['deeper',['deepest']]]],
    ['loop', 'shift', 6, 7, 1000, 'method'],
    ['concat', false, true, 'spread', 'array'],
    ['mutate', 1327.98, 'splice', 'slice', 'push'],
    ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
]

////////////////////////////////////////////////////////////////////////////////////////////////////

const sumAll = arr => {
    let res = 0
    for(let i = Math.min(...arr); i <= Math.max(...arr); i++) {
        res += i
    }
    return res
}

sumAll([1, 4])

////////////////////////////////////////////////////////////////////////////////////////////////////

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

let dog = {
    name: "Aflac",
    numLegs: 2
}

////////////////////////////////////////////////////////////////////////////////////////

let dog = {
    name: "Spot",
    numLegs: 4
}

console.log(dog.name)

/////////////////////////////////////////////////////////////////////////////////////////