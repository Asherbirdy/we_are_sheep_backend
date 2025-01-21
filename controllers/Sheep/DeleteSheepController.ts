import { StatusCodes } from '../../enums'
import { Sheep } from '../../models/Sheep'
import { Req, Res } from '../../types'

export const DeleteSheepController = async (req: Req, res: Res) => {
  const { sheepId } = req.query

  // 先檢查權限
  const sheep = await Sheep.find({
    userId: req.user?.userId,
    _id: sheepId
  })
  if (!sheep) {
    res.status(StatusCodes.BAD_REQUEST).json({
      errorCode: 'SHEEP_NOT_FOUND',
      msg: '不存在'
    })
    return
  }

  await Sheep.findByIdAndDelete(sheepId)
  res.status(StatusCodes.OK).json({
    msg: 'DeleteSheepController_DELETE'
  })
}