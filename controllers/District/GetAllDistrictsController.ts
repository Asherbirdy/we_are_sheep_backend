import { Req, Res } from '../../types'
import { StatusCodes } from '../../enums'
import { District } from '../../models/District'

export const GetAllDistrictsController = async (req: Req, res: Res) => {
  const districts = await District.find({})
  res.status(StatusCodes.OK).json({
    msg: 'DistrictController_GET',
    districts
  })
}