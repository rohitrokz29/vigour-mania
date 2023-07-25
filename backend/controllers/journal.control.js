const Journal = require('../models/journal.model');

//controller function to add journals
const addJournal = async (req, res) => {
    try {
        const data = await Journal.addJournal({ title, description } = req.body);
        res.status(200).json(data);
    }
    catch (error) {
        res.status(404).json(error);
    }
}

//to get journals contigously
const getJournals = async (req, res) => {
    try {
        const { pageNo } = req.params;
        const { journalsList, latestJournal } = await Journal.getJournals({ page: pageNo });
        /*hasMore sends
         true -->  if more journals are present in database 
         and
         false --> if no more data is present
        */
        res.status(200).json({ latestJournal, journalsList, hasMore: journalsList.length === 10 });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
//get one journal (main Journal)
const getMainJournal = async (req, res) => {
    try {
        const { journalId } = req.params;
        const journal = await Journal.getOneJournal({ journalId, userId: req._id });
        res.status(200).json(journal);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
const addComment = async (req, res) => {
    //Remaining to complete
    try {
        const data = await Journal.addComment({ blog_id, username, comment } = req.body)
        res.status(200).json({ data })
    }
    catch (error) {
        res.json({ msg: error.message });
    }
}

const getComments = async (req, res) => {

}

const likeJournal = async (req, res) => {

}


const likeComment = async (req, res) => {

}
//exporting controller methods
module.exports = {
    addJournal,
    getJournals,
    getMainJournal,
    addComment,
    getComments,
    likeJournal,
    likeComment
};