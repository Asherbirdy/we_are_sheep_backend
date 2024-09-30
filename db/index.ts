import mongoose from 'mongoose'
import config from '../config'
mongoose.set('strictQuery', false)

export const connectDB = (url: string, dbName: string) => {
  if(config.environment === 'DEV') {
    const connectionUrl = `${ url }/${ dbName }?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.1.0`
    return mongoose.connect(connectionUrl)
  }

  if(config.environment === 'PROD') {
    const connectionUrl = `${ url }/${ dbName }?retryWrites=true&w=majority`
    return mongoose.connect(connectionUrl)
  }
}

