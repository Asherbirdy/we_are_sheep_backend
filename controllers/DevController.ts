import {
  GetDevEnvController,
  SetDevDistrictController,
  DeleteNonVerifiedEmailAccountController,
  CheckIpController,
  DeleteUserAndSheepController
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
  deleteUserAndSheep: DeleteUserAndSheepController
}
