import { 
  GetAllLineAccountMemberController,
  CreateLineAccountMemberController,
  ActivateLineAccountMemberController,
  EditActivateLineAccountMemberController,
  DeleteLineAccountMemberController,
  CheckLineAccountMemberController
} from './LineAccountMember'

export const LineAccountMemberController = {
  getAllLineAccountMember: GetAllLineAccountMemberController,
  createLineAccountMember: CreateLineAccountMemberController,
  activateLineAccountMember: ActivateLineAccountMemberController,
  editActivateLineAccountMember: EditActivateLineAccountMemberController,
  deleteLineAccountMember: DeleteLineAccountMemberController,
  checkLineAccountMember: CheckLineAccountMemberController
}