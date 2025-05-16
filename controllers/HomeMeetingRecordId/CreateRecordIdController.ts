import { StatusCodes } from '../../enums'
import { Req, Res } from '../../types'
import { HomeMeetingRecordId } from '../../models/HomeMeetingRecordId'

export const CreateRecordIdController = async (req: Req, res: Res) => {
  const { name, info } = req.body

  if(!name || !info) {
    res.status(StatusCodes.BAD_REQUEST).json({
      msg: 'Name and info are required'
    })
    return
  }

  const expiredTime = new Date(Date.now() + 1000 * 60 * 60 * 24 * 5)

  const recordId = await HomeMeetingRecordId.create({
    name,
    info,
    createBy: req.user?.userId,
    expiredTime
  })

  res.status(StatusCodes.OK).json({
    msg: 'Create Record Id',
    data: recordId
  })
} 