// routes/api/success.js

const express = require('express');
const router = express.Router();

// Load Success model
const Success = require('../../models/Success');

// @route GET api/success/test
// @description tests success route
// @access Public
router.get('/test', (req, res) => res.send('success route testing'));

// @route GET api/success
// @description Get all success
// @access Public
router.get('/', (req, res) => {
  Success.find()
    .then(successes => res.json(success))
    .catch(err => res.status(404).json({ nosuccessfound: 'No success found' }));
});

// @route GET api/success/:id
// @description Get single Success by id
// @access Public
router.get('/:id', (req, res) => {
  Success.findById(req.params.id)
    .then(success => res.json(success))
    .catch(err => res.status(404).json({ nosuccessfound: 'No success found' }));
});

// @route GET api/success
// @description add/save Success
// @access Public
router.post('/', (req, res) => {
  Success.create(req.body)
    .then(success => res.json({ msg: 'Success added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this Success' }));
});

// @route GET api/success/:id
// @description Update Success
// @access Public
router.put('/:id', (req, res) => {
  Success.findByIdAndUpdate(req.params.id, req.body)
    .then(success => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/success/:id
// @description Delete Success by id
// @access Public
router.delete('/:id', (req, res) => {
  Success.findByIdAndRemove(req.params.id, req.body)
    .then(success => res.json({ mgs: 'Success entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such success' }));
});

module.exports = router;