import Router from 'express';

const router = Router();

// Get all recipes
router.get('/', (req, res) => {
    res.send({ message: 'Get all recipes' });
});

// Create a new recipe
router.post('/', (req, res) => {
    res.send({ message: 'Create recipe' });
});

// Get a specific recipe by ID
router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.send({ message: `Get recipe with ID: ${id}` });
});

// Update a specific recipe by ID
router.put('/:id', (req, res) => {
    const { id } = req.params;
    res.send({ message: `Update recipe with ID: ${id}` });
});

// Delete a specific recipe by ID
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    res.send({ message: `Delete recipe with ID: ${id}` });
});

export default router;