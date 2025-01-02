export interface SurveyItem {
  question: string
  answer: string
}

export interface ISurvey {
  name: string
  ageRange: string
  contact: string
  userNotes: string
  survey: SurveyItem[]
  createdDate: Date
  submitNumber: number
  ip: string
}