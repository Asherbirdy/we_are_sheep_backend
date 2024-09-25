import { Response } from 'express'
import { StatusCode } from '../enums'
import { Req } from '../types'
import User from '../models/User'
import config from '../config'

export const UserController = {
  // **
  showCurrentUser: async (req: Req, res: Response) => {
    res.status(StatusCode.OK).json({
      user: req.user
    })
  },
  updatePassword: async (req: Req, res: Response) => {
    const { oldPassword, newPassword } = req.body
    if (!oldPassword || !newPassword) {
      res.status(StatusCode.BAD_REQUEST).json({
        msg: 'Please provide both values'
      })
      return
    }

    if (!req.user) {
      res.status(StatusCode.UNAUTHORIZED).json({
        msg: 'User not authenticated'
      })
      return
    } 
    const user = await User.findOne({ _id: req.user.userId })
    const isPassword = await user?.comparePassword(oldPassword)
    if (!isPassword) {
      res.status(StatusCode.UNAUTHORIZED).json({
        msg: 'Invalid Credentials'
      })
      return
    }
    if (!user) {
      res.status(StatusCode.NOT_FOUND).json({
        msg: 'User not found'
      })
      return
    }
    user.password = newPassword
    await user.save()
    res.status(StatusCode.OK).json({ msg: 'Sucess! Password Updated' })
  }
}
