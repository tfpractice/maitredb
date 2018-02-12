import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import express from 'express';
import mongoose from 'mongoose';
import bluebird from 'bluebird';

import { Table, Party } from '../routes';

const DB_URL = process.env.DB_URL || `mongodb://localhost/maitredb`;

mongoose.Promise = bluebird;
mongoose
  .connect(DB_URL, { promiseLibrary: bluebird })
  .then(db => {
    console.log('db connected');
  })
  .catch(e => {
    console.error(e);
  });

const app = express();

//
app.use(bodyParser.json({ limit: '20mb' }));
app.use(bodyParser.urlencoded({ limit: '20mb', extended: false }));
app.use(cookieParser());

app.use('/api', Table, Party);

app.listen(3000, () => {
  console.log('maitredb listening on port 3000!');
});

export default app;
