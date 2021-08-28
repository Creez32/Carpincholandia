const express = require('express')
const path = require('path')
const router = express.Router()

/* Home */
router.get('/',(req,res)=> res.sendFile(path.join(__dirname,'..','views','index.html')))

/* Editar */
router.get('/listar',(req,res)=> res.sendFile(path.join(__dirname,'..','views','listar.html')))
router.get('/crear',(req,res)=> res.sendFile(path.join(__dirname,'..','views','crear.html')))

/* Extras */
router.get('/contacto',(req,res)=> res.sendFile(path.join(__dirname,'..','views','contacto.html')))

module.exports = router