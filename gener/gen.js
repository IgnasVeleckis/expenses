//const fs = require('fs')

let data = [];
for (let i = 0; i < 60; i++) {
    let randTakes = Math.floor(Math.random() * 20)
    let randDay = Math.floor(Math.random() * 30)
    let a = {

        id: `505h16${i}fy2ewj1kpus3ba`,
        name: `${i}-test`,
        type: 'monthly',
        dateAdded: `2020-05-${randDay}`,
        takesPerMonth: randTakes,

    }
    data.push(a)
}

console.log(data)





//let expenses = JSON.stringify(data)
//fs.writeFileSync('expenses.json', expenses);

console.log()