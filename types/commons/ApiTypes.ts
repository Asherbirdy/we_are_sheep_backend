
import { Request, Response } from 'express'
import { LandingPageAccess, Role } from '../../enums'

export interface Req extends Request {
  user?: {
    userId: string
    role: Role
    districtId: string
    landingPageAccess: LandingPageAccess
  }
}

export type Res = Response

// TODO: 有一天把全部 API 的 Response 都改成這樣
// export interface Res extends Response {
//   msg: string
//   json: (body: { msg: string; [key: string]: any }) => this
// }
