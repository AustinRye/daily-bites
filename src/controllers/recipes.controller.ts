import Recipes from '../models/recipes.model.js'

export const getAllRecipes = async (req, res) => {
    const recipes = await Recipes.getAllRecipes();
    if (!recipes) return res.status(404).send({ error: 'Recipes not found' });
    res.status(200).send(recipes);
};

export const createRecipe = async (req, res) => {
    if (!req.body) return res.status(400).send({ error: 'Recipe name is required' });

    const { name, description } = req.body;
    if (!name) return res.status(400).send({ error: 'Recipe name is required' });

    const recipe = await Recipes.createRecipe(name, description);
    res.status(201).send(recipe);
};

export const getRecipe = async (req, res) => {
    const { id } = req.params;
    const recipe = await Recipes.getRecipe(id);
    res.status(200).send(recipe);
};

export const updateRecipe = async (req, res) => {
    const { id } = req.params;
    const recipe = await Recipes.updateRecipe('1', {'name': 'Sandwhich', 'description': 'Delicious!'});
    if (!recipe) return res.status(404).send({ error: 'Recipe not found' });
    res.status(200).send(recipe);
};

export const deleteRecipe = async (req, res) => {
    const { id } = req.params;
    const recipe = await Recipes.deleteRecipe(id);
    if (!recipe) return res.status(404).send({ error: 'Recipe not found' });
    return res.sendStatus(204);
};