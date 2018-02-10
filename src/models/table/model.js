import faker from 'faker';
import bluebird from 'bluebird';
import mongoose from 'mongoose';

mongoose.Promise = bluebird;

import TableSchema from './schema';

const Table = mongoose.model('Table', TableSchema);

const newTables = (count = 5) =>
  bluebird.all([ ...Array(count).keys() ].map(x => Table.create({})));

Table.find()
  .exec()

  .then(tables => console.log('tables', tables));

export default Table;
