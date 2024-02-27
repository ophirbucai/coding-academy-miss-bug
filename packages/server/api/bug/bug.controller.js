import { bugService } from './bug.service.js'

export async function getBugs(req, res) {
  const filterBy = {
    severity: req.query?.severity || null,
  }
  try {
    const data = await bugService.query(filterBy)
    res.send(data)
  } catch (err) {
    res.send(`Request failed to process`)
  }
}

export async function getBug(req, res) {
  const { bugId } = req.params
  try {
    const bug = await bugService.getOne(bugId)
    res.send(bug)
  } catch (err) {
    res.status(404).send('Could not find bug')
  }
}
export async function addBug(req, res) {
  const bugToAdd = {
    title: req.body.title,
    severity: req.body.severity,
  }
  try {
    const addedBug = bugService.save(bugToAdd)
    res.status(201).send(addedBug)
  } catch (err) {
    res.send(`Request failed to process`)
  }
}


export function removeBug(req, res) {
  const { bugId } = req.params
  try {
    bugService.remove(bugId)
    res.status(202).send(`Bug ${bugId} was removed`)
  } catch (err) {
    res.send(`Request failed to process`)
  }
}

export async function updateBug(req, res) {
  const bugToUpdate = {
    _id: req.body._id,
    title: req.body.title,
    severity: req.body.severity,
  }
  try {
    const updatedBug = bugService.save(bugToUpdate)
    res.status(201).send(updatedBug)
  } catch (err) {
    res.status().send()
  }
}

export function avoidDupRequests(req, res, next) {
  const { bugId } = req.params
  const lastBugId = req.cookies?.lastBugId
  if (lastBugId === bugId) {
    return res.status(429).send('Too many requests, try again later')
  }
  res.cookie('lastBugId', bugId, { maxAge: 5 * 1000 })
  next()
}