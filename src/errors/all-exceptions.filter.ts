import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus, Logger } from "@nestjs/common";

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  private readonly logger = new Logger(AllExceptionsFilter.name)
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    if (exception instanceof HttpException) {
      const status = exception.getStatus();
      const message = exception.message;
      if (status === HttpStatus.NOT_FOUND || status === HttpStatus.BAD_REQUEST) {
        response.status(status).json({
          statusCode: status,
          message,
        });
      } else {
        response.status(status).json({
          statusCode: status,
          timestamp: new Date().toISOString(),
          path: request.url,
        });
      }
    } else {
      this.logger.error(exception);
      response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'Ocurrió un error inesperado',
      });
    }
  }
}