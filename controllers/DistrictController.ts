import { Req, Res } from '../types'
import { RoleList, StatusCodes } from '../enums'
import { District } from '../models/District'
import User from '../models/User'
import { checkPersmission, requestUtil } from '../utils'
export const DistrictController = {
  get: async (req: Req, res: Res) => {
    const districts = await District.find({})
    res.status(StatusCodes.OK).json({
      msg: 'DistrictController_GET',
      districts
    })
  },
  create: async (req: Req, res: Res) => {
    const { name } = req.body
    if (!name) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        error: 'CREATE_ERROR',
        msg: 'District name is required'
      })
    }
    const district = await District.create({ name })
    res.status(StatusCodes.OK).json({
      msg: 'DistrictController_CREATE',
      district
    })
  },
  edit: async (req: Req, res: Res) => {
    const { newName, districtId } = req.body
    if (!newName || !districtId) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        error: 'EDIT_ERROR',
        msg: 'District name and districtId is required'
      })
    }
    await District.findByIdAndUpdate(districtId, { name: newName })
    res.status(StatusCodes.OK).json({
      msg: 'DistrictController_EDIT Success'
    })
  },
  close: async (req: Req, res: Res) => {
    const { districtId } = req.body
    if (!districtId) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        error: 'DELETE_ERROR',
        msg: 'District id is required'
      })
    }
    const district = await District.findByIdAndUpdate(
      districtId,
      { active: false },
      { new: true }
    )
    res.status(StatusCodes.OK).json({
      msg: 'DistrictController_DELETE',
      district
    })
  },
  open: async (req: Req, res: Res) => {
    const { districtId, } = req.body
    if (!districtId) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        error: 'DELETE_ERROR',
        msg: 'District id is required'
      })
    }
    const district = await District.findByIdAndUpdate(
      districtId,
      { active: true },
      { new: true }
    )
    res.status(StatusCodes.OK).json({
      msg: 'DistrictController_OPEN',
      district
    })  
  },
  updateUserDistrict: async (req: Req, res: Res) => {
    const { districtId, userId } = req.body

    requestUtil.checkEmpty(res, [districtId, userId])
  
    if (!req.user) {
      res.status(StatusCodes.UNAUTHORIZED).json({
        msg: 'User not authenticated'
      })
      return
    }

    if(!(RoleList.districtLeaders).includes(req.user.role)) {
      res.status(StatusCodes.FORBIDDEN).json({
        msg: 'Only district leaders can update user district'
      })
      return
    }

    const user = await User.findOne({ _id: userId })
    if (!user) {
      res.status(StatusCodes.NOT_FOUND).json({
        msg: 'User not found'
      })
      return
    }
    const district = await District.findById(districtId)
    if (!district) {
      res.status(StatusCodes.NOT_FOUND).json({
        msg: 'District not found'
      })
      return
    }
    
    user.district = districtId
    await user.save()
    res.status(StatusCodes.OK).json({ msg: 'Success! User district updated to ' + district.name })
  }
}