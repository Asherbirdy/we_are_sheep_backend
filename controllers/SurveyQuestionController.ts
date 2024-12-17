import {
  CreateSurveyQuestionController,
  EditSurveyByIdController,
  GetSurveyQuestionController,
  SetSurveyQuestionOrderController
} from './SurveyQuestion'

export const SurveyQuestionController = {
  getSurveyQuestion: GetSurveyQuestionController,
  createSurveyQuestion: CreateSurveyQuestionController,
  editSurveyById: EditSurveyByIdController,
  setSurveyQuestionOrder: SetSurveyQuestionOrderController
}
