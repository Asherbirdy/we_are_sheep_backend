import { StatusCodes } from '../../enums'
import { BadRequestError } from '../../errors'
import { Sheep } from '../../models/Sheep'
import { Req, Res } from '../../types'

export const DeleteSheepController = async (req: Req, res: Res) => {
  const { sheepId } = req.query

  const sheep = await Sheep.findById(sheepId)

  if(!sheep) {
    throw new BadRequestError('SHEEP_NOT_FOUND')
  }

  await sheep.deleteOne()
  
  res.status(StatusCodes.OK).json({
    msg: 'DeleteSheepController_DELETE'
  })
}