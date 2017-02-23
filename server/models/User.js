import mongoose from 'mongoose';
import bcrypt from 'bcrypt-nodejs';

const { Schema } = mongoose;

mongoose.Promise = global.Promise;

const userSchema = new Schema({
    username: {
        type: String,
        require: true,
        minlength: [3, 'Username must be at least 3 characters.']
    },
    password: {
        type: String,
        required: true,
        minlength: [5, 'Password must be at least 5 characters.']
    }
});

userSchema.pre('save', function(next){
    const user = this;

    if(!user.isModified('password')) return next();
  
    bcrypt.hash(user.password, null, null, (err, hash) => {
        if(err) console.log(err);
        user.password = hash;
        next();
    })

});


const User = mongoose.model('User', userSchema);

export default User;