import { StatusCodes } from '../../enums'
import { SurveyQuestion } from '../../models/SurveyQuestion'
import { Req, Res } from '../../types'

export const CreateSurveyQuestionController = async (req: Req, res: Res) => {
  const { question } = req.body

  if (!question) {
    res.status(StatusCodes.BAD_REQUEST).json({
      msg: 'CreateSurveyQuestionController_POST',
      error: 'Question is required'
    })
    return
  }

  const surveyQuestion = await SurveyQuestion.create({
    question,
    active: false,
    createdBy: req.user?.userId
  })

  res.status(StatusCodes.OK).json({
    msg: 'CreateSurveyQuestionController_POST',
    surveyQuestion
  })
}