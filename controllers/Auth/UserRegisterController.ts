import { StatusCodes } from '../../enums'
import User from '../../models/User'
import { UserSerialNumber } from '../../models/UserSerialNumber'
import { Req, Res } from '../../types'
import { attachCookieToResponse, createTokenUser } from '../../utils'

export const UserRegisterController = async (req: Req, res: Res) => {
  const { name, email, password, serialNumber } = req.body

  if(!name || !email || !password || !serialNumber) {
    res.status(StatusCodes.BAD_REQUEST).json({
      msg: '請提供完整資訊！ name, email, password, serialNumber '
    })
    return
  }

  const userSerialNumber = await UserSerialNumber.findOne({ serialNumber })

  if(!userSerialNumber) {
    res.status(StatusCodes.NOT_FOUND).json({
      errorCode: 'USER_SERIAL_NUMBER_NOT_FOUND',
      msg: 'User serial number not found'
    })
    return
  }

  if(userSerialNumber.isUsed) {
    res.status(StatusCodes.BAD_REQUEST).json({
      errorCode: 'USER_SERIAL_NUMBER_ALREADY_USED',
      msg: 'User serial number is already used'
    })
    return
  }

  const emailAlreadyExist = await User.findOne({ email })

  if (emailAlreadyExist) {
    res.status(StatusCodes.BAD_REQUEST).json({ msg: `${ email } 已經被使用！` })
    return
  }

  const user = await User.create({
    name,
    email,
    password,
    role: userSerialNumber.role,
    district: userSerialNumber.districtId
  })
  
  const tokenUser = createTokenUser(user)
  
  const token = attachCookieToResponse({ res, user: tokenUser })

  userSerialNumber.isUsed = true
  await userSerialNumber.save()

  res.status(StatusCodes.CREATED).json({ user: tokenUser,token })
}