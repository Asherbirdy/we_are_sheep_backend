import { StatusCodes } from '../../enums'
import { Req, Res } from '../../types'

export const CreateSheepController = async (req: Req, res: Res) => {
  res.status(StatusCodes.OK).json({
    msg: 'CreateSheepController_POST'
  })
}