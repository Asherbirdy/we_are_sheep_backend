import { StatusCodes } from '../../enums'
import { Req, Res } from '../../types'
import { Sheet } from '../../models/Sheet'
export const DeleteGoogleSheetController = async (req: Req, res: Res) => {
  const { id } = req.body
  await Sheet.findByIdAndDelete(id)
  res.status(StatusCodes.OK).json({
    message: 'Sheet deleted successfully',
  })
}