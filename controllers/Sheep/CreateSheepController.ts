import { FocusPerson, StatusCodes } from '../../enums'
import { Sheep } from '../../models/Sheep'
import { Req, Res } from '../../types'
import { BadRequestError } from '../../errors'

export const CreateSheepController = async (req: Req, res: Res) => {
  const { name, ageRange, identity } = req.body

  // 檢查資料是否完整
  if (!name || !ageRange || !identity) {
    throw new BadRequestError('REQUEST_BODY_NOT_COMPLETE')
  }

  // 檢查是否已達到 30 隻羊
  const findIfthritySheep = await Sheep.find({
    userId: req.user?.userId,
  }).countDocuments()
  
  if(findIfthritySheep >= 30) {
    res.status(StatusCodes.BAD_REQUEST).json({ 
      errorCode: 'BAD_REQUEST_MAX_SHEEP',
      msg: '最多只能創建30隻羊' 
    })
    return
  }

  // 檢查是否已經有同樣的羊
  const findSameSheep = await Sheep.findOne({
    name,
    district: req.user?.districtId
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
    ageRange,
    identity,
    userId: req.user?.userId,
    focusPerson: FocusPerson.notFocus,
    district: req.user?.districtId
  })

  res.status(StatusCodes.OK).json({
    msg: 'CreateSheepController_POST',
    sheep
  })
}