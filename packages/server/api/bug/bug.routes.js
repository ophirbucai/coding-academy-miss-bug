import express from 'express'
import { addBug, getBug, getBugs, removeBug, updateBug, avoidDupRequests } from './bug.controller.js'
import { log } from '../../middlewares/log.middleware.js'
import { authorize } from '../../middlewares/authorize.middleware.js'

const router = express.Router()

router.use(log.info((req) => `Bug request made: ${req.url}`))
router.get('/', getBugs)
router.get('/:bugId', avoidDupRequests, getBug)
router.post('/', authorize.user, addBug)
router.put('/', authorize.user, updateBug)
router.delete('/:bugId', authorize.user, removeBug)

export const bugRoutes = router