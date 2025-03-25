import { StatusCodes } from '../../enums'
import { Req, Res } from '../../types'

export const CreateSheetController = async (req: Req, res: Res) => {
  res.status(StatusCodes.CREATED).json({
    message: 'Sheet created successfully',
  })
}
