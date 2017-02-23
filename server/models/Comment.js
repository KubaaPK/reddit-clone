import mongoose from 'mongoose';
import modelsHelper from './../models';

const { Schema } = mongoose;

mongoose.Promise = global.Promise;

const commentSchema = new Schema({
    text: { type: String, required: true },
    isDeleted: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
    _creator: { type: Schema.ObjectId, ref: 'User' },
    _post: { type: Schema.ObjectId, ref: 'Post' }
});


commentSchema.pre('find', function(next) {
    this.populate({
        path: '_creator',
        select: 'username createdAt -_id'
    })
    next()
})


const Comment = mongoose.model('Comment', commentSchema);
export default Comment;