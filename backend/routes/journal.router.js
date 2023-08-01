const journalRouter = require('express').Router();
const {
    addJournal,
    getJournals,
    likeJournal,
    getMainJournal
} = require('../controllers/journal.control');

const { userAuth } = require('../middlewares/user.auth');
//journal ROUTER

//add journal route controlled by admin
journalRouter.post('/', addJournal)

//get all journals route
//if pageNo ===1 then give main journal and side else only side
journalRouter.get('/more/:pageNo',userAuth, getJournals);

//get one journal
journalRouter.get('/1/:journalId', userAuth, getMainJournal);

//like a journal
journalRouter.put('/like/:journalId', userAuth, likeJournal);



//Exporting journalRouter
module.exports = { journalRouter }
