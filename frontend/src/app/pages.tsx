import type { ComponentType } from 'react'
import HomePage from '../pages/HomePage'
import RecipesPage from '../pages/RecipesPage'

export type Page = {
  name: string
  href: string
  Component: ComponentType
}

export const pages: Page[] = [
  { name: 'Home', href: '/', Component: HomePage },
  { name: 'Recipes', href: '/recipes', Component: RecipesPage },
]
