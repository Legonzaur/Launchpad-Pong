const Model = require('../model/Model');
const View = require('../view/view');
const {IA, Player, Ball} = require('../model/entity/facade');
const Map = require('../model/Map')
const GameLoop = require('../controller/GameLoop')

map = new Map(8, 8)
let player1 = new Player()
let player2 = new Player()
let ball = new Ball()
map.addToMap(player1)
map.addToMap(player2)
map.addToMap(ball)
player1.setMap(map)
player2.setMap(map)
ball.setMap(map)


player1.x = 0
player1.y = Math.floor(map.sizey/2)-1
player1.color = "blue"
player1.name = "player1"

player2.x = map.sizey-1
player2.y = Math.floor(map.sizey/2)-1
player2.color = "red"
player2.name = "player2"

ball.x= Math.floor(map.sizex/2)-1
ball.y= Math.floor(map.sizey/2)-1
ball.color = "black"
ball.inertiaX = 1;
ball.name = "ball"


let model = new Model({"player1" : player1, "player2" : player2, "ball" : ball, "Map" : map})
let view = new View()
let gameLoop = new GameLoop({"model" : model, "view" : view})
gameLoop.gameStart()
