const { ipcRenderer } = require('electron')
class Launchpadhandler {
    constructor() {
        var midiAccess = null;
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
            ipcRenderer.send('asynchronous-message', e.data)
          }
    }
    updateLaunchpad(map){

    }
      
}

module.exports = Launchpadhandler;