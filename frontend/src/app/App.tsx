import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import RecipesPage from '../pages/RecipesPage'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/recipes">Recipes</Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipes" element={<RecipesPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
