import { StatusCodes } from '../../enums'
import { SurveyQuestion } from '../../models/SurveyQuestion'
import { Req, Res } from '../../types'

export const GetSurveyQuestionController = async (req: Req, res: Res) => {
  const surveyQuestions = await SurveyQuestion.find()

  res.status(StatusCodes.OK).json({
    msg: 'GetSurveyQuestionController_GET',
    surveyQuestions
  })
}
