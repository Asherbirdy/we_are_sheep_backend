import { StatusCodes } from '../../enums'
import { BadRequestError } from '../../errors'
import { Sheep } from '../../models/Sheep'
import { Req, Res } from '../../types'

export const EditSheepController = async (req: Req, res: Res) => {
  const { sheepId } = req.query
  const { attendanceAccount, district, note } = req.body

  if(!sheepId || !district) {
    throw new BadRequestError('SHEEP_ID_OR_DISTRICT_REQUIRED')
  }

  const sheep = await Sheep.findById(sheepId)
  
  if(!sheep) {
    throw new BadRequestError('SHEEP_NOT_FOUND')
  }

  // 更新羊
  sheep.attendanceAccount = attendanceAccount
  sheep.district = district
  sheep.note = note
  await sheep.save()

  res.status(StatusCodes.OK).json({
    msg: 'ok',
    sheep
  })
}