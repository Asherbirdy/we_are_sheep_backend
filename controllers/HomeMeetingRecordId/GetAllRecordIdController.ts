import { StatusCodes } from '../../enums'
import { Req, Res } from '../../types'
import { HomeMeetingRecordId } from '../../models/HomeMeetingRecordId'

export const GetAllRecordIdController = async (req: Req, res: Res) => {
  const recordIds = await HomeMeetingRecordId.find()

  res.status(StatusCodes.OK).json({
    msg: 'Get All Record Id',
    data: recordIds
  })
} 