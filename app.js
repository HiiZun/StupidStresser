// We will start multiple processes with child process to do more stress on the cpu :D 
var exec = require('child_process').exec;
var state = 'node ./stresser.js'
var conf = require("./config.json")
var os = require("os")
console.warn("⚠⚠ | WARNING ! WE ARE NOT RESPONSABLE IF YOUR COMPUTER CRASH OR EXPLODE (no it's not possible haha) BUT DON'T USE THIS TO MALICIOUS ENDS | ⚠⚠")

var processestodo

if(conf.processes){
  if(isNaN(conf.processes)){
    if(conf.processes === "auto"){
      processestodo = os.cpus.length + 1
    } else {
      processestodo = os.cpus.length + 1
    }
  } else {
    if(conf.processes <= 0){
      processestodo = os.cpus.length + 1
    } else {
      processestodo = conf.processes
    }
  }
} else {
  processestodo = os.cpus.length + 1

}







for(var i = 0; i < processestodo ; i++){

    (function(i){
      var child = exec(state);



      // Listen if the process closed
      child.on('close', function(exit_code) {
          console.log('Closed before stop: Closing code: ', exit_code);
          if(require("os").platform() !== "win32"){
          exec("killall node")
          } else {
            exec("taskkill /F /IM nodes")
          }
      });
  })(i)

}

