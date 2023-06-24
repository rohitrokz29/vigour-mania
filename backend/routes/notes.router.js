const { UpdateNotes, GetNotes, DeleteNote } = require('../controllers/notes.control');
const { userAuth } = require('../middlewares/userAuth');

const notesRouter=require('express').Router();

//Add new note
notesRouter.put("/",userAuth,UpdateNotes);
//get all notes
notesRouter.get("/",userAuth,GetNotes);
//delete a note
notesRouter.delete("/:chartId",userAuth,DeleteNote);

module.exports=notesRouter