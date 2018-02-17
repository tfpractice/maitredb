import { Router } from 'express';
import { Table } from '../controllers';

const router = new Router();

// Get all Tables
router.route('/tables/').get(Table.getTables);

// Get one review by cuid
router.route('/tables/:id').get(Table.getTable);

// Add a new Table
router.route('/tables/').post(Table.addTable);

// Update one review by cuid
router.route('/tables/:id').patch(Table.updateTable);

// Delete a review by cuid
router.route('/tables/:id').delete(Table.deleteTable);

export default router;
