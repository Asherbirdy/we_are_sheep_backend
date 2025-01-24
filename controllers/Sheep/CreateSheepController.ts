import { FocusPerson, StatusCodes } from '../../enums'
import { Sheep } from '../../models/Sheep'
import { Req, Res } from '../../types'

export const CreateSheepController = async (req: Req, res: Res) => {
  const { name, ageRange, gender } = req.body

  if (!name || !ageRange || !gender) {
    res.status(StatusCodes.BAD_REQUEST).json({ 
      errorCode: 'CreateSheepController_BAD_REQUEST',
      msg: '請填寫完整資料 name, ageRange, gender' 
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
    gender,
    userId: req.user?.userId,
    focusPerson: FocusPerson.isFocus,
    district: req.user?.districtId
  })

  res.status(StatusCodes.OK).json({
    msg: 'CreateSheepController_POST',
    sheep
  })
}