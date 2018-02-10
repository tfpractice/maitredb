import bluebird from 'bluebird';
import mongoose from 'mongoose';

import PartySchema from './schema';

mongoose.Promise = bluebird;

const Party = mongoose.model('Party', PartySchema);

export default Party;
