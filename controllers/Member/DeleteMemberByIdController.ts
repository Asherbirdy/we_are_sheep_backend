import { StatusCodes } from '../../enums'
import { Member } from '../../models/Member'
import { Req, Res } from '../../types'

export const DeleteMemberByIdController = async (req: Req, res: Res) => {
  res.status(StatusCodes.OK).json({
    msg: 'DeleteMemberByIdController_DELETE',
  })
}