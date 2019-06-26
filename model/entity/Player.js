const Element = require('./element')
class Player extends Element{
    constructor(map) {
        super()
        this.sizeY = 1
        this.sizeX = 0
        this.nextDirection = 0;
    }
    moveUp(){
        this.nextDirection = -1;
    }
    moveDown(){
        this.nextDirection = 1;
    }
    update(){
        if(this.y + this.nextDirection>0 && this.y + this.nextDirection<map.sizey-1){
                this.y = this.y + this.nextDirection;            
        }
        
    }
    stop(){
        this.nextDirection = 0
    }

}

module.exports = Player;