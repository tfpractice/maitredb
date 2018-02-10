import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import express from 'express';
import mongoose from 'mongoose';
import bluebird from 'bluebird';
import Models from '../models';

const DB_URL = process.env.DB_URL || `mongodb://localhost/maitredb`;

mongoose
  .connect(DB_URL, { promiseLibrary: bluebird })
  .then(db => {
    console.log('db connected');
  })
  .catch(e => {
    console.error(e);
  });
