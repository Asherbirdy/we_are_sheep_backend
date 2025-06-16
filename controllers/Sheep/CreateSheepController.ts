import { StatusCodes } from '../../enums'
import { Sheep } from '../../models/Sheep'
import { Req, Res } from '../../types'
import { BadRequestError } from '../../errors'

export const CreateSheepController = async (req: Req, res: Res) => {
  const { name, district } = req.body

  // 檢查資料是否完整
  if (!name || !district) {
    throw new BadRequestError('REQUEST_BODY_NOT_COMPLETE')
  }

  // 檢查是否已經有同樣的羊
  const findSameSheep = await Sheep.findOne({
    name: name,
  })

  if(findSameSheep) {
    throw new BadRequestError('BAD_REQUEST_SAME_SHEEP')
  }
  
  const sheep = await Sheep.create({
    name,
    district
  })

  res.status(StatusCodes.OK).json({
    msg: 'CreateSheepController_POST',
    sheep
  })
}