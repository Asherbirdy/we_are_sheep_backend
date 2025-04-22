import { Request, Response } from 'express'
import { StatusCodes } from '../../enums'
import { Blending } from '../../models/Blending'

import axios from 'axios'
import config from '../../config'
import { BadRequestError } from '../../errors/bad-request'

export const CreateBlendingFromSheetController = async (req: Request, res: Response) => {
  const lastUpdated = await Blending.findOne({}, {}, { sort: { editedAt: -1 } })
  const now = new Date()

  // if (lastUpdated && (now.getTime() - lastUpdated.editedAt.getTime()) < 3 * 60 * 1000) {
  //   throw new BadRequestError('BLENDING_UPDATE_INTERVAL_ERROR')
  // }

  const response = await axios.get(config.google_blending_api_url)
  await Blending.deleteMany({})
  const createBlending = await Promise.all(response.data.map(async (item: any) => {
    return await Blending.create({
      ... item,
      editedAt: new Date(),
    })
  }))

  res.status(StatusCodes.OK).json({
    msg: '取得所有混合詳細資料',
    response: createBlending,
  })
}
