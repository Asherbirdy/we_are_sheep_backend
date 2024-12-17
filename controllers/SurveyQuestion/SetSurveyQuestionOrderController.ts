import { StatusCodes } from '../../enums'
import { Req, Res } from '../../types'

export const SetSurveyQuestionOrderController = async (req: Req, res: Res) => {
  const { surveyQuestionIdArr } = req.body
  console.log(req.ip)
  console.log(req.ips)
  res.status(StatusCodes.CREATED).json({
    msg: 'SetSurveyQuestionOrderController_POST'
  })
}
