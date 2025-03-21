import { StatusCodes } from '../../enums'
import { Req, Res } from '../../types'

export const CreateGroupController = async (req: Req, res: Res) => {

  res.status(StatusCodes.CREATED).json({
    msg: 'Group created successfully'
  })
}