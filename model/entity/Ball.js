const Element = require('./element')
class Ball extends Element{
    constructor() {
        super()
        this.inertiaY=-1;
        this.inertiaX=0;
        
    }
    update(){
        console.log(this.inertiaY)
        let player1 = map.elements.filter(element => element.name == "player1")
        let player2 = map.elements.filter(element => element.name == "player2")
        if(this.intertiaY < 0 ){
            if(this.y+this.intertiaY > player1.y-sizey && this.y+this.intertiaY < player1.y+sizey){
                this.intertiaY = -this.intertiaY
            }
        }else if(this.intertiaY > 0){

        }

    }


}

module.exports = Ball;