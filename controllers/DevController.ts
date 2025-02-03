import {
  GetDevEnvController,
  SetDevDistrictController,
  DeleteNonVerifiedEmailAccountController,
  CheckIpController,
  DeleteUserController
} from './Dev/index'

export const DevController = {
  // ** 
  get: GetDevEnvController,
  // **
  setDevDistrict: SetDevDistrictController,
  // **
  deleteNonVerifiedEmailAccount: DeleteNonVerifiedEmailAccountController,
  // **
  checkIp: CheckIpController,
  // **
  deleteUser: DeleteUserController
}
