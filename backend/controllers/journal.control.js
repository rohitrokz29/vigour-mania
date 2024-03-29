const Journal = require('../models/journal.model');

//controller function to add journals
const addJournal = async (req, res) => {
    try {
        const { title, description } = req.body;
        const data = await Journal.addJournal({ title, description });
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
        const userId=req._id;
        const journal = await Journal.getOneJournal({ journalId, userId});
        res.status(200).json(journal);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
const addComment = async (req, res) => {
    //Remaining to complete
    try {
        const { journalId } = req.params;
        const { username, comment } = req.body;
        const data = await Journal.addComment({ journalId, username, comment });
        res.status(200).json(data);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const getComments = async (req, res) => {
    try {
        const { pageNo, journalId } = req.params;
        const data = await Journal.getComments({ page: pageNo, journalId });
        if (!data) {
            res.status(404).json({ message: "No Comments" })
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const likeJournal = async (req, res) => {
    try {
        const { journalId } = req.params;
        const result = Journal.likeJournal({ journalId, userId: req._id });
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
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