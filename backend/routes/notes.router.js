const { userAuth } = require('../middlewares/user.auth');
const {
    GetNotes,
    DeleteNote,
    AddNote
} = require('../controllers/notes.control');

const notesRouter = require('express').Router();

//Add new note
notesRouter.put("/", userAuth, AddNote);
//get all notes
notesRouter.get("/", userAuth, GetNotes);
//delete a note
notesRouter.delete("/:noteId", userAuth, DeleteNote);

module.exports = notesRouter