/* eslint-disable no-console */
import 'express-async-errors'
import express, { Application } from 'express'
import config from './config'

// Routes
import DevRouter from './routes/DevRoutes'
import AuthRoutes from './routes/AuthRoutes'
import UserRoutes from './routes/UserRoutes'
import DistrictRoutes from './routes/DistrictRoutes'
import UserSerialNumberRoutes from './routes/UserSerialNumberRoutes'
import ActivityRoutes from './routes/ActivityRoutes'
import SheepRoutes from './routes/SheepRoutes'
import GroupRoutes from './routes/GroupRoutes'
import SheetRoutes from './routes/SheetRoutes'
import LandingPageRoutes from './routes/LandingPageRoutes'
import BlendingRoutes from './routes/BlendingRoutes'
import AttendanceAccountRoutes from './routes/AttendanceAccountRoutes'
import HomeMeetingRoutes from './routes/HomeMeetingRoutes'
import HomeMeetingRecordIdRoutes from './routes/HomeMeetingRecordIdRoutes'

// 特別專案
import TeemMeetingAttendRoutes from './routes/TeemMeetingAttendRoutes'
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
        `ips: ${ req.ips }`,
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
    this.app.use('/api/v1/userSerialNumber', UserSerialNumberRoutes)
    this.app.use('/api/v1/activity', ActivityRoutes)
    this.app.use('/api/v1/sheep', SheepRoutes)
    this.app.use('/api/v1/group', GroupRoutes)
    this.app.use('/api/v1/sheet', SheetRoutes)
    this.app.use('/api/v1/landingPage', LandingPageRoutes)
    this.app.use('/api/v1/blending', BlendingRoutes)
    this.app.use('/api/v1/attendanceAccount', AttendanceAccountRoutes)
    this.app.use('/api/v1/homeMeeting', HomeMeetingRoutes)
    this.app.use('/api/v1/homeMeetingRecordId', HomeMeetingRecordIdRoutes)
    
    // 特別專案
    this.app.use('/api/v1/teemMeetingAttend', TeemMeetingAttendRoutes)

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