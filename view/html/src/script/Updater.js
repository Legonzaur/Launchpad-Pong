var midiAccess = null;
class Updater{
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
      update(){
        var output = midiAccess.outputs.values().next().value
            map.elements.forEach(element => {
              //console.log(element.y)
              let list = document.getElementsByClassName(element.name)
             //console.log(`element:${element.name} number:${list.length}`)
              for(let i = 0; i<list.length; i++){
                //list[i].className = ""
                output.send([0x90, list[i].id.replace('cell',''), 4])
                list[i].style.backgroundColor = "white"
              }
              for(let j =0; j<((element.sizeY*2))+1; j++){
                //console.log(element.y)
                // console.log(`element:${element.name} y:${((element.y-element.sizeY+i)*16)} x:${element.x} total:${((element.y-element.sizeY+i)*16)+element.x}`)
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
}

module.exports = Updater;