const {readFile, writeFile} = require('fs')
 
readFile ('./content/theFtext.txt', 'utf8',(err,result)=>{
if(err){
    console.log(err)
    return
}

else{
    console.log('result')
}
console.log('done with this');
 }

)
