import bluebird from 'bluebird';
import mongoose from 'mongoose';

import PartySchema from './schema';
import { PAID, PENDING, QUIT, SEATED, SERVED } from './helpers';

mongoose.Promise = bluebird;

PartySchema.methods.updateStatus = function(status) {
  return this.update({ state: { status, setAt: Date.now() }});
};

const Party = mongoose.model('Party', PartySchema);

export default Party;
