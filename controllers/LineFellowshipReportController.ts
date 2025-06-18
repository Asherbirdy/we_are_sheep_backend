import { CreateLineFellowshipReportIdController, EditLineFellowshipReportIdController, GetAllLineFellowshipReportIdController } from './LineFellowshipReport'

export const LineFellowshipReportController = {
  getAll: GetAllLineFellowshipReportIdController,
  create: CreateLineFellowshipReportIdController,
  edit: EditLineFellowshipReportIdController
}