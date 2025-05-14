import { CreateSheetController } from './Sheet/CreateSheetController'
import { GetAllGoogleSheetApiController } from './Sheet/GetAllGoogleSheetApiController'
import { EditGoogleSheetController } from './Sheet/EditGoogleSheetController'
import { DeleteGoogleSheetController } from './Sheet/DeleteGoogleSheetController'
export const SheetController = {
  createSheet: CreateSheetController,
  getAllGoogleSheetApi: GetAllGoogleSheetApiController,
  editGoogleSheet: EditGoogleSheetController,
  deleteGoogleSheet: DeleteGoogleSheetController,
}
