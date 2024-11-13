import { StatusCodes } from '../../enums'
import { Req, Res } from '../../types'

export const CreateActivityController = async ( req: Req, res: Res ) => {
  res.status(StatusCodes.OK).json({
    message: 'Create Activity'
  })
} 