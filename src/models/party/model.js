import mongoose from 'mongoose';

import PartySchema from './schema';

const Party = mongoose.model('Party', PartySchema);

export default Party;
