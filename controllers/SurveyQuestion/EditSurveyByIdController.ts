import { StatusCodes } from '../../enums'
import { Req, Res } from '../../types'
import { SurveyQuestion } from '../../models/SurveyQuestion'

export const EditSurveyByIdController = async (req: Req, res: Res) => {
  const { question, surveyQuestionId, active } = req.body

  if (!question || !surveyQuestionId) {
    res.status(StatusCodes.BAD_REQUEST).json({
      msg: 'EditSurveyByIdController_POST',
      error: 'Question and id are required'
    })
    return
  }

  const surveyQuestion = await SurveyQuestion.findByIdAndUpdate(
    surveyQuestionId,
    { question, active },
    { new: true }
  )

  res.status(StatusCodes.OK).json({
    msg: 'EditSurveyByIdController_POST',
    surveyQuestion
  })
}
