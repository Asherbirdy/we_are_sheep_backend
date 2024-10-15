import dotenv from 'dotenv'
import path from 'path'
dotenv.config({ path: path.resolve(process.cwd(), `.env.${ process.env.NODE_ENV || 'prod' }`) })

export default {
  port: process.env.PORT || '8000',
  environment: process.env.ENVIRONMENT as 'DEV' | 'PROD',
  mongodb_url: process.env.MONGO_URL,
  mongodb_db_name: process.env.MONGO_DB_NAME,
  jwt_secret: process.env.JWT_SECRET,
  auth_token: process.env.AUTH_TOKEN as 'HEADER' | 'COOKIES'
}
