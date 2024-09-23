import { isTokenValid, attachCookieToResponse } from '../utils'
import { StatusCode } from '../enums'
import Token from '../models/Token'
import { Request, Response, NextFunction } from 'express'
import { Req } from '../types'
import { Role } from '../enums'
interface UserPayload {
  user: {
    name: string;
    userId: string;
    role: string;
  };
  refreshToken?: string;
}

interface CustomRequest extends Request {
  user?: UserPayload['user'];
  signedCookies: {
    accessToken?: string;
    refreshToken?: string;
  };
}

export const authenticateUser = async (req: CustomRequest, res: Response, next: NextFunction) => {
  const { refreshToken, accessToken } = req.signedCookies

  try {
    if (accessToken) {
      const payload = isTokenValid(accessToken) as UserPayload
      req.user = payload.user
      return next()
    }
    const payload = isTokenValid(refreshToken) as UserPayload

    const existingToken = await Token.findOne({
      user: payload.user.userId,
      refreshToken: payload.refreshToken,
    })
    if (!existingToken || !existingToken.isValid) {
      res.status(StatusCode.UNAUTHORIZED).json({ msg: 'Authentication Invalid' })
      return
    }
    attachCookieToResponse({
      res,
      user: payload.user,
      refreshToken: existingToken.refreshToken,
    })
    req.user = payload.user
    return next()
  } catch (error) {
    res.status(StatusCode.UNAUTHORIZED).json({ msg: 'Authentication Invalid' })
    return
  }
}

export const authorizePermission = (... roles: Role[]) => {
  return (req: Req, res: Response, next: NextFunction) => {
    if (!req.user || !roles.includes(req.user.role as Role)) {
      res.status(StatusCode.UNAUTHORIZED).json({ msg: 'Authentication Invalid' })
      return
    }
    next()
  }
}

