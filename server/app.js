import express from 'express';
import bodyParser from 'body-parser';

//DB connection
import mongoose from './config/db';

//Routes
import routes from './routes';



const app = express();

//Middlewares
app.use(bodyParser.json());


app.use('/api', routes);
export default app;