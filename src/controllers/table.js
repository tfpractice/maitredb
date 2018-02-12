import { Table } from '../models';

export const getTables = (req, res) =>
  Table.find()
    .exec()
    .then(tables => res.json({ tables }))
    .catch(err => res.status(500).send(err));

export const getTable = (req, res) =>
  Table.findById(req.params.id)
    .exec()
    .then(table => res.json({ table }))
    .catch(err => res.status(500).send(err));

export const addTable = (req, res) =>
  Table.create(req.body)
    .then(table => res.json({ table }))
    .catch(err => res.status(500).send(err));

export const updateTable = (req, res) =>
  Table.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .exec()
    .then(table => res.json({ table }))
    .catch(err => res.status(500).send(err));

export const deleteTable = (req, res) => {
  Table.findByIdAndRemove(req.params.id, { select: 'id' })
    .exec()
    .then(table => res.json({ table }))
    .catch(err => res.status(500).send(err));
};
