import { Party } from '../models';

export const getParties = (req, res) =>
  Party.find()
    .exec()
    .then(parties => res.json({ parties }))
    .catch(err => res.status(500).send(err));

export const getParty = (req, res) =>
  Party.findById(req.params.id)
    .exec()
    .then(party => res.json({ party }))
    .catch(err => res.status(500).send(err));

export const addParty = (req, res) =>
  Party.create(req.body)
    .then(party => res.json({ party }))
    .catch(err => res.status(500).send(err));

export const updateParty = (req, res) =>
  Party.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .exec()
    .then(party => res.json({ party }))
    .catch(err => res.status(500).send(err));

export const deleteParty = (req, res) => {
  Party.findByIdAndRemove(req.params.id, { select: 'id' })
    .exec()
    .then(party => res.json({ party }))
    .catch(err => res.status(500).send(err));
};
