import {
  MemberNoteCreateController,
  MemberNoteEditController,
  MemberNoteDeleteController,
  GetMemberNoteByIdController
} from './MemberNote'

export const MemberNoteController = {
  create: MemberNoteCreateController,
  edit: MemberNoteEditController,
  delete: MemberNoteDeleteController,
  getById: GetMemberNoteByIdController
}
