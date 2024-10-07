
import { Request, Response } from 'express'
import { Role } from '../../enums'

export interface Req extends Request {
  user?: {
    userId: string
    role: Role
  }
}

export type Res = Response