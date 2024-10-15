import { isTokenValid, attachCookieToResponse } from '../utils'
import { StatusCodes } from '../enums'
import Token from '../models/Token'
import { Request, Response, NextFunction } from 'express'
import { Req } from '../types'
import { Role } from '../enums'
import config from '../config'

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
  let jwtAccessToken = null
  let jwtrefreshToken = null
  
  if (config.auth_token === 'HEADER') {
    const authHeader = req.headers[ 'authorization' ]
    if (authHeader) {
      jwtAccessToken = authHeader.split(' ')[ 1 ]
    }
  }

  if (config.auth_token === 'COOKIES') {
    const { refreshToken, accessToken } = req.signedCookies
    if (accessToken) {
      jwtAccessToken = accessToken
      jwtrefreshToken = refreshToken
    }
  }

  // const { refreshToken, accessToken } = req.signedCookies

  try {
    if (jwtAccessToken) {
      const payload = isTokenValid(jwtAccessToken) as UserPayload
      req.user = payload.user
      return next()
    }
    const payload = isTokenValid(jwtrefreshToken) as UserPayload

    const existingToken = await Token.findOne({
      user: payload.user.userId,
      refreshToken: payload.refreshToken,
    })
    if (!existingToken || !existingToken.isValid) {
      res.status(StatusCodes.UNAUTHORIZED).json({ msg: 'Authentication Invalid' })
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
    res.status(StatusCodes.UNAUTHORIZED).json({ msg: 'Authentication Invalid' })
    return
  }
}

export const authorizePermission = (... roles: Role[]) => {
  return (req: Req, res: Response, next: NextFunction) => {
    if (!req.user || !roles.includes(req.user.role as Role)) {
      res.status(StatusCodes.UNAUTHORIZED).json({ msg: 'Authentication Invalid' })
      return
    }
    next()
  }
}

