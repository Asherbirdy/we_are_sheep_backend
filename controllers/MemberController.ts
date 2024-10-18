import { StatusCodes } from '../enums'
import { Req, Res } from '../types'
import { Member } from '../models/Member'
import { 
  GetAllMemberModule, CreateMemberModule, ApproveMemberToActiveModule, EditMemberModule ,GetAllDistrictMemberFromUserModule, EditMemberMeetingStatusModule
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
  getAllDistrictMemberFromUser: GetAllDistrictMemberFromUserModule,
  editMemberMeetingStatus: EditMemberMeetingStatusModule
}

