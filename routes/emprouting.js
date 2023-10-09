const emprouting = require("express").Router()
const empcontroller = require("../controller/empcontroller")

emprouting.get("/listalluser",empcontroller.listalluser)
emprouting.post("/findusers/:ques",empcontroller.findusers)
emprouting.post("/updateuser",empcontroller.updateuser)
emprouting.post("/deleteuser",empcontroller.deleteuser)

module.exports = emprouting