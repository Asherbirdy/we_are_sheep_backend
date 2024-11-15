import { StatusCodes } from '../../enums'
import { Req, Res } from '../../types'

export const EditDistrictMemberGroupController = async (req: Req, res: Res) => {
  res.status(StatusCodes.OK).json({
    msg: 'EditDistrictMemberGroupController',
  })
}

