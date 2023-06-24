const { getComments, addComment, likeComment } = require('../controllers/journal.control');
const { userAuth } = require('../middlewares/userAuth');

const commentRouter=require('express').Router()

//get comments
commentRouter.get('',getComments);

//add comment
commentRouter.put('/add',userAuth,addComment);

//like comment
commentRouter.put('/like/:commentId',likeComment);

module.exports=commentRouter;