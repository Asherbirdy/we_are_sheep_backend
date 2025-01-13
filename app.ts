/* eslint-disable no-console */
import 'express-async-errors'
import express, { Application } from 'express'
import config from './config'

// Routes
import DevRouter from './routes/DevRoutes'
import AuthRoutes from './routes/AuthRoutes'
import UserRoutes from './routes/UserRoutes'
import DistrictRoutes from './routes/DistrictRoutes'
import MemberRoutes from './routes/MemberRoutes'
import UserSerialNumberRoutes from './routes/UserSerialNumberRoutes'
import MemberNoteRoutes from './routes/MemberNoteRoute'
import ActivityRoutes from './routes/ActivityRoutes'
import SurveyQuestionRoutes from './routes/SurveyQuestionRoutes'
import SurveyRoutes from './routes/SurveyRoutes'
import FriendRoutes from './routes/FriendRoutes'
import SheepRoutes from './routes/SheepRoutes'
// Plugins
import cors from 'cors'
import morgan from 'morgan'
import { rateLimit } from 'express-rate-limit'
import { connectDB } from './db'
import { errorHandlerMiddleware } from './middleware'
import cookieParser from 'cookie-parser'
import helmet from 'helmet'
import mongoSanitize from 'express-mongo-sanitize'
import hpp from 'hpp'

class Server {
  private app: Application

  constructor () {
    this.app = express()
    this.middlewares()
    this.routes()
    this.handleErrorAndSafety()
  }

  middlewares () {
    this.app.use(cors())
    this.app.use(express.json())
    this.app.use(cookieParser(config.jwt_secret))
    
    // 設置靜態文件夾為 public/system 用於一般網站
    this.app.use('/system', express.static('public/system'))
    // 設置靜態文件夾為 public/C 用於 SPA
    this.app.use('/C', express.static('public/C'))
    
    this.app.use(
      morgan((tokens, req, res) => [
        tokens.method(req, res),
        tokens.url(req, res),
        tokens.status(req, res),
        `${ new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' }) }`,
        'payload:', JSON.stringify(req.body),
      ].join(' ')))

    this.app.set('trust proxy', 1) 
    this.app.use(
      rateLimit({
        windowMs: 15 * 60 * 1000,
        limit: 100,
        standardHeaders: 'draft-7',
        legacyHeaders: false,
      }))

  }

  routes () {
    // ** v1
    this.app.use('/api/v1/dev', DevRouter)
    this.app.use('/api/v1/auth', AuthRoutes)
    this.app.use('/api/v1/users', UserRoutes)
    this.app.use('/api/v1/district', DistrictRoutes)
    this.app.use('/api/v1/member', MemberRoutes)
    this.app.use('/api/v1/userSerialNumber', UserSerialNumberRoutes)
    this.app.use('/api/v1/memberNote', MemberNoteRoutes)
    this.app.use('/api/v1/activity', ActivityRoutes)
    this.app.use('/api/v1/surveyQuestion', SurveyQuestionRoutes)
    this.app.use('/api/v1/survey', SurveyRoutes)
    this.app.use('/api/v1/friend', FriendRoutes)
    this.app.use('/api/v1/sheep', SheepRoutes)
    // 確保所有非 API 路由都指向 public/C 的 index.html (SPA專用)
    this.app.get('/C/*', (req, res) => {
      res.sendFile('index.html', { root: 'public/C' })
    })
  }

  handleErrorAndSafety () {
    this.app.use(errorHandlerMiddleware)
    this.app.use(helmet())
    this.app.use(mongoSanitize())
    this.app.use(hpp())
  }

  listen () {
    this.app.listen(config.port, async () => {
      
      if(config.environment === 'DEV') {
        console.table(config)
      }

      if(config.mongodb_url && config.mongodb_db_name) {
        await connectDB(
          config.mongodb_url,
          config.mongodb_db_name
        )
      }
      console.log(`Server up and running at port: ${ config.port }`)
    })
  }
}

export default Server

const server = new Server()

server.listen()