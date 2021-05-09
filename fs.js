const {readFileSync, writeFileSync} = require ('fs');
// const fs = require('fs');
// console.log(fs.readFileSync)


const first = readFileSync('./contain/subfolder2/text2.txt', 'utf8')
const second = readFileSync('./contain/subfulder/text.txt', 'utf8')
writeFileSync('./contain/subfolder2/result-sync.txt', `here is the result: ${first}, ${second}`,
 {flag:'a'}
)
