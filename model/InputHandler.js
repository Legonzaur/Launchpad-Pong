class Table {
    constructor({player1, player2, ball}) {
      this.player1 = player1;
      this.player2 = player2;
      this.ball = ball;
    }
    handleKeyboard({key, pressure}){

    }
    handleLaunchpad({key, pressure}){
      if(pressure > 0){
        if(key%16 == 0){
          console.log(Math.floor(key/16))
          if(Math.floor(key/16) < this.player1.y-this.player1.sizeY){
            console.log("up")
            this.player1.moveUp()
          }else if(Math.floor(key/16) > this.player1.y+this.player1.sizeY){
            console.log("down")
            this.player1.moveDown()
          }
  
          
        }else if (((key%16)-7) == 0){
          if(Math.floor(key/16) < this.player2.y-this.player2.sizeY){
            this.player2.moveUp()
          }else if(Math.floor(key/16) > this.player2.y+this.player2.sizeY){
            this.player2.moveDown()
          }
        }
      }else{
        if(key%16 == 0){
          this.player1.stop()
        }else if ((key%16)-7 == 0){
          this.player2.stop()
        }
      }
      
    }
}

module.exports = Table;