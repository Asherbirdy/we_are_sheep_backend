import { StatusCodes } from '../../enums'
import { Req, Res } from '../../types'

export const MemberNoteEditController = async (req: Req, res: Res) => {
  res.status(StatusCodes.OK).json({
    msg: 'MemberNoteEditController_EDIT'
  })
}
