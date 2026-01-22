import Router from 'express';
import {
    getRecipes,
    createRecipe,
    getRecipe,
    updateRecipe,
    deleteRecipe
} from '../controllers/recipes.controller.js'

const router = Router();

router.route('/').get(getRecipes).post(createRecipe);
router.route('/:id').get(getRecipe).put(updateRecipe).delete(deleteRecipe);

export default router;