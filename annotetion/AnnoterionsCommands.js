const Annotations = require('./annotetionData')

async function searchAnnotations(){
    var notes = await Annotations.find()
    return notes
}

async function searchAnnotationsPriority(priority){
    var notes = await Annotations.find({priority:priority})
    return notes
}

async function createAnnotetion(title, notes, priority){
    var notes = await Annotations.create({
        title,
        notes,
        priority
    })
    return notes
        
}

async function updateAnnotetion(id, title, notes, priority){
    let annotetion = await Annotations.findOne({_id:id})
    
    title != undefined ? annotetion.title = title : annotetion.title = annotetion.title 
    notes != undefined ? annotetion.notes = notes : annotetion.notes = annotetion.notes  
    if(priority){
        if(annotetion.priority){
            annotetion.priority = false
        }else{
            annotetion.priority = true
        }
    }else{
        annotetion.priority = annotetion.priority
    }

    await annotetion.save()

    return annotetion
    
}

async function deleteAnnotetion(id){
    var note = Annotations.findOneAndDelete({_id:id})
    if(note){
        return note
    }else{
        return note
    }
}


module.exports = {searchAnnotations, searchAnnotationsPriority, createAnnotetion, deleteAnnotetion, updateAnnotetion}