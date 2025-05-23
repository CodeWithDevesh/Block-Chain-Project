import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

import router from './routes/data';

const app = express();
const PORT = process.env.PORT||3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors()); // TODO: setup cors later

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/api', router);


app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});