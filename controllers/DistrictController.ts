import { Req, Res } from '../types'
import { RoleList, StatusCodes } from '../enums'
import { District } from '../models/District'
import User from '../models/User'
import { checkPersmission, request } from '../utils'

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

    const findDistrict = await District.findOne({ name })
    if (findDistrict) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        error: 'CREATE_DUPLICATE_ERROR',
        msg: 'District already exists'
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

    const findDistrict = await District.findOne({ name: newName })
    if (findDistrict) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        error: 'EDIT_DUPLICATE_ERROR',
        msg: 'District name already exists'
      })
    }

    const district = await District.findByIdAndUpdate(districtId, { name: newName }, { new: true })
    
    if (!district) {
      return res.status(StatusCodes.NOT_FOUND).json({
        error: 'EDIT_ERROR',
        msg: 'District not found'
      })
    }
    
    res.status(StatusCodes.OK).json({
      msg: 'DistrictController_EDIT Success',
      district
    })
  },
  // close: async (req: Req, res: Res) => {
  //   const { districtId } = req.body
  //   if (!districtId) {
  //     return res.status(StatusCodes.BAD_REQUEST).json({
  //       error: 'DELETE_ERROR',
  //       msg: 'District id is required'
  //     })
  //   }
  //   const district = await District.findByIdAndUpdate(
  //     districtId,
  //     { active: false },
  //     { new: true }
  //   )
  //   res.status(StatusCodes.OK).json({
  //     msg: 'DistrictController_DELETE',
  //     district
  //   })
  // },
  // open: async (req: Req, res: Res) => {
  //   const { districtId, } = req.body
  //   if (!districtId) {
  //     return res.status(StatusCodes.BAD_REQUEST).json({
  //       error: 'DELETE_ERROR',
  //       msg: 'District id is required'
  //     })
  //   }
  //   const district = await District.findByIdAndUpdate(
  //     districtId,
  //     { active: true },
  //     { new: true }
  //   )
  //   res.status(StatusCodes.OK).json({
  //     msg: 'DistrictController_OPEN',
  //     district
  //   })  
  // },
}