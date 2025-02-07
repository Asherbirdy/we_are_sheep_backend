import { StatusCodes } from '../../enums'
import { Sheep } from '../../models/Sheep'
import { Req, Res } from '../../types'

export const UserAndDistrictSheepController = async (req: Req, res: Res) => {
  const findSheep = await Sheep.find({
    district: req.user?.districtId,
  }).populate({
    path: 'userId',
    select: '_id name'
  })

  const data = {
    personal: findSheep.filter((sheep) => String(sheep.userId._id) === String(req.user?.userId)),
    district: findSheep
  }

  res.status(StatusCodes.OK).json({
    msg: 'UserAndDistrictSheepController',
    data: data
  })
}
