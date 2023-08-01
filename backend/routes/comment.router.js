const {
    getComments,
    addComment,
    likeComment
} = require('../controllers/journal.control');
const { userAuth } = require('../middlewares/user.auth');

const commentRouter = require('express').Router()

//get comments
commentRouter.get('/:pageNo/:journalId', getComments);

//add comment
commentRouter.put('/add/:journalId', userAuth, addComment);

//like comment
commentRouter.put('/like/:commentId',userAuth,likeComment);

module.exports = {commentRouter};