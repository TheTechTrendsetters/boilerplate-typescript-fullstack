import dotenv from 'dotenv'
import path from 'path'

import { app } from './api/app'
import Logger from './config/logger'

process.env.NODE_ENV = process.env.NODE_ENV ?? 'development'
process.env.APP_ENV = process.env.APP_ENV ?? 'development'

Logger.debug(
  `Environment [APP_ENV:${process.env.APP_ENV}, NODE_ENV:${process.env.NODE_ENV}]`,
)

const pathConfig = path.join(__dirname, '.env', `${process.env.APP_ENV}.env`)

Logger.debug(`Loading environment variables from: ${pathConfig}`)

dotenv.config({
  path: pathConfig,
})

const PORT = process.env.APP_PORT ?? 3000

app.listen(PORT, () => {
  Logger.info(`Starting server on port: ${PORT}`)
})
