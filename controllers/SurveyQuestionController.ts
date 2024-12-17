import {
  CreateSurveyQuestionController,
  EditSurveyByIdController,
  GetSurveyQuestionController
} from './SurveyQuestion'

export const SurveyQuestionController = {
  getSurveyQuestion: GetSurveyQuestionController,
  createSurveyQuestion: CreateSurveyQuestionController,
  editSurveyById: EditSurveyByIdController
}
