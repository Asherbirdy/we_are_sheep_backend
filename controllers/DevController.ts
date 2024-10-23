import {
  EditUserDistrictAndRoleController,
  GetDevEnvController,
  SetDevDistrictController
} from './Dev/index'

export const DevController = {

  // ** 
  get: GetDevEnvController,
  // ** 
  editUserDistrictAndRole: EditUserDistrictAndRoleController,
  // **
  setDevDistrict: SetDevDistrictController
}
