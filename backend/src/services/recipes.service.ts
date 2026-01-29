import db from "../configs/db.js";
import RecipesModel from "../models/recipes.model.js";

const RecipesService = {
  getAllRecipes: async () => {
    const recipes = await RecipesModel.getAllRecipes();
    return recipes;
  },
  createRecipe: async (name, description) => {
    const recipe = await RecipesModel.createRecipe(name, description);
    return recipe;
  },
  getRecipe: async (id) => {
    const recipe = await RecipesModel.getRecipe(id);
    return recipe;
  },
  updateRecipe: async (id, { name, description }) => {
    const recipe = await RecipesModel.updateRecipe(id, {
      name: name,
      description: description,
    });
    return recipe;
  },
  deleteRecipe: async (id) => {
    const recipe = await RecipesModel.deleteRecipe(id);
    return recipe;
  },
};

export default RecipesService;
