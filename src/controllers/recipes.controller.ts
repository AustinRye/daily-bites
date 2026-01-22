export const getRecipes = (req, res) => {
    res.send({ message: 'Get all recipes' });
};

export const createRecipe = (req, res) => {
    res.send({ message: 'Create recipe' });
};

export const getRecipe = (req, res) => {
    const { id } = req.params;
    res.send({ message: `Get recipe with ID: ${id}` });
};

export const updateRecipe = (req, res) => {
    const { id } = req.params;
    res.send({ message: `Update recipe with ID: ${id}` });
};

export const deleteRecipe = (req, res) => {
    const { id } = req.params;
    res.send({ message: `Delete recipe with ID: ${id}` });
};