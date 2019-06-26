class Table {
    constructor({player1, player2, ball}) {
      this.player1 = player1;
      this.player2 = player2;
      this.ball = ball;
    }
    handleKeyboard({key, pressure}){

    }
    handleLaunchpad({key, pressure}){
      if(key%16 == 0){
        if(Math.floor(key/16) < player1.y-sizey){
          player1.moveUp()
        }else if(Math.floor(key/16) > player1.y+sizey){
          player1.moveDown()
        }

        
      }else if ((key-7) == 0){
        if(Math.floor(key/16) < player2.y-sizey){
          player2.moveUp()
        }else if(Math.floor(key/16) > player2.y+sizey){
          player2.moveDown()
        }
      }
    }
}

module.exports = Table;