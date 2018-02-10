import Faker from 'faker';
import bluebird from 'bluebird';
import mongoose, { Schema } from 'mongoose';

mongoose.Promise = bluebird;

const TableSchema = new Schema(
  {
    name: { type: String, unique: true, default: Faker.random.word },
    capacity: {
      type: Number,
      default: () => Faker.random.number({ min: 2, max: 8 }),
    },
    party: { type: Schema.Types.ObjectId, default: null },
  },
  {
    toObject: { getters: true, virtuals: false },
    toJSON: { getters: true, virtuals: false },
  }
);

export default TableSchema;
