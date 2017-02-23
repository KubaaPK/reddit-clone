import mongoose from 'mongoose';

const DB_URL = 'mongodb://localhost:27017/redditclone';

mongoose.connect(DB_URL, (err) => {
    if(err) {
        console.log(err);
    } else {
        console.log(`Connected to ${DB_URL}`);
    }
})

export default mongoose;