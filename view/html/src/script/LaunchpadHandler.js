var midiAccess = null;
const { ipcRenderer } = require('electron')
class Launchpadhandler {
    constructor() {
        
        navigator.requestMIDIAccess().then(onMidiAccessSuccess, onMidiAccessFailure);
        function onMidiAccessSuccess(access) {
            midiAccess = access;
            var inputs = midiAccess.inputs;
            var inputIterators = inputs.values();
            var firstInput = inputIterators.next().value;
            if (!firstInput) return;
            firstInput.onmidimessage = handleMidiMessage;
          }
          
          function onMidiAccessFailure(error) {
            console.log('Oops. Something were wrong with requestMIDIAccess', error.code);
          }
          
          function handleMidiMessage(e) {
            
            ipcRenderer.sendSync('synchronous-message', e.data)
          }
    }
    updateLaunchpad(map){
      
      var output = midiAccess.outputs.values().next().value
      //console.log(midiAccess.inputs.values().next().value)
      output.send([0x90, 0, 3])
      /*var noteOnMessage = [0x90, 60, 0x7f];
      var output = midiAccess.outputs.get(portID);
      output.send( noteOnMessage );  //omitting the timestamp means send immediately.
      output.send( [0x80, 60, 0x40], window.performance.now() + 1000.0 );*/
    }
      
}

module.exports = Launchpadhandler;