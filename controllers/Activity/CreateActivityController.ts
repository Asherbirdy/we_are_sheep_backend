import { StatusCodes } from '../../enums'
import { Req, Res } from '../../types'
import dayjs from 'dayjs'
import { Activity } from '../../models/Activity'

export const CreateActivityController = async ( req: Req, res: Res ) => {
  const { year, month, day, time, title, content } = req.body
  if(!year || !month || !day || !time || !title) {
    res.status(StatusCodes.BAD_REQUEST).json({
      message: 'Please provide year, month, day, time, title and content'
    })
    return
  }

  const date = `${ year }-${ month }-${ day }T${ time }`

  // validate date format
  if(!dayjs(date).isValid()) {
    res.status(StatusCodes.BAD_REQUEST).json({
      errorCode: 'INVALID_DATE_FORMAT',
      msg: 'Invalid date format. Please use the format: 2024-11-13T06:59:22.768Z'
    })
    return
  }

  // 檢查月份是否在1到12之間
  if(month < 1 || month > 12) {
    res.status(StatusCodes.BAD_REQUEST).json({
      errorCode: 'INVALID_MONTH',
      msg: 'Invalid month. Please provide a month between 1 and 12.'
    })
    return
  }

  // 檢查時間格式是否正確
  const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/
  if(!timeRegex.test(time)) {
    res.status(StatusCodes.BAD_REQUEST).json({
      errorCode: 'INVALID_TIME_FORMAT',
      msg: 'Invalid time format. Please use the format: HH:MM'
    })
    return
  }

  // const checkExist = await Activity.findOne({ date })
  // if(checkExist) {
  //   res.status(StatusCodes.BAD_REQUEST).json({
  //     errorCode: 'TIME_DUPLICATE',
  //     msg: '時間重複'
  //   })
  //   return
  // }

  const activity = await Activity.create({
    date,
    year,
    month,
    title,
    content,
    createdBy: req.user?.userId,
    lastUpdatedBy: req.user?.userId
  })

  res.status(StatusCodes.OK).json({
    msg: 'Create Activity',
    activity
  })

} 