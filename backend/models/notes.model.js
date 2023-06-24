const mongoose = require('mongoose')

const notesSchema = new mongoose.Schema({
    userId: { type: ObjectId, immutable: true, required: true },
    notes:[
        {
            title:{type:String},
            description:{type:String},
            notedAt:{type:Date,default:new Date(),immutable:true}
        }
    ]
})