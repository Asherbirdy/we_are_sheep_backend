import { StatusCodes } from '../../enums'
import { SurveyQuestion } from '../../models/SurveyQuestion'
import { Req, Res } from '../../types'

export const SetSurveyQuestionOrderController = async (req: Req, res: Res) => {
  const { surveyQuestionIdArr } = req.body

  // 檢查所有問題是否存在且為活動狀態
  const questions = await SurveyQuestion.find({
    _id: { $in: surveyQuestionIdArr },
    active: true
  })

  // 檢查問題是否存在且為活動狀態
  if (questions.length !== surveyQuestionIdArr.length) {
    res.status(StatusCodes.BAD_REQUEST).json({
      errorCode: 'SetSurveyQuestionOrderController_POST',
      msg: '不存在或已停用'
    })
    return
  }

  // 先將所有問題的 order 清空
  await SurveyQuestion.updateMany({}, { $unset: { order: 1 } })

  // 依照傳入的順序設定每個問題的 order
  for (let i = 0; i < surveyQuestionIdArr.length; i++) {
    await SurveyQuestion.findByIdAndUpdate(surveyQuestionIdArr[ i ], {
      order: i
    })
  }

  res.status(StatusCodes.CREATED).json({
    msg: 'SetSurveyQuestionOrderController_POST',
    questions
  })
}
