import { StatusCodes } from '../../enums'
import { Activity } from '../../models/Activity'
import { Req, Res } from '../../types'

export const DeleteActivityByIdController = async ( req: Req, res: Res ) => {
  const { activityId } = req.params

  if(!activityId) {
    res.status(StatusCodes.BAD_REQUEST).json({
      errorCode: 'INVALID_ACTIVITY_ID',
      msg: 'Activity id is required'
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

  await Activity.findByIdAndDelete(activityId)
  res.status(StatusCodes.OK).json({
    message: `Delete Activity by ${ activityId }`
  })
} 