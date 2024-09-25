import mongoose from 'mongoose'
mongoose.set('strictQuery', false)

export const connectDB = (url: string, dbName: string) => {
  const connectionUrl = `${ url }/${ dbName }?retryWrites=true&w=majority`
  return mongoose.connect(connectionUrl)
}

