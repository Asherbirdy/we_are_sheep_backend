import { CreateGroupController, SetGroupLeaderController, GetAllGroupsController, SetUserIntoGroupController, EditGroupController } from './Group'

export const GroupController = {
  create: CreateGroupController,
  setGroupLeader: SetGroupLeaderController,
  getAllGroups: GetAllGroupsController,
  setUserIntoGroup: SetUserIntoGroupController,
  editGroup: EditGroupController
}
