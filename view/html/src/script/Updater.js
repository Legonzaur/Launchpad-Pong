var midiAccess = null;
var output = null;
class Updater{
    constructor() {
        navigator.requestMIDIAccess().then(onMidiAccessSuccess, onMidiAccessFailure);
        
        function onMidiAccessSuccess(access) {
          
            midiAccess = access;
            var inputs = midiAccess.inputs;
            var inputIterators = inputs.values();
            var firstInput = inputIterators.next().value;
            output = midiAccess.outputs.values().next().value
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
      update(){
        if(output != null){
          map.elements.forEach(element => {
            
            let list = document.getElementsByClassName(element.name)

            for(let i = 0; i<list.length; i++){

              output.send([0x90, list[i].id.replace('cell',''), 4])
              list[i].style.backgroundColor = "white"
            }
            for(let j =0; j<((element.sizeY*2))+1; j++){
             
              let cell = document.getElementById(`cell${(((element.y-element.sizeY)+j)*16)+element.x}`)
              if(cell){
                  let number = 0;
                  if(element.color=="red"){
                      number = 3
                  }else if(element.color=="blue"){
                      number = 60
                  }else{
                      number = 127
                  }
                output.send([0x90, (((element.y-element.sizeY)+j)*16)+element.x, number])
                cell.style.backgroundColor = element.color
                cell.className = element.name
              }
              
            }
        });
        }
        //console.log("update")
        

            
          
      }
}

module.exports = Updater;