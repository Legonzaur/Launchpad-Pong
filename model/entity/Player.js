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
        this.x = this.x + this.nextDirection;
    }

}

module.exports = Player;