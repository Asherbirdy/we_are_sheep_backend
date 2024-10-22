import { Role, StatusCodes } from '../../enums'
import User from '../../models/User'
import { Req, Res } from '../../types'
import { attachCookieToResponse, createTokenUser } from '../../utils'

export const RegisterController = async (req: Req, res: Res) => {
  const { name, email, password } = req.body

  const emailAlreadyExist = await User.findOne({ email })
  if (emailAlreadyExist) {
    res.status(StatusCodes.BAD_REQUEST).json({ msg: `${ email } 已經被使用！` })
    return
  }

  const isFirstAccount = (await User.countDocuments({})) === 0
  if(!isFirstAccount) {
    res.status(StatusCodes.BAD_REQUEST).json({ msg: '已經有開發者帳號！' })
    return
  }
  const role: Role = isFirstAccount ? Role.dev : Role.user
  const user = await User.create({ name, email, password, role })
  
  const tokenUser = createTokenUser(user)
  
  attachCookieToResponse({ res, user: tokenUser })
  res.status(StatusCodes.CREATED).json({ user: tokenUser })
}