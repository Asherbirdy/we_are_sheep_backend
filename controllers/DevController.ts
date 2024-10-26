import {
  GetDevEnvController,
  SetDevDistrictController,
  DeleteNonVerifiedEmailAccountController
} from './Dev/index'

export const DevController = {
  // ** 
  get: GetDevEnvController,
  // **
  setDevDistrict: SetDevDistrictController,
  // **
  deleteNonVerifiedEmailAccount: DeleteNonVerifiedEmailAccountController
}
