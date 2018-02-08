import { Schema } from 'mongoose';
import Faker from 'faker';

const TableSchema = new Schema(
  {
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
