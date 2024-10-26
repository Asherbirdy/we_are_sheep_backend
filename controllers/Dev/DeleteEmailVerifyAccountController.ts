import { Request, Response } from 'express'
import { StatusCodes } from '../../enums'
import { Req, Res } from '../../types'

export const DeleteEmailVerifyAccountController = async ( req: Req, res: Res ) => {

  res.status( StatusCodes.OK ).json( {
    message: 'Email verify account deleted successfully'
  } )
}

