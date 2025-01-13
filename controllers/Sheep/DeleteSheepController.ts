import { StatusCodes } from '../../enums'
import { Sheep } from '../../models/Sheep'
import { Req, Res } from '../../types'
import { checkPersmission } from '../../utils'

export const DeleteSheepController = async (req: Req, res: Res) => {
  const { sheepId } = req.query
  
  checkPersmission(req.user, sheepId)

  await Sheep.findByIdAndDelete(sheepId)
  res.status(StatusCodes.OK).json({
    msg: 'DeleteSheepController_DELETE'
  })
}