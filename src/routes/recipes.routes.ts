import Router from 'express';
import RecipesController from '../controllers/recipes.controller.js'

const router = Router();

router.route('/').get(RecipesController.getAllRecipes).post(RecipesController.createRecipe);
router.route('/:id').get(RecipesController.getRecipe).put(RecipesController.updateRecipe).delete(RecipesController.deleteRecipe);

export default router;