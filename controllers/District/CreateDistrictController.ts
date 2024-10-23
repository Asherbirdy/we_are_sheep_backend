import { Req, Res } from '../../types'
import { StatusCodes } from '../../enums'
import { District } from '../../models/District'

export const CreateDistrictController = async (req: Req, res: Res) => {
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
}