import { StatusCodes } from '../../enums'
import { Sheep } from '../../models/Sheep'
import { Req, Res } from '../../types'

export const GetSheepListController = async (req: Req, res: Res) => {
  const sheep = await Sheep.find()

  res.status(StatusCodes.OK).json({
    msg: 'GetSheepListController_GET',
    sheep
  })
}