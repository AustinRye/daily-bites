import RecipesService from "../services/recipes.service.js";

const RecipesController = {
  getAllRecipes: async (req, res) => {
    const recipes = await RecipesService.getAllRecipes();
    if (!recipes) return res.status(404).send({ error: "Recipes not found" });
    return res.status(200).send(recipes);
  },
  createRecipe: async (req, res) => {
    if (!req.body)
      return res.status(400).send({ error: "Recipe name is required" });

    const { name, description } = req.body;
    if (!name)
      return res.status(400).send({ error: "Recipe name is required" });

    const recipe = await RecipesService.createRecipe(name, description);
    return res.status(201).send(recipe);
  },
  getRecipe: async (req, res) => {
    const { id } = req.params;
    const recipe = await RecipesService.getRecipe(id);
    if (!recipe) return res.status(404).send({ error: "Recipe not found" });
    return res.status(200).send(recipe);
  },
  updateRecipe: async (req, res) => {
    if (!req.body)
      return res.status(400).send({ error: "Recipe name is required" });

    const { id } = req.params;
    const { name, description } = req.body;
    if (!name)
      return res.status(400).send({ error: "Recipe name is required" });

    const recipe = await RecipesService.updateRecipe(id, {
      name: name,
      description: description,
    });
    if (!recipe) return res.status(404).send({ error: "Recipe not found" });
    return res.status(200).send(recipe);
  },
  deleteRecipe: async (req, res) => {
    const { id } = req.params;
    const recipe = await RecipesService.deleteRecipe(id);
    if (!recipe) return res.status(404).send({ error: "Recipe not found" });
    return res.sendStatus(204);
  },
};

export default RecipesController;
