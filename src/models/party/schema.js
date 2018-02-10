import Faker from 'faker';
import bluebird from 'bluebird';
import mongoose, { Schema } from 'mongoose';

import { PARTY_STATES, PENDING } from './helpers';

mongoose.Promise = bluebird;

const PartySchema = new Schema(
  {
    name: { type: String, default: Faker.name.firstName },
    size: {
      type: Number,
      default: () => Faker.random.number({ min: 2, max: 15 }),
    },
    state: { type: String, enum: PARTY_STATES, default: PENDING },
  },
  {
    toObject: { getters: true, virtuals: false },
    toJSON: { getters: true, virtuals: false },
  }
);

export default PartySchema;
