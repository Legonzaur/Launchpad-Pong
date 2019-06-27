class GameLoop {
    constructor({model, view}) {
        this.model = model
        this.view = view
        this.map = map;
        this.changed = 0
        
    }
    gameStart(){
        this.delay = 100;
        var interval = setInterval(gameLoop, this.delay)
        let View = this.view

        function gameLoop(){
            let players = map.elements.filter(element => element.constructor.name == "Player")
            let balls = map.elements.filter(element => element.constructor.name == "Ball")
            map.elements.forEach(element => {
                element.update()
            });
            View.updateView()
            if(map.winner){
                console.log("win")
                clearInterval(interval)
                
            }
        }
        function win(winner){
            View.winner = winner;
        }
    }
    
    
}

module.exports = GameLoop;