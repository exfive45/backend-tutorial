// GLOBALS -NO WINDOW !!!

// __dirname - path to current directory
// __filename - file name
// require    - function to use modules (commjs)
// module     - info about current module (file)
// process    - info about env where the program is being execute;

console.log(__dirname)
console.log(__filename)
setInterval(() => {
  console.log(`hello world`);  
}, 1000);