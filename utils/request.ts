import { StatusCodes } from '../enums'
import { Res } from '../types'

export const request = {
  checkEmpty: (res: Res, bodyElement: Array<object>) => {
    console.log(bodyElement)
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