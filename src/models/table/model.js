import faker from 'faker';
import bluebird from 'bluebird';
import mongoose from 'mongoose';

mongoose.Promise = bluebird;

import TableSchema from './schema';

const Table = mongoose.model('Table', TableSchema);

const newTables = (count = 5) =>
  bluebird.all([ ...Array(count).keys() ].map(x => Table.create({})));

// newTables(10).then(tables => {
//   console.log('tables', tables);
// });

// Table.create({}).then(cr => console.log('cr', cr));
Table.find()
  .exec()

  // .map((t, i) => {
  //   console.log('i', i);
  //
  //   // console.log('t,i', t, i);
  //   return t;
  // })

  // .exec()
  .then(tables => console.log('tables', tables));

// Table.create({}).then(table => console.log('table', table));

// console.log('newTables()', newTables());
export default Table;
