import { Req, Res } from '../../types'
import { FocusPerson, Identity, StatusCodes } from '../../enums'
import { Sheep } from '../../models/Sheep'

export const GetUserDistrictSheepController = async (req: Req, res: Res) => {
  const findSheep = await Sheep.find({
    district: req.user?.districtId,
  }).populate({
    path: 'userId',
    select: '_id name'
  })

  const data = {
    male: findSheep
      .filter((sheep) => (sheep.identity === Identity.Male || sheep.identity === Identity.Brother))
      .filter((sheep) => sheep.focusPerson === FocusPerson.isFocus)
    ,
    female: findSheep
      .filter((sheep) => (sheep.identity === Identity.Female || sheep.identity === Identity.Sister))
      .filter((sheep) => sheep.focusPerson === FocusPerson.isFocus)
    ,
    noFocus: findSheep
      .filter((sheep) => sheep.focusPerson === FocusPerson.notFocus)
  }

  res.status(StatusCodes.OK).json({
    msg: 'GetUserDistrictSheepController',
    data
  })
}
