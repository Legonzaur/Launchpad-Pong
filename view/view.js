const Window = require('./window');
class View {
    constructor() {
        
        this.window = new Window()
      }
      set winner(element){
        this.window.winner = element
      }
      updateView(map){
        this.window.updateWindow(map)
      }
}

module.exports = View;