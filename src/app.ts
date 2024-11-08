import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import userRoute from './routes/userRoute';

const app = express();

app.use(bodyParser.json());

app.use('/api', userRoute);

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World');
})

export default app