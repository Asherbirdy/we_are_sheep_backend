import { Request, Response } from 'express'
import { Req } from '../types'
import { StatusCodes } from '../enums'

export const DistrictController = {
  get: (req: Req, res: Response) => {
    res.status(StatusCodes.OK).json({
      msg: 'DistrictController_GET'
    })
  }
}   