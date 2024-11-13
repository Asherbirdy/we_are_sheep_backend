import { StatusCodes } from '../../enums'
import { Req, Res } from '../../types'
import { Activity } from '../../models/Activity'
export const EditActiivityByIdController = async ( req: Req, res: Res ) => {
  const { activityId, title, content } = req.body

  if(!activityId || !title) {
    res.status(StatusCodes.BAD_REQUEST).json({
      errorCode: 'INVALID_BODY_PARAMS',
      msg: 'Activity id, title, and content are required'
    })
    return
  }

  const activity = await Activity.findById(activityId)
  if(!activity) {
    res.status(StatusCodes.NOT_FOUND).json({
      errorCode: 'ACTIVITY_NOT_FOUND',
      msg: 'Activity not found'
    })
    return
  }
  
  activity.title = title
  activity.content = content
  await activity.save()

  res.status(StatusCodes.OK).json({
    msg: 'Edit Activity by id',
    data: activity
  })
} 