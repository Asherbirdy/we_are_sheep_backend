import { StatusCodes } from '../../enums'
import { Req, Res } from '../../types'
import { Sheet } from '../../models/Sheet'
export const EditGoogleSheetController = async (req: Req, res: Res) => {
  const { id, name, api } = req.body

  if (!id || !name || !api) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: 'Id, name and api are required',
    })
  }

  const sheet = await Sheet.findByIdAndUpdate(id, { name, api }, { new: true })
  
  res.status(StatusCodes.OK).json({
    message: 'Sheet updated successfully',
    sheet,
  })
}