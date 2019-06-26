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
        //console.log(element.y)
        let list = document.getElementsByClassName(element.name)
       //console.log(`element:${element.name} number:${list.length}`)
        for(let i = 0; i<list.length; i++){
          //list[i].className = ""
          list[i].style.backgroundColor = "white"
        }
        for(let j =0; j<((element.sizeY*2))+1; j++){
          //console.log(element.y)
          // console.log(`element:${element.name} y:${((element.y-element.sizeY+i)*16)} x:${element.x} total:${((element.y-element.sizeY+i)*16)+element.x}`)
          let cell = document.getElementById(`cell${(((element.y-element.sizeY)+j)*16)+element.x}`)
          if(cell){
            cell.style.backgroundColor = element.color
            cell.className = element.name
          }
          
        }
    });
    }
      
}

module.exports = Table;