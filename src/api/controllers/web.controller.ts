import { GET, route } from 'awilix-express'
import { Request, Response } from 'express'
import { ApplicationException } from '../exceptions/application.exception'
import { NotFoundException } from '../exceptions/not_found.exception'
import { ServerException } from '../exceptions/server.exception'
import { TestService } from '../services/test.service'
import { BaseController } from './base'

@route('/')
export class WebController extends BaseController {
  constructor(private readonly testService: TestService) {
    super()
  }

  @GET()
  public index(req: Request, res: Response): void {
    this.log.info('get index')
    res.send({
      message: `Hello World ${this.testService.get().toISOString()}`,
      date: this.testService.get(),
      environment: process.env.NODE_ENV,
      app_environment: process.env.APP_ENV,
      port: process.env.PORT,
    })
  }

  @GET()
  @route('app/error')
  public appError(req: Request, res: Response): void {
    try {
      throw new ApplicationException('App Error Generic')
    } catch (ex) {
      this.handleException(ex as ApplicationException, res)
    }
  }

  @GET()
  @route('app/error/not_found')
  public notFoundError(req: Request, res: Response): void {
    try {
      throw new NotFoundException('Resource not found')
    } catch (ex) {
      this.handleException(ex as NotFoundException, res)
    }
  }

  @GET()
  @route('app/error/server')
  public serverError(req: Request, res: Response): void {
    try {
      throw new ServerException('Server Error')
    } catch (ex) {
      this.handleException(ex as ServerException, res)
    }
  }

  @GET()
  @route('error')
  public error(req: Request, res: Response): void {
    try {
      throw new Error('Generic Error')
    } catch (ex) {
      this.handleException(ex as Error, res)
    }
  }
}
