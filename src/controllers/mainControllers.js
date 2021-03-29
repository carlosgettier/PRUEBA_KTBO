const { render } = require("ejs")
const db = require("../database/models")
let maincontrollers = {

    all: function (req, res) {
        db.tarea.findAll({

            order: [["dateend", "ASC"]]
        })
            .then(function (todo) {
                res.render("home", { todo: todo })
            })
            .catch(function (err) {
                res.send("hubo un error")
            })
    },
    create: function (req, res) {
        db.tarea.create({
            titulo: req.body.titulo,
            descripcion: req.body.descripcion,
            status: "iniciada",
            datestart: req.body.dataStart,
            dateend: req.body.dataEnd
        })
            .then(function (creado) {
                res.redirect("/")
            })
            .catch(function (err) {
                res.send("hubo un eror")
            })
    },
    edit: function (req, res) {
        db.tarea.findByPk(req.params.id)
            .then(function (editar) {
                res.render("edit", { editar: editar })
            })

    },
    editEnd: function (req, res) {

        db.tarea.update({
            titulo: req.body.titulo,
            descripcion: req.body.descripcion,
            datestart: req.body.dataStart,
            dateend: req.body.dataEnd,
            status: req.body.estado
        },
            {
                where: {
                    id: req.params.id
                }
            }
        ).then(function (edit) {
            res.redirect("/")
        })
    },
    delete: function (req, res) {
        db.tarea.findByPk(req.params.id)
            .then(function (borrar) {
                res.render("borrar", { borrar: borrar })
            })
    },
    deletend: function (req, res) {
        db.tarea.destroy(
            {
                where: { id: req.params.id }
            })
            .then(function (err) {
                res.redirect("/")
            })
            .catch(function (error) {
                res.send(error)
            })
    },
    comenzada:function(req,res){
        db.tarea.findAll({
            where:{
                status:"iniciada"
            }
        })
        .then(function(nota){
            res.render("comenzada",{nota:nota})
        })
    },
    revision:function(req,res){
        db.tarea.findAll({
            where:{
                status:"revision"
            }
        })
        .then(function(nota){
            res.render("revision",{nota:nota})
        })
    },
    finalizada:function(req,res){
        db.tarea.findAll({
            where:{
                status:"finalizada"
            }
        })
        .then(function(nota){
            res.render("finalizadas",{nota:nota})
        })
    }
            

}
module.exports = maincontrollers;