const express = require("express")
const maincontrollers = require("../controllers/mainControllers")
const router = express.Router()
const mainControlers= require("../controllers/mainControllers")


router.get("/",mainControlers.all)
router.post("/",maincontrollers.create)
router.get("/edit/:id",maincontrollers.edit)
router.put("/edit/:id",maincontrollers.editEnd)
router.get("/delete/:id",maincontrollers.delete)
router.delete("/delete/:id",maincontrollers.deletend)
router.get("/revision",mainControlers.revision)
router.get("/comenzadas",mainControlers.comenzada)
router.get("/finalizada",mainControlers.finalizada)




module.exports = router;