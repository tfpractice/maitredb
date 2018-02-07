import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import express from 'express';
import mongoose from 'mongoose';
import bluebird from 'bluebird';
import { Table } from '../models';

mongoose.Promise = bluebird;
mongoose
  .connect('mongodb://maitredb_db_1', { promiseLibrary: bluebird })
  .then(db => {
    console.log('db connected');
  })
  .catch(e => {
    console.error(e);
  });
