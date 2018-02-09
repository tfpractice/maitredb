import mongoose from 'mongoose';
import faker from 'faker';

import TableSchema from './schema';

console.log('faker.random.word()', faker.random.word());
const Table = mongoose.model('Table', TableSchema);

export default Table;
