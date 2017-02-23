import models from './../models';

const commentController = {};

commentController.create = (req, res) => {
    const { text, userId, postId  } = req.body;

    const comment = new models.Comment({
        text,
        _creator: userId,
        _post: postId
    })
    
    comment.save().then((newComment) => {
        models.Post.findByIdAndUpdate(
            postId,
            { $push: { '_comments': newComment._id } }
        ).then((existingPost) => {
            res.status(200).json({
                success: true,
                data: newComment,
                existingPost
            })
        })
        .catch((err) => {
            res.status(500).json({
                success: false,
                message: err.toString()
            })
        })
    })
    .catch((err) => {
        res.status(500).json({
            success: false,
            message: err.toString()
        })
    })
   
}

export default commentController;