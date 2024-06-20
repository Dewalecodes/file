const{readFile, writeFile}=require('fs')
readFile('./content/theFtext.txt', 'utf8',(err, result)=>{
    if(err){
        console.log(err)
        return
    }
    const fText = result
    
 readFile('./content/theStext.txt', 'utf8',(err, result)=>{
        if(err){
            console.log(err)
            return
        }
    const sText = result
   
writeFile(
    './content/mywriter.txt',
    `im writing both ${fText} and ${sText}`,
    (err,result)=>{
    if(err){
        console.log(err)
        return
    }
    console.log('done')
}
) 
}) 
})
console.log('on to the next')

