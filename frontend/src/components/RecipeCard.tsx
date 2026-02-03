import { Link } from 'react-router-dom'

interface RecipeCardProps {
  id: number
  name: string
}

function RecipeCard({ id, name }: RecipeCardProps) {
  return (
    <Link
      to={`/recipes/${id}`}
      className="block font-medium p-3 rounded-2xl shadow-xs bg-neutral-50 border border-neutral-300 hover:shadow-lg transition-all duration-150"
    >
      <h2 className="text-xl">{name}</h2>
    </Link>
  )
}

export default RecipeCard
