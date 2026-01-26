import db from '../configs/db.js';

const RecipesModel = {
    getAllRecipes: async () => {
        const result = await db.query(`
            SELECT *
            FROM recipes
        `);
        return result.rows;
    },
    getRecipe: async (id) => {
        const result = await db.query(`
            SELECT *
            FROM recipes
            WHERE id = $1
        `, [id]);
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
    updateRecipe: async (id, { name, description }) => {
        const result = await db.query(`
            UPDATE recipes
            SET name = COALESCE ($1, name),
                description = COALESCE ($2, description)
            WHERE id = $3
            RETURNING *
        `, [name, description, id]);
        return result.rows[0];
    },
    deleteRecipe: async (id) => {
        const result = await db.query(`
            DELETE FROM recipes
            WHERE id = $1
            RETURNING *
        `, [id]);
        return result.rows[0];
    }
}

export default RecipesModel;