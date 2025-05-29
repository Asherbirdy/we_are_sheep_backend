import { StatusCodes } from '../../enums'
import { Sheep } from '../../models/Sheep'
import { Req, Res } from '../../types'

export const GetSheepListController = async (req: Req, res: Res) => {
  const sheep = await Sheep.find().populate({
    path: 'attendanceAccount',
    select: '_id name'
  })

  res.status(StatusCodes.OK).json({
    msg: 'GetSheepListController_GET',
    sheep
  })
}