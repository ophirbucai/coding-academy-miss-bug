import { loggerService } from '../services/logger.service.js'

export const log = {
  info: (cb) => (req, res, next) => {
    /* It's best not to use un-sanitized query string, see: https://stackoverflow.com/a/56380963/14291792 */
    const message = cb(req, res)
    loggerService.info(message)
    next()
  }
}