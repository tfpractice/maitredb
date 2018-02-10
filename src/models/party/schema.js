import Faker from 'faker';
import bluebird from 'bluebird';
import mongoose, { Schema } from 'mongoose';

mongoose.Promise = bluebird;

const PartySchema = new Schema(
  {
    size: {
      type: Number,
      default: () => Faker.random.number({ min: 2, max: 15 }),
    },
    name: { type: String, default: Faker.name.firstName },
  },
  {
    toObject: { getters: true, virtuals: false },
    toJSON: { getters: true, virtuals: false },
  }
);

export default PartySchema;
