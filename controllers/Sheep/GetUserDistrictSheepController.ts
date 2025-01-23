import { Req, Res } from '../../types'
import { StatusCodes } from '../../enums'

export const GetUserDistrictSheepController = async (req: Req, res: Res) => {
  res.status(StatusCodes.OK).json({
    msg: 'GetUserDistrictSheepController'
  })
}
