import express from 'express'
import { addBug, addBugMsg, getBug, getBugs, removeBug, removeBugMsg, updateBug } from './bug.controller.js'
import { log } from '../../middlewares/logger.middleware.js'
import { requireAuth } from '../../middlewares/requireAuth.middleware.js'

const router = express.Router()


router.get('/', log, getBugs)
router.get('/:bugId', getBug)
router.delete('/:bugId', log, requireAuth, removeBug)
router.post('/', requireAuth, addBug)
router.put('/', requireAuth, updateBug)

router.post('/:bugId/msg', requireAuth, addBugMsg)
router.delete('/:bugId/msg/:msgId', requireAuth, removeBugMsg)

export const bugRoutes = router