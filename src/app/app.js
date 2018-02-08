import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import express from 'express';
import mongoose from 'mongoose';
import bluebird from 'bluebird';
import { Table } from '../models';
import Faker from 'faker';

const fword = Faker.lorem.word(4);
const DB_URL = process.env.DB_URL || `mongodb://localhost/maitredb`;

mongoose
  .connect(DB_URL, { promiseLibrary: bluebird })
  .then(db => {
    console.log('db connected');
  })
  .catch(e => {
    console.error(e);
  });
