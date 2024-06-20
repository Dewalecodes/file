const {readFileSync, writeFileSync} = require('fs')
const fText = readFileSync('./content/theFtext.txt','utf8')
const sText = readFileSync('./content/theStext.txt','utf8')
console.log(fText,sText)

let writer=writeFileSync(
    './content/writer.txt',
    `this writers merges first text:${fText} with second text:${sText}`,
   // {flag: 'a'}
)
writer = readFileSync('./content/writer.txt', 'utf8')
console.log(writer)