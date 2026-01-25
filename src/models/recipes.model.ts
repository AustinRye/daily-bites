import db from '../configs/db.js';

const Recipes = {
    getAllRecipes: async () => {
        const result = await db.query(`
            SELECT *
            FROM recipes
        `);
        return result.rows;
    },
    getRecipe: async (recipe_id) => {
        const result = await db.query(`
            SELECT *
            FROM recipes
            WHERE recipe_id = $1
        `, [recipe_id]);
        return result.rows[0];
    },
    createRecipe: async (name, description) => {
        const result = await db.query(`
            INSERT INTO recipes (name, description)
            VALUES (
                $1,
                $2
            )
            RETURNING *
        `, [name, description]);
        return result.rows[0];
    },
    updateRecipe: async (recipe_id, { name, description }) => {
        const result = await db.query(`
            UPDATE recipes
            SET name = COALESCE ($1, name),
                description = COALESCE ($2, description)
            WHERE recipe_id = $3
            RETURNING *
        `, [name, description, recipe_id]);
        return result.rows[0];
    },
    deleteRecipe: async (recipe_id) => {
        const result = await db.query(`
            DELETE FROM recipes
            WHERE recipe_id = $1
            RETURNING *
        `, [recipe_id]);
        return result.rows[0];
    }
}

export default Recipes;