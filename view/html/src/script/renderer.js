const { ipcRenderer } = require('electron')
console.log(__dirname)
const Table = require('./src/script/board/Table')
const LaunchpadHandler = require('./src/script/LaunchpadHandler')

/*console.log(ipcRenderer.sendSync('synchronous-message', 'ping')) // prints "pong"

ipcRenderer.on('asynchronous-reply', (event, arg) => {
    console.log(arg) // prints "pong"
  })
ipcRenderer.send('asynchronous-message', 'ping')*/

let launchpad = new LaunchpadHandler()



let map = ipcRenderer.sendSync('synchronous-message', 'getMap')
let table = new Table(map)

ipcRenderer.on('asynchronous-reply', (event, arg) => {
  

})
ipcRenderer.on('asynchronous-message', (event, arg) => {
  if(arg == "updateWindow"){
    map = ipcRenderer.sendSync('synchronous-message', 'getMap')
    table.update(map)
    launchpad.updateLaunchpad(map)
  }

})
