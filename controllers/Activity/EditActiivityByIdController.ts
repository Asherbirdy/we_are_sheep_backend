import { StatusCodes } from '../../enums'
import { Req, Res } from '../../types'

export const EditActiivityByIdController = async ( req: Req, res: Res ) => {
  res.status(StatusCodes.OK).json({
    message: 'Edit Activity by id'
  })
} 