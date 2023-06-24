const journalRouter=require('express').Router();
const { addJournal, getJournals, likeJournal } = require('../controllers/journal.control');
const { userAuth } = require('../middlewares/userAuth');
//journal ROUTER

//add journal route controlled by admin
journalRouter.post('/add',addJournal)

//get all journals route
journalRouter.get('/',getJournals);

//like a journal
journalRouter.put('/like/:journalId',userAuth,likeJournal);



//Exporting journalRouter
module.exports = journalRouter
