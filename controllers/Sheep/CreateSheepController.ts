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
    name,
  }).populate({
    path: 'userId',
    select: '_id name'
  })

  if(findSameSheep) {
    res.status(StatusCodes.BAD_REQUEST).json({ 
      errorCode: 'BAD_REQUEST_SAME_SHEEP',
      msg: `你區內的成員${ findSameSheep.userId.name }已經創建過這隻羊`,
      data: {
        msg: '有這隻羊的區內成員資訊',
        districtmember: findSameSheep.userId
      }
    })
    return
  }
  
  const sheep = await Sheep.create({
    name,
    userId: req.user?.userId,
    district
  })

  res.status(StatusCodes.OK).json({
    msg: 'CreateSheepController_POST',
    sheep
  })
}