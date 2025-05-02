import { CreateSheetController } from './Sheet/CreateSheetController'
import { GetAllGoogleSheetApiController } from './Sheet/GetAllGoogleSheetApiController'
import { EditGoogleSheetController } from './Sheet/EditGoogleSheetController'
export const SheetController = {
  createSheet: CreateSheetController,
  getAllGoogleSheetApi: GetAllGoogleSheetApiController,
  editGoogleSheet: EditGoogleSheetController,
}
