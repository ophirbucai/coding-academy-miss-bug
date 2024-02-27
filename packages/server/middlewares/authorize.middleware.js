import { loggerService } from '../services/logger.service.js'

export const authorize = {
  admin: (req, res, next) => {
    if (req.session && req.session.user && req.session.user.isAdmin) {
      return next()
    } else {
      loggerService.warn(`${JSON.stingify(req.session.user)} tried to perform admin action`)
      return res.status(401).json({ message: 'Unauthorized' })
    }
  },
  user: (req, res, next) => {
    if (req.session && req.session.user) {
      return next()
    } else {
      return res.status(401).json({ message: 'Unauthorized' })
    }
  }
}