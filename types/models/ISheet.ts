import { SheetType } from '../../enums/SheetType'
import { IUser } from './IUser'

export interface ISheet {
  name: string
  type: SheetType[]
  url: string
  api: string
  isActive: boolean
  createdBy: IUser
}