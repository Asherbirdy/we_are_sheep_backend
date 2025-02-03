import { StatusCodes } from '../../enums'
import { Req, Res } from '../../types'

export const EditUserInfoController = async (req: Req, res: Res) => {
  const { name } = req.body

  if(!name) {
    res.status(StatusCodes.BAD_REQUEST).json({
      msg: '必須填寫姓名',
      errCode: 'MISSING_REQUIRED_FIELDS'
    })
    return
  }

  res.status(StatusCodes.OK).json({
    msg: 'EditUserInfoController_PUT_SUCCESS',
    data: req.body
  }) 
}
