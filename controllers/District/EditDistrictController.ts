import { Req, Res } from '../../types'
import { StatusCodes } from '../../enums'
import { District } from '../../models/District'

export const EditDistrictController = async (req: Req, res: Res) => {
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
}