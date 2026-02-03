import express from 'express'
import cors from 'cors'
import recipesRouter from './routes/recipes.routes.js'

const app = express()

app.use(express.json())
app.use(cors())

app.use('/api/recipes', recipesRouter)

export default app
