import { 
  GetAllMemberModule,
  CreateMemberModule,
  ApproveMemberToActiveModule,
  EditMemberModule ,
  GetAllDistrictMemberFromUserModule,
  EditMemberMeetingStatusModule
} from '../modules'

export const MemberController = {
  // get all members
  get: GetAllMemberModule,
  // create member
  create: CreateMemberModule,
  // 通過 member
  approveMemberToActive: ApproveMemberToActiveModule,
  // edit member
  editMember: EditMemberModule,
  // 取得此user的district member
  getAllDistrictMemberFromUser: GetAllDistrictMemberFromUserModule,
  // 編輯member meeting status
  editMemberMeetingStatus: EditMemberMeetingStatusModule
}

