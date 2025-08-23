const express = require('express');
const {
    createCategory,
    getAllCategories,
    getCategoryById,
    deleteCategory
} = require('../controller/categories-controller');

const router = express.Router();

// Routes
router.post('/', createCategory);
router.get('/', getAllCategories);
router.get('/:id', getCategoryById);
router.delete('/:id', deleteCategory);

module.exports = router;
