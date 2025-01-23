import { StatusCodes } from '../../enums'
import { Sheep } from '../../models/Sheep'
import { Req, Res } from '../../types'
import { checkPersmission, getUserIdByString } from '../../utils/checkPersmission'

export const EditSheepController = async (req: Req, res: Res) => {
  const { sheepId } = req.query
  const { ageRange, weekInviteTag, focusPerson ,personStatus, note} = req.body

  if(!sheepId || !ageRange) {
    res.status(StatusCodes.BAD_REQUEST).json({
      errorCode: 'SHEEP_ID_OR_AGE_RANGE',
      msg: 'sheepId 或 ageRange 不能為空'
    })
    return
  }

  const sheep = await Sheep.findById(sheepId)
  if(!sheep) {
    res.status(StatusCodes.BAD_REQUEST).json({
      errorCode: 'SHEEP_NOT_FOUND',
      msg: '不存在'
    })
    return
  }

  // 檢查權限
  checkPersmission(req.user, getUserIdByString(sheep))

  // 更新羊
  sheep.ageRange = ageRange
  sheep.weekInviteTag = weekInviteTag
  sheep.focusPerson = focusPerson
  sheep.personStatus = personStatus
  sheep.note = note
  await sheep.save()

  res.status(StatusCodes.OK).json({
    msg: 'ok',
    sheep
  })
}