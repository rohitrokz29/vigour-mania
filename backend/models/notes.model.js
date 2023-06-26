const mongoose = require('mongoose')

const notesSchema = new mongoose.Schema({
    userId: { type: mongoose.Types.ObjectId, immutable: true, required: true },
    notes: [
        {
            title: { type: String },
            description: { type: String },
            notedAt: { type: Date, default: new Date(), immutable: true }
        }
    ],
    _id: false
})

notesSchema.statics.getNotes = async function getNotes({ userId }) {
    try {
        return await this.findOne({ userId }).select("notes").sort({ "notes.notedAt": -1 })
    } catch (error) {

    }
}

notesSchema.statics.addNote = async function addNote({ userId, body }) {
    try {
        const result = await this.updateOne({ userId }, {
            $push: {
                notes: { $each: [{ body }], $position: 0 }
            }
        }, { new: true }).select('notes')
        return result[0];

    } catch (error) {

    }
}
notesSchema.statics.deleteNote = async function ({ userId, noteId }) {
    try {
        const result = await this.updateOne({ userId }, {
             $pull: { charts: { _id: chartId } } }
        )
    } catch (error) {

    }
}
module.exports = mongoose.model('notes', notesSchema);
