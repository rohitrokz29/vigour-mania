/*
Posts and blogs model here
 */
const mongoose = require("mongoose");
//Journal Junction
const journalSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxlength: 100
    },
    description: {
        type: String,
        required: true,
        minlength: 50
    },
    likes: [{ type: mongoose.Types.ObjectId }],
    postedAt: {
        type: Date,
        default: Date.now
    },
    comments: [
        //comments fo the blog section
        {
            username: {
                type: String,
            },
            comment: {
                type: String,
                maxlength: 200
            },
            commentedAt: {
                type: Date,
                default: Date.now
            },
            likes: [{ type: mongoose.Types.ObjectId }]
        }
    ]

}, {
    collection: "journals"
});


/*
Adding Journal to the database--- to be used in controller function for journalRouter
 */
journalSchema.statics.addJournal = async function addJournal({ title, description }) {
    try {
        //creating a journal and saving it
        const newJournal = await new this({ title, description });
        return newJournal.save();
    } catch (error) {
        throw new Error("Internal Server Error", { statusCode: 500 });
    }
}


/*
fetching Journals from  the database---  to be used in controller function for journalRouter
*/
journalSchema.statics.getJournals = function getJournals({ page }) {
    try {
        /*
         journalsLength=== Number of journals to fetch per page i.sent every time user scrolls
            sort::
                it gets the items in the sorted order from DB
                likes:-1:::::sorts items in descending  w.r.t likes:::greater------->smaller
                and then w.r.t time posted in descending order(latest first)
            page::
                every time we send 5 journals from the  request
                when the page increases the next journsla are send
                e.g;
                page===1=>we send first 5 journals(1,2,3,4,5)
                page===2=>we send next 5 journals(6,7,8,9,10)
                page===3=>we send next 5 journsla(11,12,13,14,15)
                ...and so on
            skip::
                to skip the previously sent journals we use skip(number of items to be skipped)
            select::
                with the items it send only the desired fields in the arguments here 
                    -title
                    -description
                    -likes
                    -postedAt 
        
            process goes with-->find-->sort(likes,postedAt)-->limit->select 
             */
        /**
         * Todo for   ->page ===1 give mainJournal with list not containing main journal as latest journal
         *Todo          ->page>1 give only list of other journals
         *  
         */
        return this.find({})
            .sort({  postedAt: -1 })
            .skip((page - 1) * journalsLength)
            .limit(10)
            .select('title description likes  postedAt');

    } catch (error) {
        throw new Error("Internal Server Error", { statusCode: 500 });
    }
}

//adding comment to the journal
journalSchema.statics.addComment = function addComment({ blog_id, username, comment }) {

    //REMAINING TO COMPLETE

    console.log({ blog_id, username, comment });
}

journalSchema.statics.getComments=function getComments({journalId,page}){
    
}
module.exports = mongoose.model('journals', journalSchema);