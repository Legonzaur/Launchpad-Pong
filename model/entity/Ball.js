const Element = require('./element')
class Ball extends Element{
    constructor() {
        super()
        this.inertiaY=0;
        this.inertiaX=0;
        
    }
    update(){
        
        let player1 = map.elements.filter(element => element.name == "player1")[0]
        let player2 = map.elements.filter(element => element.name == "player2")[0]
        console.log(this.y+this.inertiaY > player2.y-player2.sizeY-1)
        if(this.inertiaX < 0 && this.inertiaX+this.x <= 0){
            if(this.y+this.inertiaY > player1.y-player1.sizeY-1 && this.y+this.inertiaY < player1.y+player1.sizeY+1){
                this.inertiaX = -this.inertiaX
                console.log("invert")
            }
        }else if(this.inertiaX > 0 && this.inertiaX+this.x >= this.map.sizex-1){
            if(this.y+this.inertiaY > player2.y-player2.sizeY-1 && this.y+this.inertiaY < player2.y+player2.sizeY+1){
                this.inertiaX = -this.inertiaX
                console.log("invert")
            }
        }
        //console.log(this.inertiaX)
        this.y += this.inertiaY
        this.x += this.inertiaX
        if(this.x == 0){
            this.map.winner = player2
        }else if (this.x == this.map.sizex-1){
            this.map.winner = player1
            }
        


    }
    setMap(map){
        this.map = map
    }


}

module.exports = Ball;