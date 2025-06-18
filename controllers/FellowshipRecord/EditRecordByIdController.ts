import { StatusCodes } from '../../enums'
import { Req, Res } from '../../types'

export const EditRecordByIdController = async (req: Req, res: Res) => {
  res.status(StatusCodes.OK).json({
    message: 'EditRecordByIdController',
  })
} 