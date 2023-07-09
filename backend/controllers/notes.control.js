const Notes = require('../models/notes.model')
const GetNotes = async (req, res) => {
    try {
        const { pageNo } = req.params;
        const notesData = await Notes.getNotes({ userId: req._id, pageNo })
        return res.status(200).json(notesData)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

const AddNote = async (req, res) => {
    try {

        const result = await Notes.addNote({ userId: req._id, body: req.body })
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

const DeleteNote = async (req, res) => {
    try {
        const {noteId}=req.params;
        const result = await Notes.deleteNote({ userId: req._id, noteId });
        return res.status(200).json(result)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

module.exports = {
    GetNotes,
    AddNote,
    DeleteNote
}