import { type Response } from 'express'
import Logger from '../../config/logger'
import { ApplicationException } from '../exceptions/application.exception'
import { NotFoundException } from '../exceptions/not_found.exception'
import { ServerException } from '../exceptions/server.exception'

export abstract class BaseController {
  log = Logger
  handleException(ex: Error, res: Response): void {
    let error = new ServerException()
    if (
      ex instanceof ApplicationException ||
      ex instanceof ServerException ||
      ex instanceof NotFoundException
    ) {
      this.log.debug({ ex })
      error = ex
    } else {
      this.log.error({ ex })
    }
    res
      .status(error.status)
      .send({ code: error.code, message: error.message, timestamp: new Date() })
  }
}
