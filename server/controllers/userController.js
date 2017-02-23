import models from './../models';
import userValidation from './../helpers/userValidation';

const userController = {};

userController.create = (req, res) => {
    const { username, password } = req.body;



    const user = new models.User({
        username,
        password
    });
    
    if(userValidation.validate(username, password) === true) {
        user.save().then((newUser) => {
            res.status(200).json({
                success: true,
                data: newUser
                });
            }).catch((err) => {
                res.status(500).json({
                    message: err.toString()
                });
        });
    } else {
        res.status(422).json({
            success: false,
            message: userValidation.validate(username, password)
        })
    }
 
}

export default userController;