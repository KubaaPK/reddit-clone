import models from './../models';


const postController = {};

postController.create = (req, res) => {
    //TODO: userID should be crypted by JWT 
     const { title, text, link, userId } = req.body;
     //TODO: Data validation
     const post = new models.Post({
         title,
         text,
         link,
         _creator: userId
     })

     post.save().then((newPost) => {
        res.status(200).json({
            success: true,
            data: newPost
        })
     }).catch((err) => {
        res.status(500).json({
            success: false,
            message: err.toString()
        })
     })
}

postController.getAll = (req, res) => {
    models.Post.find({}).then((posts) => {
        res.status(200).json({
            success: true,
            data: posts
        })
    }).catch((err) => {
        res.status(500).json({
            success: false,
            message: err.toString()
        })
    })
}


export default postController;