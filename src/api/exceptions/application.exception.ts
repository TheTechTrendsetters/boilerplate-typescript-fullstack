export class ApplicationException extends Error {
  constructor(
    message = 'Application Error',
    public readonly code = 'APP_ERROR',
    public readonly status = 400,
  ) {
    super(message)
  }
}
