import { StatusCodes } from '../../enums'
import { Req, Res } from '../../types'

export const DeleteActivityByIdController = async ( req: Req, res: Res ) => {
  res.status(StatusCodes.OK).json({
    message: 'Delete Activity by id'
  })
} 