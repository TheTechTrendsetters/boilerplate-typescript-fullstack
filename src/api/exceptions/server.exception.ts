export class ServerException extends Error {
  constructor(
    message = 'Internal Server Error',
    public readonly code = 'SERVER_ERROR',
    public readonly status = 500,
  ) {
    super(message)
  }
}
