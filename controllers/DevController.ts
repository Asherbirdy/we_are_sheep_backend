import {
  GetDevEnvController,
  SetDevDistrictController,
  DeleteEmailVerifyAccountController
} from './Dev/index'

export const DevController = {

  // ** 
  get: GetDevEnvController,
  // **
  setDevDistrict: SetDevDistrictController,
  // **
  deleteEmailVerifyAccount: DeleteEmailVerifyAccountController
}
