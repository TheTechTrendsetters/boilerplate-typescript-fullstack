import { loadControllers } from 'awilix-express'
import express from 'express'
import loadContainer from './container'
import morganMiddleware from './middleware/morgan.middleware'

const app: express.Application = express()

app.use(morganMiddleware)

app.use(express.json())

loadContainer(app)

app.use(loadControllers('controllers/*.controller.ts', { cwd: __dirname }))

export { app }
