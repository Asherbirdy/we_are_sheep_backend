import { Response } from 'express'
import { Role, StatusCodes } from '../enums'
import { Req, Res } from '../types'
import User from '../models/User'

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
  },
  editUserInfo: EditUserDistrictAndRoleController
}
