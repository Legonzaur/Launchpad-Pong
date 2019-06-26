const Model = require('../model/model');
const View = require('../view/view');


// Gardez une reference globale de l'objet window, si vous ne le faites pas, la fenetre sera
// fermee automatiquement quand l'objet JavaScript sera garbage collected.


console.log("Main Started")
//let model = new Model()
let model = new Model(view)
let view = new View(model)


