import { Router } from 'express';
import { Party } from '../controllers';

const router = new Router();

// Get all Partys
router.route('/parties/').get(Party.getParties);

// Get one review by cuid
router.route('/parties/:id').get(Party.getParty);

// Add a new Party
router.route('/parties/').post(Party.addParty);

// Update one review by cuid
router.route('/parties/:id').patch(Party.updateParty);

// Delete a review by cuid
router.route('/parties/:id').delete(Party.deleteParty);

export default router;
