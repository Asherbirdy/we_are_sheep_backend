import { StatusCodes } from '../enums'
import { Req, Res } from '../types'

export const UserSerialNumberController = {
  create: async (req: Req, res: Res) => {
    res.status(StatusCodes.OK).json({
      msg: 'User serial number created successfully'
    })
  }
}