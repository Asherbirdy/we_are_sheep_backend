import { Req, Res } from '../../types'
import { StatusCodes } from '../../enums'
export const CreateSurveyController = async (req: Req, res: Res) => {
  res.status(StatusCodes.CREATED).json({
    msg: 'CreateSurveyController_CREATED'
  })
}
