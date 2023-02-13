import console from '../lib/console.js'

export function responseValidationMiddleware(req, res, next) {
  const strictValidation = req.apiDoc['x-express-openapi-validation-strict'] ? true : false;
  if (typeof res.validateResponse === 'function') {
    const send = res.send;
    res.send = function expressOpenAPISend(...args) {
      const onlyWarn = !strictValidation;
      if (res.get('x-express-openapi-validation-error-for') !== undefined) {
        return send.apply(res, args);
      }

      const body = res.get('Content-Type')?.includes('application/json') ? JSON.parse(args[0]) : args[0];
      let responseValidationError = res.validateResponse(res.statusCode, body);
      if (responseValidationError === undefined) {
        responseValidationError = { message: undefined, errors: undefined };
      }
      if (responseValidationError.errors) {
        // Set to avoid a loop, and to provide the original status code
        res.set('x-express-openapi-validation-error-for', res.statusCode.toString());
      }
      if (onlyWarn || !responseValidationError.errors) {
        if (responseValidationError.errors) {
          console.warn(`Some response errors where found for request:
${req.method} ${req.originalUrl}
Headers
${Object.entries(req.headers).map(([key, value]) => `  ${key}: ${value}`).join('\n')}
Response validation error: `, responseValidationError)
        }
        return send.apply(res, args);
      } else {
        return next({
          status: 500,
          responseValidationError
        });
      }
    }
  }
  next();
}