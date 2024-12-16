import { StatusCodes } from '../../enums'
import { SurveyQuestion } from '../../models/SurveyQuestion'
import { Req, Res } from '../../types'

export const GetSurveyQuestionController = async (req: Req, res: Res) => {
  const { active } = req.body

  const surveyQuestions = await SurveyQuestion.find({
    active
  })

  res.status(StatusCodes.CREATED).json({
    msg: 'GetSurveyQuestionController_GET',
    surveyQuestions
  })
}
