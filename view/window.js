const {app, BrowserWindow} = require('electron');
let win

class Window {
    constructor() {
        
        app.on('ready', this.initWindow)

        app.on('window-all-closed', () => {
            if (process.platform !== 'darwin') {
                app.quit()
            }
        })

        app.on('activate', () => {
            if (mainWindow === null) this.initWindow()
        })

    }   

    initWindow(){
        createWindow(); 

        win.loadFile(__dirname + '/html/index.html')
        win.webContents.openDevTools()

        win.on('closed', function () {
            win = null
        })

        function createWindow(){
            win = new BrowserWindow({
              width: 800,
              height: 600,
              webPreferences: {
                nodeIntegration: true
              }
            })
        }
    }
    updateWindow(){
        win.webContents.send("asynchronous-message", "updateWindow")
    }

}

module.exports = Window;