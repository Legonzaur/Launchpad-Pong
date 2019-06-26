class View {
    constructor(model) {
      this.model = model
        const Window = require('./window');
        // this.electron = require('electron')
        this.window = new Window()
        console.log("View initialized")
      }
      launchLaunchpadView(){

      }
}

module.exports = View;