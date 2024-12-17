import { StatusCodes } from '../../enums'
import { SurveyQuestion } from '../../models/SurveyQuestion'
import { Req, Res } from '../../types'

export const GetSurveyQuestionByOrderController = async (req: Req, res: Res) => {
  const getSurveyQuestionByOrder = await SurveyQuestion.find({
    order: { $ne: null },
    active: true
  }).sort({ order: 1 })

  res.status(StatusCodes.OK).json({
    msg: 'GetSurveyQuestionByOrderController_GET',
    getSurveyQuestionByOrder
  })
}
