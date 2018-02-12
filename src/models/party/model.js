import mongoose from 'mongoose';

import PartySchema from './schema';
import { PENDING } from './helpers';

PartySchema.methods.updateStatus = function(status = PENDING) {
  return this.update({ state: { status, setAt: Date.now() }});
};

const Party = mongoose.model('Party', PartySchema);

export default Party;
