import express from 'express';

//Controller imports 
import basicController from './controllers/basicController';
import userController from './controllers/userController';


const router = express();

//Basics routes
router.get('/', basicController.get);


//User routes
router.post('/signup', userController.create);

export default router;