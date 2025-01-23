import { StatusCodes } from '../../enums'
import { Req, Res } from '../../types'

// 接受好友請求
export const GetFriendListController = async (req: Req, res: Res) => {
  res.status(StatusCodes.OK).json({
    msg: 'FriendListController_GET_SUCCESS',
    data: []
  })
}
