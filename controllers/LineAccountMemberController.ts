import { 
  GetAllLineAccountMemberController,
  CreateLineAccountMemberController,
  ActivateLineAccountMemberController,
  EditActivateLineAccountMemberController,
  DeleteLineAccountMemberController 
} from './LineAccountMember'

export const LineAccountMemberController = {
  getAllLineAccountMember: GetAllLineAccountMemberController,
  createLineAccountMember: CreateLineAccountMemberController,
  activateLineAccountMember: ActivateLineAccountMemberController,
  editActivateLineAccountMember: EditActivateLineAccountMemberController,
  deleteLineAccountMember: DeleteLineAccountMemberController
}