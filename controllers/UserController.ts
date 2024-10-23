import { Response } from 'express'
import { StatusCodes } from '../enums'
import { Req, Res } from '../types'
import User from '../models/User'

export const UserController = {
  // **
  showCurrentUser: async (req: Req, res: Res) => {
    res.status(StatusCodes.OK).json({
      user: req.user
    })
  },
  updatePassword: async (req: Req, res: Response) => {
    const { oldPassword, newPassword } = req.body
    if (!oldPassword || !newPassword) {
      res.status(StatusCodes.BAD_REQUEST).json({
        msg: 'Please provide both values'
      })
      return
    }

    if (!req.user) {
      res.status(StatusCodes.UNAUTHORIZED).json({
        msg: 'User not authenticated'
      })
      return
    } 
    const user = await User.findOne({ _id: req.user.userId })
    const isPassword = await user?.comparePassword(oldPassword)
    if (!isPassword) {
      res.status(StatusCodes.UNAUTHORIZED).json({
        msg: 'Invalid Credentials'
      })
      return
    }
    if (!user) {
      res.status(StatusCodes.NOT_FOUND).json({
        msg: 'User not found'
      })
      return
    }
    user.password = newPassword
    await user.save()
    res.status(StatusCodes.OK).json({ msg: 'Sucess! Password Updated' })
  },
  getAllUsers: async (req: Req, res: Res) => {
    const users = await User.find({}).select('-password')
    res.status(StatusCodes.OK).json({ users })
  }
}
