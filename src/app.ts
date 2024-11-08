import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import userRoute from './routes/userRoute';
import authRoute from './routes/authRoute';
import './types/type';

const app = express();

app.use(bodyParser.json());

app.use('/users', userRoute);
app.use('/auth', authRoute);

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World');
})

export default app