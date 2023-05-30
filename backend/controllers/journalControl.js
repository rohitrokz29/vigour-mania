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
const getJournal = async (req, res) => {
    try {
        const data = await Journal.getJournal({ page } = req.body);
        /*hasMore sends
         true -->  if more journals are present in database 
         and
         false --> if no more data is present
        */
       res.status(200).json({data,hasMore:data.length<5?false:true});
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const addComment=async (req,res)=>{
    //Remaining to complete
    try{
        const data=await Journal.addComment({blog_id,username,comment}=req.body)
        res.status(200).json({data})
    }
    catch(error){
        res.json({msg:error.message});
    }
}

//exporting controller methods
module.exports = { addJournal, getJournal, addComment };