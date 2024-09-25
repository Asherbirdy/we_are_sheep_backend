
import { Request, Response } from 'express'

export interface Req extends Request {
  user?: {
    userId: string
    role: string
  }
}

export type Res = Response