import { StatusCodes } from '../../enums'
import { Req, Res } from '../../types'

export const DeleteUserController = async (req: Req, res: Res) => {

  res.status(StatusCodes.OK).json({
    msg: 'DeleteUserController_DELETE_SUCCESS',
  })
}
