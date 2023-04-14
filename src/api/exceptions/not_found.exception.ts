export class NotFoundException extends Error {
  constructor(
    message = 'This resource was not found',
    public readonly code = 'NOT_FOUND_ERROR',
    public readonly status = 404,
  ) {
    super(message)
  }
}
