import { Req, Res } from '../../types'
import { StatusCodes } from '../../enums'
import { Sheep } from '../../models/Sheep'

export const GetUserDistrictSheepController = async (req: Req, res: Res) => {
  const findSheep = await Sheep.find({
    district: req.user?.districtId,
    focusPerson: 'isFocus'
  }).populate({
    path: 'userId',
    select: '_id name'
  })

  res.status(StatusCodes.OK).json({
    msg: 'GetUserDistrictSheepController',
    data: findSheep
  })
}
