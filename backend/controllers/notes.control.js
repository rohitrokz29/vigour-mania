const Notes = require('../models/notes.model')
const GetNotes = async (req, res) => {
    try {
        const notesData = await Notes.getNotes({ userId: req._id })
    } catch (error) {
        return res.json({ message: error.message })
    }
}

const AddNote = async (req, res) => {
    try {
        // req.body={
        //     title,data
        //     }
        const result = await Notes.addNote({ userId: req._id, body: req.body })
    } catch (error) {

    }
}

const DeleteNote = async (req, res) => {
    try {
        const result = await Notes.deleteNote({ userId: req._id, noteId: req.params.noteId })
    } catch (error) {

    }
}

module.exports = {
    GetNotes,
    AddNote,
    DeleteNote
}