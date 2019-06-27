class Map {
    constructor(x, y) {
        this.sizex = x;
        this.sizey = y
        this.elements = []
        this.winner = null;
    }
    
    addToMap(element){
        this.elements.push(element)
    }
    getElementFromPosition({x,y}){
        //return this.zone;
    }
}

module.exports = Map;