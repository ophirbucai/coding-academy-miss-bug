import { dbService } from '../../services/db.service.js'
import { ObjectId } from 'mongodb'

export const bugService = {
  query,
  getOne,
  remove,
  save,
}

async function query(filterBy = {}) {
  const criteria = _buildCriteria(filterBy)
  const collection = await _getBugCollection()
  return collection.find(criteria).toArray()
}

async function getOne(id) {
  const collection = await _getBugCollection()
  return collection.findOne({ _id: new ObjectId(id) })
}

async function save({ _id, ...bug }) {
  if (_id) {
    const collection = await _getBugCollection()
    return collection.updateOne({
      _id: new ObjectId(_id)
    }, { $set: bug })

  } else {
    const collection = await _getBugCollection()
    return collection.insertOne(bug)
  }
}

async function remove(id) {
  const collection = await _getBugCollection()
  return collection.deleteOne({ _id: new ObjectId(id) })
}

function _getBugCollection() {
  return dbService.getCollection('bug')
}

function _buildCriteria(filterBy) {
  const criteria = {}

  if (filterBy.severity) {
    criteria.severity = { $eq: filterBy.severity }
  }

  return criteria
}