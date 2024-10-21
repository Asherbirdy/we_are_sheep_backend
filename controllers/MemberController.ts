import {
  GetAllMemberController,
  CreateMemberController,
  ApproveMemberToActiveController,
  EditMemberController,
  GetAllDistrictMemberFromUserController,
  EditMemberMeetingStatusController
} from './MemberController/index'

export const MemberController = {
  // get all members
  get: GetAllMemberController,
  // create member
  create: CreateMemberController,
  // 通過 member
  approveMemberToActive: ApproveMemberToActiveController,
  // edit member
  editMember: EditMemberController,
  // 取得此user的district member
  getAllDistrictMemberFromUser: GetAllDistrictMemberFromUserController,
  // 編輯member meeting status
  editMemberMeetingStatus: EditMemberMeetingStatusController
}

