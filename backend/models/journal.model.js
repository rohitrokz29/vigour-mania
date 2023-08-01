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
    likes: [{ type: mongoose.Types.ObjectId, unique: true }],
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
            likes: [{ type: mongoose.Types.ObjectId, unique: true }]
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
fetching Journals from  the database---  to be used in controller fu10ction for journalRouter
*/
journalSchema.statics.getJournals = async function getJournals({ page }) {
    try {
        /*
         journalsLength=== Number of journals to fetch per page i.sent every time user scrolls
            sort::
                it gets the items in the sorted order from DB
                likes:-1:::::sorts items in descending  w.r.t likes:::greater------->smaller
                and then w.r.t time posted in descending order(latest first)
            page::
                every time we send 10 journals from the  request
                when the page increases the next journsla are send
                e.g;
                page===1=>we send first 10 journals(1,2,3,4,5...10)
                page===2=>we send next 10 journals(11...20)
                page===3=>we send next 10 journsla(21,...30)
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
         *At page ===1 it returns the latest journal else null at place of it 
         */
        let latestJournal = null;
        if (+page === 1) {
            latestJournal = await this.findOne({})
                .sort({ postedAt: -1 })
                .limit(1)
                .select('title description likes postedAt _id')
                .lean()
        }
        const journalsList = await this.find({})
            .sort({ postedAt: -1 })
            .skip((+page - 1) * 10)
            .limit(10)
            .select('title description likes  postedAt _id')
            .lean();

        return { journalsList, latestJournal };
    } catch (error) {
        throw new Error("Internal Server Error", { statusCode: 500 });
    }
}

//function to fetch one journal from database
journalSchema.statics.getOneJournal = async function getOneJournal({ journalId, userId }) {
    try {
        const journal = await this.findOne({ _id: journalId })
            .select({ comments: 0 })
            .lean()

        console.log({ userId })
        const likes = {
            isLiked: journal.likes.toString().split(',').includes(userId.toString()),
            count: journal.likes.length
        }
        journal['likes'] = likes;
        console.log(journal);
        return journal;
        // const data= {
        //     _id: journal._id,
        //     title: journal.title,
        //     description: journal.description,
        //     postedAt:journal.poetedAt,
        //     likes: {
        //         isLiked: journal.includes(userId),
        //         count: journal.likes.length
        //     }
        // }
        // console.log(data)
        // return data
    } catch (error) {

    }
}

//like a journal
journalSchema.statics.likeJournal = async function likeJournal({ journalId, userId }) {
    try {
        if (!userId) {
            throw Error("User Id missing");
        }

//TODO----->check if user already liked
        const result = this.updateOne(
            { _id: journalId },
            { $push: { likes: { $each: [userId], $position: 0 } } }
        )

        return result || null;
    } catch (error) {
        throw Error(" Like UnsuccessFul");
    }
}
//adding comment to the journal
journalSchema.statics.addComment = function addComment({ journalId, username, comment }) {
    try {
        const newComment = { username, comment }
        const result = this.updateOne(
            { _id: journalId },
            { $push: { comments: { $each: [newComment], $position: 0 } } }
        )
        if (!result) {
            return null;
        }
        return result;
    } catch (error) {
        throw new Error("Internal Server Error", { statusCode: 500 });
    }
}

journalSchema.statics.getComments = function getComments({ journalId, page }) {
    try {
        const result = this.findOne({ _id: journalId })
            .select('comments')
            .sort({ 'comments.date': -1 })
            .skip((+page - 1) * 10)
            .limit(10);
        if (!result) {
            return null;
        }
        return result;
    } catch (error) {
        throw new Error("Internal Server Error", { statusCode: 500 });
    }
}

module.exports = mongoose.model('journals', journalSchema);