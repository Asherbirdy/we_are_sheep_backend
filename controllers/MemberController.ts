import {
  GetAllMemberController,
  CreateMemberToDistrictController,
  EditMemberInfoController,
  GetAllDistrictMemberFromUserController,
  EditMemberMeetingStatusController,
  DeleteMemberByIdController
} from './Member'

export const MemberController = {
  // get all members
  get: GetAllMemberController,
  // create member
  create: CreateMemberToDistrictController,
  // edit member
  editMemberInfo: EditMemberInfoController,
  // 取得此user的district member
  getAllDistrictMemberFromUser: GetAllDistrictMemberFromUserController,
  // 編輯member meeting status
  editMemberMeetingStatus: EditMemberMeetingStatusController,
  // delete member by id
  deleteMemberById: DeleteMemberByIdController
}

