const Window = require('./window');
class View {
    constructor() {
        
        this.window = new Window()
      }
      updateView(map){
        this.window.updateWindow(map)
      }
}

module.exports = View;