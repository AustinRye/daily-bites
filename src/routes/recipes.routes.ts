import Router from 'express';
import {
    getAllRecipes,
    createRecipe,
    getRecipe,
    updateRecipe,
    deleteRecipe
} from '../controllers/recipes.controller.js'

const router = Router();

router.route('/').get(getAllRecipes).post(createRecipe);
router.route('/:id').get(getRecipe).put(updateRecipe).delete(deleteRecipe);

export default router;