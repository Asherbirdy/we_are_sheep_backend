import { StatusCodes } from '../../enums'
import { Req, Res } from '../../types'
import { HomeMeetingRecordId } from '../../models/HomeMeetingRecordId'

export const CreateRecordIdController = async (req: Req, res: Res) => {
  const { name, info, expiredTime } = req.body

  res.status(StatusCodes.OK).json({
    msg: 'Create Record Id',
  })
} 