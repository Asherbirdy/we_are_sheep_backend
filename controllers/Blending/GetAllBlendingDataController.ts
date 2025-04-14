import { Request, Response } from 'express'
import { StatusCodes } from '../../enums'
import { Blending } from '../../models/Blending'

import axios from 'axios'
import config from '../../config'
import { BadRequestError } from '../../errors/bad-request'

export const GetAllBlendingDataController = async (req: Request, res: Response) => {
  const blending = await Blending.find({})
  res.status(StatusCodes.OK).json({
    msg: '取得所有混合詳細資料',
    response: blending,
  })
}
