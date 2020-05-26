//const fs = require('fs')

let data = [];

let randDay = Math.floor(Math.random() * 31) + 1
let randMonth = Math.floor(Math.random() * 7) + 1


for (let month = 1; month < 8; month++) {
    for (let day = 1; day < 32; day++) {

        let x = Math.floor(Math.random() * 999) + 1
        for (let perDay = 1; perDay < 3; perDay++) {
            let randTakes = Math.floor(Math.random() * 25) + 1
            let a = {
                id: `505h${perDay}16${x}fy2${month}ewj1s3b${day}a`,
                name: `${x}-${month}-test`,
                type: 'monthly',
                dateAdded: `2020-${month}-${day}`,
                takesPerMonth: randTakes,
            }
            data.push(a)
        }
    }
}

console.dir(data.reverse(), { 'maxArrayLength': null });