const OS = require('os')
//const user = 
//console.log(user)
/*const aboutYou ={
    user: OS.userInfo(),
    fmem: OS.freemem(),
    tmem: OS.totalmem(),
    rel: OS.release()
}*/
const path =require('path')
//const path =require('path')
const filepath = path.join('/content','subfolder','text.txt')
console.log(filepath)
const base = path.basename(filepath)
console.log(base)
const absolute = path.resolve(__dirname, '/content','subfolder','text.txt')
console.log(absolute)