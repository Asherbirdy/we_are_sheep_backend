import { StatusCodes } from '../../enums'
import { Req, Res } from '../../types'

export const MemberNoteDeleteController = async (req: Req, res: Res) => {
  res.status(StatusCodes.OK).json({
    msg: 'MemberNoteDeleteController_DELETE'
  })
}
