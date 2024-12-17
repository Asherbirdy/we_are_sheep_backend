import { Req, Res } from '../../types'
import { StatusCodes } from '../../enums'
import { SurveyItem } from '../../types'
import dayjs from 'dayjs'
import { Survey } from '../../models/Survey'
import { SurveyLog } from '../../models/SurveyLog'

export const CreateSurveyController = async (req: Req, res: Res) => {
  const { name, ageRange, contact, userNotes, survey } = req.body
  if (!name || !ageRange || !contact || !survey) {
    res.status(StatusCodes.BAD_REQUEST).json({
      errorCode: 'CreateSurveyController_BAD_REQUEST',
      msg: '請填寫完整資料(name, ageRange, contact, survey)'
    })
    return
  }

  if (!Array.isArray(survey)) {
    res.status(StatusCodes.BAD_REQUEST).json({
      errorCode: 'CreateSurveyController_BAD_REQUEST',
      msg: 'survey 必須是陣列格式'
    })
    return
  }

  const isValidFormat = survey.every((item: SurveyItem) => 
    typeof item.question === 'string' && 
      typeof item.answer === 'string' &&
      item.question.trim() !== '' &&
      item.answer.trim() !== ''
  )
  
  if (!isValidFormat) {
    res.status(StatusCodes.BAD_REQUEST).json({
      errorCode: 'CreateSurveyController_BAD_REQUEST',
      msg: 'survey 格式錯誤，每個項目都必須包含 question 和 answers 欄位，且不能為空'
    })
    return
  }
  
  const clientIP = req.headers[ 'x-forwarded-for' ] || req.socket.remoteAddress

  const maxAttempts = 3
  const today = dayjs().startOf('day').toDate()
  const tomorrow = dayjs().endOf('day').toDate()
  console.log(today, tomorrow)

  const attempts = await SurveyLog.countDocuments({
    ip: clientIP,
    createdAt: { $gte: today, $lt: tomorrow }
  })

  if (attempts >= maxAttempts) {
    res.status(StatusCodes.BAD_REQUEST).json({
      errorCode: 'CreateSurveyController_BAD_REQUEST',
      msg: `此 IP: ${ clientIP } 今天已經填過問卷了 並且已達到 3 次`
    })
    return
  }

  await SurveyLog.create({ ip: clientIP, createdAt: new Date() })

  const newSurvey = await Survey.create({
    name,
    ageRange,
    contact,
    userNotes,
    survey,
    ip: clientIP
  })
  res.status(StatusCodes.CREATED).json({
    msg: 'CreateSurveyController_CREATED',
    newSurvey
  })
}
