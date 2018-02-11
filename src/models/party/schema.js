import bluebird from 'bluebird';
import Faker from 'faker';
import mongoose, { Schema } from 'mongoose';

import { PARTY_STATES, PENDING } from './helpers';

mongoose.Promise = bluebird;

const PartySchema = new Schema(
  {
    name: { type: String, default: Faker.name.firstName },
    size: {
      type: Number,
      default: () => Faker.random.number({ min: 2, max: 8 }),
    },
    state: {
      status: { type: String, enum: PARTY_STATES, default: PENDING },
      setAt: { type: Date, default: Date.now },
    },
  },
  {
    toObject: { getters: true, virtuals: false },
    toJSON: { getters: true, virtuals: false },
  }
);

export default PartySchema;
