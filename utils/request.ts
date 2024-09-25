import { StatusCodes } from '../enums'
import { Res } from '../types'

export const requestUtil = {
  checkEmpty: (res: Res, bodyElement: Array<string>) => {
    bodyElement.forEach((element) => {
      if (!element) {
        res.status(StatusCodes.BAD_REQUEST).json({
          msg: `${ element } is required`
        })
        return
      }
    })
  }
}