import { FocusPerson, Identity, StatusCodes } from '../../enums'
import { Sheep } from '../../models/Sheep'
import { Req, Res } from '../../types'

export const UserAndDistrictSheepController = async (req: Req, res: Res) => {
  res.status(StatusCodes.OK).json({
    msg: 'UserAndDistrictSheepController',
  })
}
