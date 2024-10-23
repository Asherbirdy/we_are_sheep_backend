import {
  GetAllDistrictsController,
  CreateDistrictController,
  EditDistrictController
} from './District/index'

export const DistrictController = {
  get: GetAllDistrictsController,
  create: CreateDistrictController,
  edit: EditDistrictController
}
