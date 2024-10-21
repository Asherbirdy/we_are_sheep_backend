import { StatusCodes } from '../../enums'
import { UserSerialNumber } from '../../models/UserSerialNumber'
import { Req, Res } from '../../types'

export const DeleteSerialNumberController = async (req: Req, res: Res) => {
  const { id } = req.params
  await UserSerialNumber.findByIdAndDelete(id)
  res.status(StatusCodes.OK).json({
    msg: 'User serial number deleted successfully'
  })
}