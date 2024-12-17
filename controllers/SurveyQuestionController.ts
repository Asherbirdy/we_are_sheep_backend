import {
  CreateSurveyQuestionController,
  EditSurveyByIdController,
  GetSurveyQuestionController,
  SetSurveyQuestionOrderController,
  GetSurveyQuestionByOrderController
} from './SurveyQuestion'

export const SurveyQuestionController = {
  getSurveyQuestion: GetSurveyQuestionController,
  createSurveyQuestion: CreateSurveyQuestionController,
  editSurveyById: EditSurveyByIdController,
  setSurveyQuestionOrder: SetSurveyQuestionOrderController,
  getSurveyQuestionByOrder: GetSurveyQuestionByOrderController
}
