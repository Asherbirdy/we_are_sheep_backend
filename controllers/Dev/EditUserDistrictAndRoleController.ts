import { Role, StatusCodes } from '../../enums'
import User from '../../models/User'
import { Req, Res } from '../../types'

export const EditUserDistrictAndRoleController = async (req: Req, res: Res) => {
  const { userId, districtId, role } = req.body
  if ( !userId || !districtId || !role ) {
    res.status(StatusCodes.BAD_REQUEST).json({
      msg: 'EditUserDistrictAndRoleController_PUT_ERROR',
      error: 'Missing required fields'
    })
    return
  }

  if(req.user?.role === Role.dev) {
    res.status(StatusCodes.FORBIDDEN).json({
      msg: 'You are not allowed to edit dev district and role',
      error: 'CANT_EDIT_DEV_DISTRICT_AND_ROLE'
    })
    return
  }

  if(role === Role.dev) {
    res.status(StatusCodes.FORBIDDEN).json({
      msg: 'You are not allowed to edit dev role',
      error: 'CANT_EDIT_DEV_ROLE'
    })
    return
  }

  const user = await User.findByIdAndUpdate(userId, {
    district: districtId,
    role
  }, { new: true })

  res.status(StatusCodes.OK).json({
    msg: 'EditUserDistrictAndRoleController_PUT',
    user
  })
}
