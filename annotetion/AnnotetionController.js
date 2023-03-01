const express = require('express')
const router = express.Router()
const Commands = require('./AnnoterionsCommands')

// pego as anotanoçoes
router.get("/", async (req, res)=>{
    let {priority} = req.query
    let notes
    if (priority != undefined){
        notes = await Commands.searchAnnotationsPriority(priority)
    }else{
        notes = await Commands.searchAnnotations()
    }    
    res.json(notes)    
})

// crio uma anotanoçao
router.post("/", async (req, res)=>{
    const {title, notes, priority} = req.body
    var note = await Commands.createAnnotetion(title, notes, priority)
    res.json({note:note})
})

// edito a anotanoçao
router.put("/", async (req, res)=>{
    
    let {id} = req.query
    let {title, notes, priority} = req.body
    id != undefined ? id=id : res.json({error:'Id inválido'})
    var note = await Commands.updateAnnotetion(id, title, notes, priority)
    
    res.json({note:note})
})

// deleto a anotanoçao
router.delete("/", async (req, res)=>{
    let {id} = req.query

    id == undefined ? res.json({error:'Id inválido'}) : id=id
    
    var note = await Commands.deleteAnnotetion(id)
    
    res.json({note:note})
})

module.exports = router