import { StatusCodes } from '../../enums'
import { Sheep } from '../../models/Sheep'
import { Req, Res } from '../../types'

export const EditSheepController = async (req: Req, res: Res) => {
  res.status(StatusCodes.OK).json({
    msg: 'ok'
  })
}