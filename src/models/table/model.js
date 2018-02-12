import mongoose from 'mongoose';

import TableSchema from './schema';

TableSchema.statics.freeTables = function() {
  return this.find({ party: null });
};

TableSchema.query.free = function() {
  return this.find({ party: null });
};

TableSchema.query.occupied = function() {
  return this.find({ party: { $ne: null }});
};

TableSchema.methods.seatParty = function(party) {
  return this.update({ party });
};

TableSchema.methods.clearParty = function() {
  return this.update({ party: null });
};

const Table = mongoose.model('Table', TableSchema);

export default Table;
