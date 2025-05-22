import { CreateLandingPageController, GetAllLandingPageController, EditLandingPageInfoByIdController, GetLandingPageInfoByIdController, SetUrlPathController, DeleteLandingPageByIdController, EditLandingPageHtmlByIdController } from './LandingPage'

export const LandingPageController = {
  createLandingPage: CreateLandingPageController,
  getAllLandingPage: GetAllLandingPageController,
  editLandingPageInfoById: EditLandingPageInfoByIdController,
  getLandingPageInfoById: GetLandingPageInfoByIdController,
  SetUrlPathController: SetUrlPathController,
  deleteLandingPageById: DeleteLandingPageByIdController,
  editLandingPageHtmlById: EditLandingPageHtmlByIdController
}
