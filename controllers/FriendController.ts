import {
  GetSendFriendRequestController,
  SendFriendRequestController,
  GetYourFriendRequestController,
  FriendListController,
} from './Friend'

export const FriendController = {
  // * 發送好友請求
  sendFriendRequest: SendFriendRequestController,
  // * 取得發送中的好友請求
  getSendFriendRequest: GetSendFriendRequestController,
  // * 取得你的好友請求
  getYourFriendRequest: GetYourFriendRequestController,
  // * 取得好友列表
  getFriendList: FriendListController,
}

