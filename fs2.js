const { readFile, writeFile} = require('fs')
readFile('./contain/subfolder2/text2.txt','utf8', (err, result) => {
if (err) {
    console.log(err)
    return
}
const first = result;
readFile('./contain/subfolder2/text2.txt', 'utf8', 
(err, result) =>{
    if (err){
        console.log(err)
        return
    }
    const second = result
    writeFile('./contain/subfolder2/result-sync.txt', 
    `here is the result: ${first}, ${second}`,
    (err,result)=>{
        if(err) {
            console.log(err)
            return
        }
            console.log(result)

    })
    
}) 
})

