import { Req, Res } from '../../types'
import { StatusCodes } from '../../enums'
export const CreateSurveyController = async (req: Req, res: Res) => {
  const clientIP = req.headers[ 'x-forwarded-for' ] || req.socket.remoteAddress
  
  res.status(StatusCodes.CREATED).json({
    msg: 'CreateSurveyController_CREATED',
    msg2: 'IP測試',
    ip: clientIP
  })
}
