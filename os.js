// const { freemem } = require('node:os')
const os = require('os')

//info about current user
// const user = os.userInfo()
// console.log(user)
console.log(`hre is the system uptime ${os.uptime()} seconde`)
console.log(`another example ${os.type}`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS)