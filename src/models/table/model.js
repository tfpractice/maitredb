import bluebird from 'bluebird';
import mongoose from 'mongoose';

import TableSchema from './schema';

mongoose.Promise = bluebird;

TableSchema.methods.seatParty = function(party) {
  return this.update({ party });
};

TableSchema.methods.clearParty = function() {
  return this.update({ party: null });
};

const Table = mongoose.model('Table', TableSchema);

export default Table;
