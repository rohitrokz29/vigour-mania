const express=require('express');
const { addJournal, getJournal, addComment } = require('../controllers/journalControl');
//journal ROUTER
const journalRouter=express.Router();

//add journal route controlled by admin
journalRouter.post('/add-journal',addJournal)

//get all journals route
journalRouter.get('/get-all-journals',getJournal);

//adding comment to a journal
journalRouter.put('/add-comment',addComment);


//Exporting journalRouter
module.exports = journalRouter
