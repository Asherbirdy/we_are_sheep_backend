import {
  GetDevEnvController,
  SetDevDistrictController,
  DeleteNonVerifiedEmailAccountController,
  CheckIpController,
  DeleteUserAndSheepController,
  SetUserLandingPageAccessController
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
  deleteUserAndSheep: DeleteUserAndSheepController,
  // **
  setUserLandingPageAccess: SetUserLandingPageAccessController
}
