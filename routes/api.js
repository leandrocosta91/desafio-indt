const express = require('express');
const UserController = require('../controllers/UserController');

const router = express.Router();
router.get('/', (req, res) => {
    res.send('hello world');
});

router.get('/api/users/', UserController.index);
router.post('/api/users/', UserController.store);
router.get('/api/users/:id', UserController.show);
router.put('/api/users/:id', UserController.update);
router.delete('/api/users/:id', UserController.destroy);

module.exports = router;