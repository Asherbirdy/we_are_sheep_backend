import { Request, Response } from 'express'
import { StatusCodes } from '../../enums'
import { Blending } from '../../models/Blending'

import axios from 'axios'
import config from '../../config'

export const CreateBlendingFromSheetController = async (req: Request, res: Response) => {
  const response = await axios.get(config.google_blending_api_url)
  await Blending.deleteMany({})
  const createBlending = await Promise.all(response.data.map(async (item: any) => {
    return await Blending.create({
      ...item,
      editedAt: new Date(),
    })
  }))
  res.status(StatusCodes.OK).json({
    msg: 'Get all blending detail',
    response: createBlending,
  })
}
