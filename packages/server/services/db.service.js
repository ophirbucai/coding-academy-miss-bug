import mongoDB from 'mongodb'
import { config } from '../config/index.js'
import { loggerService } from './logger.service.js'

const { MongoClient } = mongoDB

export const dbService = {
  getCollection,
  testConnection
}

let dbConn = null

async function getCollection(collectionName) {
  try {
    const db = await connect()
    return await db.collection(collectionName)
  } catch (err) {
    loggerService.error('Failed to get Mongo collection', err)
    throw err
  }
}

async function connect() {
  if (dbConn) return dbConn
  try {
    const client = await MongoClient.connect(config.dbURL)
    const db = client.db(config.dbName)
    dbConn = db
    return db
  } catch (err) {
    loggerService.error('Cannot Connect to DB', err)
    throw err
  }
}

async function testConnection() {
  await connect()
}