import {
  GetAllMemberController,
  CreateMemberToDistrictController,
  EditMemberInfoController,
  GetAllDistrictMemberFromUserController,
  EditMemberMeetingStatusController,
  DeleteMemberByIdController,
  MemberNoteCreateController,
  MemberNoteEditController,
  MemberNoteDeleteController
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
  deleteMemberById: DeleteMemberByIdController,
  /*
   member note
  */ 
  // create member note
  createMemberNote: MemberNoteCreateController,
  // edit member note
  editMemberNote: MemberNoteEditController,
  // delete member note
  deleteMemberNote: MemberNoteDeleteController
}

