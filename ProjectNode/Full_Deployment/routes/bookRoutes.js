const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

router.post('/books', bookController.createBook);
router.get('/books', bookController.getAllBooks);
router.get('/books/:id', bookController.getBook);
router.delete('/books/:id', bookController.deleteBook);

module.exports = router;
