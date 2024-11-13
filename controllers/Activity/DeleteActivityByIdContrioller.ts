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

  await Activity.findByIdAndDelete(activityId)
  res.status(StatusCodes.OK).json({
    message: `Delete Activity by ${ activityId }`
  })
} 