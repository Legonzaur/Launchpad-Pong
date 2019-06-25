class View {
    constructor() {
        const Window = require('./window');
        // this.electron = require('electron')
        this.window = new Window()
        console.log("View initialized")
      }
      launchDesktopView(){
        this.window.createWindow()

      }
      launchLaunchpadView(){

      }
}

module.exports = View;