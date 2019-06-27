const { ipcMain } = require('electron')
const InputHandler = require("./InputHandler")

class Model {
    constructor({player1, player2, ball}) {
      this.player1 = player1;
      this.player2 = player2;
      this.ball = ball;
      this.map = map
      this.inputHandler = new InputHandler({"player1" : player1, "player2" : player2, "ball" : ball})
      
      ipcMain.on('asynchronous-message', (event, arg) => {
        
          //event.reply('asynchronous-reply', 'pong')
          //console.log("async")
        
      })

      ipcMain.on('synchronous-message', (event, arg) => {
        //console.log("synchro")
        if(arg == "getMap"){
          event.returnValue = this.map
        }else{
          this.inputHandler.handleLaunchpad({"key" : arg[1], "pressure" : arg[2]})
          event.returnValue = ""
        }
        
      })
    }
      
}

module.exports = Model;