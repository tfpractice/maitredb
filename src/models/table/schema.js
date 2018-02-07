import { Schema } from 'mongoose';

const TableSchema = new Schema({
  capacity: {
    type: Number,
    default: 5,
  },
  party: { type: Schema.Types.ObjectId, default: null },
});

export default TableSchema;
