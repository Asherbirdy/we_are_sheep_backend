import {
  GetAllMemberController,
  CreateMemberController,
  EditMemberController,
  GetAllDistrictMemberFromUserController,
  EditMemberMeetingStatusController
} from './Member/index'

export const MemberController = {
  // get all members
  get: GetAllMemberController,
  // create member
  create: CreateMemberController,
  // edit member
  editMember: EditMemberController,
  // 取得此user的district member
  getAllDistrictMemberFromUser: GetAllDistrictMemberFromUserController,
  // 編輯member meeting status
  editMemberMeetingStatus: EditMemberMeetingStatusController
}

