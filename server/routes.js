import express from 'express';

//Controller imports 
import basicController from './controllers/basicController';
import userController from './controllers/userController';
import postController from './controllers/postController';
import commentController from './controllers/commentController';


const router = express();

//Basics routes
router.get('/', basicController.get);

//User routes
router.post('/signup', userController.create);

//Post routes
router.post('/post', postController.create);
router.get('/posts', postController.getAll);

//Comment routes
router.post('/comment', commentController.create);

export default router;