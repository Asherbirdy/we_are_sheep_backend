import { StatusCodes } from '../../enums'
import { Req, Res } from '../../types'

export const DeleteUserAndSheepController = async (req: Req, res: Res) => {
  res.status(StatusCodes.OK).json({
    message: 'User and sheep deleted successfully'
  })
}
