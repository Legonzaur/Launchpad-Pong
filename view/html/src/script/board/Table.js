const Cell = require('./Cell')
class Table {
    constructor(map) {
      let tableau = document.createElement("table");
      for(let i = 0; i<map.sizey; i++){
        let tr = document.createElement("tr")
        tr.id = `row${i}`
        for(let j = 0; j<map.sizex; j++){
          let td = document.createElement("td")
          td.id = `cell${i*16+j}`
          tr.appendChild(td)
        }
        tableau.appendChild(tr)
      }
      document.body.appendChild(tableau)
    }

    update(map){
      map.elements.forEach(element => {
        let list = document.getElementsByClassName("player1")
        //console.log(list)
        /*.forEach(htmlElement => {
          htmlElement.classList.remove("player1")
        });*/
        for(let i =0; i<((element.sizeY*2))-1; i++){
   // console.log(`element:${element.name} y:${((element.y-element.sizeY+i)*16)} x:${element.x} total:${((element.y-element.sizeY+i)*16)+element.x}`)
          document.getElementById(`cell${((element.y-element.sizeY+i)*16)+element.x}`).style.backgroundColor = element.color
        }
    });
    }
      
}

module.exports = Table;