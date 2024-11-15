import {
  GetAllMemberController,
  CreateMemberToDistrictController,
  EditMemberInfoController,
  GetAllDistrictMemberFromUserController,
  EditMemberMeetingStatusController,
  DeleteMemberByIdController,
  EditDistrictMemberGroupController
} from './Member'

export const MemberController = {
  get: GetAllMemberController,
  create: CreateMemberToDistrictController,
  editMemberInfo: EditMemberInfoController,
  editDistrictMemberGroup: EditDistrictMemberGroupController,
  getAllDistrictMemberFromUser: GetAllDistrictMemberFromUserController,
  editMemberMeetingStatus: EditMemberMeetingStatusController,
  deleteMemberById: DeleteMemberByIdController
}

