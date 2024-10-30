import { StatusCodes } from '../../enums'
import { Req, Res } from '../../types'

export const MemberNoteCreateController = async (req: Req, res: Res) => {
  res.status(StatusCodes.OK).json({
    msg: 'CreateMemberNoteController_CREATE'
  })
}
