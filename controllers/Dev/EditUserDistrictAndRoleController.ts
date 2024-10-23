import { StatusCodes } from '../../enums'
import { Req, Res } from '../../types'

export const EditUserDistrictAndRoleController = async (req: Req, res: Res) => {
  res.status(StatusCodes.OK).json({
    msg: 'EditUserDistrictAndRoleController_PUT',
  })
}
