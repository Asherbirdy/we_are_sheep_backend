import { StatusCodes } from '../../enums'
import { Req, Res } from '../../types'

export const CreateHomeMeetingController = async (req: Req, res: Res) => {
  res.status(StatusCodes.OK).json({
    msg: 'Create Home Meeting',
    data: 'test'
  })
}