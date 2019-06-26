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
        console.log(__dirname)

        win.loadFile('html/index.html')

        // Open the DevTools.
        win.webContents.openDevTools()

        // Emitted when the window is closed.
        win.on('closed', function () {
            // Dereference the window object, usually you would store windows
            // in an array if your app supports multi windows, this is the time
            // when you should delete the corresponding element.
            win = null
        })
        function createWindow(){
            // Créer le browser window.
            win = new BrowserWindow({
              width: 800,
              height: 600,
              webPreferences: {
                nodeIntegration: true
              }
            })
        }
    }

    }

module.exports = Window;