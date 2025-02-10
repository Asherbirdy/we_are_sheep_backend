import { Role, StatusCodes } from '../../enums'
import { BadRequestError, NotFoundError } from '../../errors'
import { Sheep } from '../../models/Sheep'
import User from '../../models/User'
import { Req, Res } from '../../types'

export const DeleteUserAndSheepController = async (req: Req, res: Res) => {
  const { userId } = req.query

  if(!userId) {
    throw new BadRequestError('User ID is required')
  }

  const user = await User.findById(userId)

  if(!user) {
    throw new NotFoundError('User not found')
  }

  if(user.role === Role.dev) {
    throw new BadRequestError('User is a developer, cannot delete')
  }

  await user.deleteOne()
  await Sheep.deleteMany({ userId: user._id })

  res.status(StatusCodes.OK).json({
    message: 'User and sheep deleted successfully',
  })
}
