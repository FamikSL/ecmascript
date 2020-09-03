// new quotes
// const name = 'Vadim'
// const isVisiavle = () => Math.random() > 0.5
// const template = `
// ${isVisiavle() ? `<p>Blooo <br></p>`: ''}
// <h1>Hello, ${name}</h1>`
// console.log(template)

//methods
const str = ' Hello world '

console.log(str.trim().padStart(str.length + 5, '_').padEnd(str.length + 10, '_'))