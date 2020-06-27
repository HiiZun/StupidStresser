// We will start multiple processes with child process to do more stress on the cpu :D 
const { spawn } = require('child_process');
const { cpus } = require("os")

console.warn("⚠⚠ | WARNING ! WE ARE NOT RESPONSABLE IF YOUR COMPUTER CRASH OR EXPLODE (no it's not possible haha) BUT DON'T USE THIS TO MALICIOUS ENDS | ⚠⚠")



while (true) {
    const ls = spawn('node', ['./stresser.js']);
    ls.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
      });
      
      ls.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
      });
      
      ls.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
      });
}

