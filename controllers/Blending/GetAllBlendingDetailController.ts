import { Request, Response } from 'express'
import { StatusCodes } from '../../enums'
import { Blending } from '../../models/Blending'

export const GetAllBlendingDetailController = async (req: Request, res: Response) => {
  res.status(StatusCodes.OK).json({
    msg: 'Get all blending detail',
  })
}
