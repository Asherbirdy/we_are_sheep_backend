import { StatusCodes } from '../../enums'
import { Req, Res } from '../../types'
import { Sheet } from '../../models/Sheet'

export const CreateSheetController = async (req: Req, res: Res) => {
  const { name, api } = req.body
  if (!name || !api) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: 'Name and api are required',
    })
  }
  if (!req.user?.userId) {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      message: 'Unauthorized',
    })
  }

  const sheet = await Sheet.create({ name, api, createdBy: req.user?.userId })
  res.status(StatusCodes.CREATED).json({
    message: 'Sheet created successfully',
    sheet,
  })
}
