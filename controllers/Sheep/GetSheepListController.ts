import { StatusCodes } from '../../enums'
import { Sheep } from '../../models/Sheep'
import { Req, Res } from '../../types'

export const GetSheepListController = async (req: Req, res: Res) => {
  const sheep = await Sheep.find({
    userId: req.user?.userId
  })

  const nonFocusPersonList = sheep.filter((sheep) => !sheep.focusPerson)
  const focusPersonList = sheep.filter((sheep) => sheep.focusPerson)

  const list ={
    focusPersonList: focusPersonList,
    nonFocusPersonList: nonFocusPersonList
  }

  res.status(StatusCodes.OK).json({
    msg: 'GetSheepListController_GET',
    list
  })
}