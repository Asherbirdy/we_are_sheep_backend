import { StatusCodes } from '../../enums'
import { Sheep } from '../../models/Sheep'
import { Req, Res } from '../../types'

export const CreateSheepController = async (req: Req, res: Res) => {
  const { name, ageRange } = req.body

  if (!name || !ageRange) {
    res.status(StatusCodes.BAD_REQUEST).json({ 
      errorCode: 'CreateSheepController_BAD_REQUEST',
      msg: '請填寫完整資料' 
    })
    return
  }

  const findIfthritySheep = await Sheep.find({
    userId: req.user?.userId,
  }).countDocuments()
  
  if(findIfthritySheep >= 30) {
    res.status(StatusCodes.BAD_REQUEST).json({ 
      errorCode: 'CreateSheepController_BAD_REQUEST_MAX_SHEEP',
      msg: '最多只能創建30隻羊' 
    })
    return
  }

  const sheep = await Sheep.create({
    name,
    ageRange,
    userId: req.user?.userId
  })

  res.status(StatusCodes.OK).json({
    msg: 'CreateSheepController_POST',
    sheep
  })
}