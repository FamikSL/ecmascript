// 1 with key-word function
// const readline = require('readline')
//
// function greet(name) {
//     console.log('Hello, ' + name)
// }
//
// //2 with =>
//
// const sum = (a, b) => {
//     return a + b
// }
//
// // console.log(sum(10, 12))
//
// 3 simple one line def
// const cube = a => a ** 3
//
// console.log(cube(4))

// let second = 0
// setInterval(() => {
//     console.log(second++)
//
// }, 1000)

function log() {
    console.log(this)
}

log('aaa')

const arrowLog = () => console.log(this)
const person = {
    name: 'Elena',
    age: '18',
    log: log,
    arrowLog: arrowLog,
    delayLog: function () {
        const self = this
        setTimeout(() => {
            console.log(this.name + ' ' + this.age)
        }, 500)
    }

}

person.delayLog()