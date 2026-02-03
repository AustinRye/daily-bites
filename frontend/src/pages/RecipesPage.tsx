import { useState, useEffect } from 'react'
import type { Recipe } from '../types/recipe'
import RecipeCard from '../components/RecipeCard'

function RecipesPage() {
  const [recipes, setRecipes] = useState<Recipe[]>([])

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/recipes`)
        if (!res.ok)
          throw new Error(`Fetch failed: ${res.status} ${res.statusText}`)
        const data = await res.json()
        setRecipes(data)
      } catch (err) {
        console.log(err)
      }
    }
    getRecipes()
  }, [])

  return (
    <>
      <h1 className="text-3xl font-medium">Recipes</h1>
      <div className="columns-3 mt-5">
        {recipes.map(({ id, name }) => (
          <RecipeCard key={id} id={id} name={name} />
        ))}
      </div>
    </>
  )
}

export default RecipesPage
