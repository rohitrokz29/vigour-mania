const mongoose = require('mongoose')

const notesSchema = new mongoose.Schema({
    userId: { type: mongoose.Types.ObjectId, immutable: true, required: true },
    notes: [
        {
            title: { type: String },
            description: { type: String },
            notedAt: { type: String, default:`${ new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`, immutable: true }
        }
    ],
})

notesSchema.statics.getNotes = async function getNotes({ userId, pageNo }) {
    try {
        const notes = await this.findOne({ userId })
            // .select('notes ')
            .select("notes")
            .sort({ "notes.notedAt": -1 })
            .slice('notes', [(pageNo - 1) * 10, (pageNo - 1) * 10 + 10])
            .lean()
            .exec()

        return { notes: notes.notes, hasMore: notes.notes.length === 10 }

    } catch (error) {
        return null;
    }
}

notesSchema.statics.addNote = async function addNote({ userId, body }) {
    try {
        const result = await this.findOneAndUpdate({ userId }, {
            $push: {
                notes: { $each: [body], $position: 0 }
            }
        }, { new: true })
            .lean()
            .exec()
            const {notes} = await this.findOne({ userId })
            .select({ notes: { $slice: [0, 1] } })
            .exec()
        return notes[0];

    } catch (error) {
        return null;
    }
}
notesSchema.statics.deleteNote = async function ({ userId, noteId }) {
    try {
        const result = await this.updateOne({ userId }, {
            $pull: {
                notes: { _id: noteId }
            }
        })
            .lean()
            .exec()

        return result;
    } catch (error) {
        return null;
    }
}
module.exports = mongoose.model('notes', notesSchema);
