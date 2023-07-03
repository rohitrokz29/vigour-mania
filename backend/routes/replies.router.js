const repliesRouter=require('express').Router();

repliesRouter.get('/:commentId/:pageNo');

repliesRouter.put('/reply/:commentId');

repliesRouter.put('/like/:replyId');



module.exports={
    repliesRouter
}