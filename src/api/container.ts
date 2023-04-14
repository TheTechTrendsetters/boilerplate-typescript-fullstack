import { asClass, createContainer } from 'awilix'
import type express from 'express'

import { scopePerRequest } from 'awilix-express'
import Logger from '../config/logger'
import { TestService } from './services/test.service'

export default (app: express.Application): void => {
  Logger.debug('Loading container dependencies')
  const container = createContainer({
    injectionMode: 'CLASSIC',
  })
  container.register({
    // Services
    testService: asClass(TestService).scoped(),
  })
  app.use(scopePerRequest(container))
}
