import mongoose from 'mongoose';

import TableSchema from './schema';

const Table = mongoose.model('Table', TableSchema);

export default Table;
